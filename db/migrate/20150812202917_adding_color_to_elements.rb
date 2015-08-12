class AddingColorToElements < ActiveRecord::Migration
  def change
    add_column :elements, :color, :text, null: false, default: ""
  end
end
