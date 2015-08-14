class AddingColorToPages < ActiveRecord::Migration
  def change
    add_column :pages, :background_image, :string, null: false, default: ""
    add_column :pages, :background_color, :string, null: false
  end
end
