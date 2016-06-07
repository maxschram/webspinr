guest = User.create(
  {email: "guest", password: "password"}
)
guest = User.find_by(email: "guest")
site = guest.sites.first
site = Site.create(
  {title: "Bay Area Hikes", description: "Great hikes in the Bay", user: guest}
) unless site
page = site.pages.first
page.update!(
  {title: "index", background_image: "", background_color: "#004d4d", height: 800, width: 1400}
)
page.elements.destroy_all
Element.create!([
  {content: "", tag: "img", attrs: "{\"style\":{\"top\":\"53.5px\",\"left\":\"0.5px\",\"position\":\"absolute\",\"z-index\":2},\"class\":[\"image\"],\"src\":\"https://www.filepicker.io/api/file/q7JLiwbjTGG2C3glG27p\"}", page: page},
  {content: "(Above) Alamere Falls - Point Reyes National Seashore\r\n\r\nA rewarding walk along the Bolinas Coast Trail turns into a hike past mountain lakes to this enchanted waterfall. \r\n\r\nDuring some months, you may catch a whale migration out at sea.\r\n\r\n(Right) Skyline to the Sea Trail - Big Basin\r\n\r\nA manageable 2.5 hour, moderate hike from park headquarters takes you to an incredible ocean view summit. \r\n\r\nAt the top a sandy path reminds you that this was once the bottom of the ocean.", tag: "p", attrs: "{\"style\":{\"top\":\"523.5px\",\"left\":\"74.5px\",\"position\":\"absolute\",\"font-size\":\"16px\",\"z-index\":3},\"class\":[\"text\"]}", page: page},
  {content: "This page describes some of the most beautiful hikes in the Bay Area\r\n", tag: "p", attrs: "{\"style\":{\"top\":\"129.5px\",\"left\":\"511.5px\",\"position\":\"absolute\",\"font-size\":\"50px\",\"z-index\":3},\"class\":[\"text\"]}", page: page},
  {content: "", tag: "div", attrs: "{\"style\":{\"top\":\"460.5px\",\"left\":\"50.5px\",\"position\":\"absolute\",\"width\":\"842px\",\"height\":\"308px\",\"background\":\"#D0EBFF\",\"z-index\":2},\"class\":[\"box\"]}", page: page},
  {content: "", tag: "div", attrs: "{\"style\":{\"top\":\"53.5px\",\"left\":\"500.5px\",\"position\":\"absolute\",\"background\":\"black\",\"width\":\"5px\",\"height\":\"374px\",\"z-index\":3},\"class\":[\"box\",\"vertical-line\",\"line\"]}", page: page},
  {content: "Great Bay Area Hikes", tag: "p", attrs: "{\"style\":{\"top\":\"53.5px\",\"left\":\"511.5px\",\"position\":\"absolute\",\"font-size\":\"80px\",\"z-index\":3,\"color\":\"#FFFFFF\"},\"class\":[\"text\"]}", page: page},
  {content: "", tag: "img", attrs: "{\"style\":{\"top\":\"427.5px\",\"left\":\"924.5px\",\"position\":\"absolute\",\"z-index\":2},\"class\":[\"image\"],\"src\":\"https://www.filepicker.io/api/file/kAhr2v9PTsGq5nnFvldd\"}", page: page},
  {content: "", tag: "div", attrs: "{\"style\":{\"top\":\"53.5px\",\"left\":\"500.5px\",\"position\":\"absolute\",\"width\":\"922px\",\"height\":\"374px\",\"background\":\"#29a3a3\",\"z-index\":2},\"class\":[\"box\"]}", page: page}
])

