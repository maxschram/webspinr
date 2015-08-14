class Site < ActiveRecord::Base
  validates :title, presence: true
  validates :user, presence: true
  after_create :ensure_page
  has_many :pages
  has_many :elements, through: :pages, source: :elements
  belongs_to :user

  private

  def ensure_page
    pages.create(title: "index", background: "green")
  end
end
