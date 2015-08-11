json.(site, :id, :title, :description)

json.pages do
  json.partial!('api/pages/page', collection: site.pages, as: :page)
end
