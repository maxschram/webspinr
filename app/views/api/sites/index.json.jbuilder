json.array! @sites do |site|
  json.(site, :id, :title)
end
