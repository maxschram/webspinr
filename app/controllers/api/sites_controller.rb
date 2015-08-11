class Api::SitesController < ApplicationController
  def show
    @site = Site.find(params[:id])
    render 'show'
  end

  def create
    @site = Site.new(site_params)

    if @site.save
      render 'show'
    else
      render @site.error.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @site = Site.find(params[:id])

    if @site.update(site_params)
      render 'show'
    else
      render @site.error.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @site = Site.find(params[:id])
    @site.destroy
    render 'show'
  end

  private

  def site_params
    params.require(:site).permit(:title, :description)
  end
end
