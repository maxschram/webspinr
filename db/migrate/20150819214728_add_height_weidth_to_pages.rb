class AddHeightWeidthToPages < ActiveRecord::Migration
  def change
    add_column :pages, :height, :integer, null: false, default: 800
    add_column :pages, :width, :integer, null: false, default: 1200
  end
end
