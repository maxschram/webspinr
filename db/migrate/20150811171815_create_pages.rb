class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string :title, null: false
      t.references :sites, index: true
      t.timestamps null: false
    end
  end
end
