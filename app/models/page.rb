class Page < ActiveRecord::Base
  validates :title, :site, presence: true

  belongs_to :site
  has_many :elements
end
