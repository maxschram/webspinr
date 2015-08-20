class SitesController < ApplicationController
  def show
    @site = Site.find_by(id: params[:id])
    @pageName = params[:page_title]
    render 'show'
  end
end
