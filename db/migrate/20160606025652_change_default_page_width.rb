class ChangeDefaultPageWidth < ActiveRecord::Migration
  def change
    change_column_default :pages, :width, 1600
  end
end
