class Attribute < ActiveRecord::Base
  before_validation Proc.new { |a| a.name = a.name.titleize }

  validates_uniqueness_of :name
  def net_votes
    up_votes - down_votes
  end

  def up_vote
    self.up_votes += 1
  end

  def down_vote
    self.down_vote += 1
  end
end
