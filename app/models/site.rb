class Site < ActiveRecord::Base
  validates :title, presence: true
  after_create :ensure_page
  has_many :pages

  private

  def ensure_page
    debugger
    pages.create(title: "New Page")
  end
end
