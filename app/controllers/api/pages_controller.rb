class Api::PagesController < ApplicationController
  def create
    @page = Page.new(page_params)

    if @page.save
      render 'show'
    else
      render @page.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @page = Page.find(params[:id])

    if @page.update(page_params)
      render 'show'
    else
      render @page.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @page = Page.find(params[:id])

    if @page.destroy
      render 'show'
    else
      render 'show', status: :unprocessable_entity
    end
  end

  private

  def page_params
    params.require(:page).permit(:title, :site_id)
  end
end
