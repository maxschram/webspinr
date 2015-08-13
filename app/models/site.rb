class Site < ActiveRecord::Base
  validates :title, presence: true
  after_create :ensure_page
  has_many :pages
  has_many :elements, through: :pages, source: :elements

  private

  def ensure_page
    pages.create(title: "index")
  end
end
