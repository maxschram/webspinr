json.(page, :id, :title)

json.elements do
  json.partial!('api/elements/element', collection: page.elements, as: :element)
end
