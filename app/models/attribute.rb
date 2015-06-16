class Attribute < ActiveRecord::Base
  def net_votes
    up_votes - down_votes
  end
end
