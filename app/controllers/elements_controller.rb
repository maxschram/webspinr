class ElementsController < ApplicationController

  def create
    @element = Element.new(element_params)

    if @element.save
      render 'element', element: @element
    else
      render @element.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @element = Element.find(params[:id])

    if @element.update(element_params)
      render 'element', element: @element
    else
      render @element.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @element = Element.find(params[:id])

    if @element.destroy
      render 'element', element: @element
    else
      render 'element', element: @element, status: :unprocessable_entity
    end
  end

  private

  def element_params
    params.require(:element).permit(:page_id, :content, :tag, :classes, :style)
  end
end
