class Api::ElementsController < ApplicationController

  def create
    @element = Element.new(element_params)

    if @element.save
      render 'show'
    else
      render @element.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @element = Element.find(params[:id])

    if @element.update(element_params)
      render 'show'
    else
      render @element.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @element = Element.find(params[:id])

    if @element.destroy
      render 'show'
    else
      render 'show', status: :unprocessable_entity
    end
  end

  private

  def element_params
    params.require(:element)
          .permit(:page_id, :content, :tag, :classes, :style, :src, :color)
  end
end
