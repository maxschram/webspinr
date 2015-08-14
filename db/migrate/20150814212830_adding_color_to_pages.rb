class AddingColorToPages < ActiveRecord::Migration
  def change
    add_column :pages, :background, :string, null: false
  end
end
