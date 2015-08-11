class Site < ActiveRecord::Base
  validates :title, presence: true
end
