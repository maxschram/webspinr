json.(page, :id, :title, :background)

json.elements do
  json.partial!('api/elements/element', collection: page.elements, as: :element)
end
