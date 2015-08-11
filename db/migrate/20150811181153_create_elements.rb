class CreateElements < ActiveRecord::Migration
  def change
    create_table :elements do |t|
      t.text :content
      t.string :tag, null: false
      t.string :classes
      t.references :page, index: true, null: false
      t.timestamps null: false
    end
  end
end
