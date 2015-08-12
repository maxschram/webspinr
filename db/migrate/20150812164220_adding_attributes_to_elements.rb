class AddingAttributesToElements < ActiveRecord::Migration
  def change
    add_column :elements, :src, :string, null: false, default: ""
  end
end
