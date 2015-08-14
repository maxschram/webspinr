json.(page, :id, :title, :background_image, :background_color)

json.elements do
  json.partial!('api/elements/element', collection: page.elements, as: :element)
end
