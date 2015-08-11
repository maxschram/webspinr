class CreateElements < ActiveRecord::Migration
  def change
    create_table :elements do |t|
      t.text :content, null: false, default: ""
      t.string :tag, null: false
      t.string :classes, null: false, default: ""
      t.references :page, index: true, null: false
      t.timestamps null: false
    end
  end
end
