class Api::SitesController < ApplicationController
  before_action :require_login, except: :show
  before_action :require_owner, except: [:create, :index, :show]

  def index
    @sites = current_user.sites
    render 'index'
  end

  def show
    @site = Site.find(params[:id])
    render 'show'
  end

  def create
    @site = current_user.sites.new(site_params)

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

  def require_owner
    site = Site.find(params[:id])
    unless site.user == current_user
      render "User cannot edit a site they don't own", status: :unauthorized
    end
  end

  def site_params
    params.require(:site).permit(:title, :description)
  end
end
