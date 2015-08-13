class EditorController < ApplicationController
  before_action :require_login

  def load
    render 'editor'
  end
end
