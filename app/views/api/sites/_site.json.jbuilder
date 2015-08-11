json.(site, :id, :title, :description)

json.pages do
  json.partial!('page', collection: site.pages, as: :page)
end
