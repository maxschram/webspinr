class Element < ActiveRecord::Base
  validates :tag, :page, presence: true
  belongs_to :page
  has_one :site, through: :page, source: :site
end
