class SitesController < ApplicationController
  def show
    @site = Site.find_by(id: params[:id])
    render 'show'
  end
end
