class Attribute < ActiveRecord::Base
  before_save Proc.new { |a| a.name = a.name.titleize }

  def net_votes
    up_votes - down_votes
  end
end
