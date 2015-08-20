Webspinr.Views.SitesIndexItem = Backbone.View.extend({
  template: JST["sites/index_item"],
  className: 'site-index-item',

  events: {
    "click .edit": "editSite",
    "click .live": "viewSite",
    "click .download": "downloadSite",
    "click .site-title": "editSite"
  },

  initialize: function () {
  },

  downloadSite: function (e) {
    this.$(".download-links").empty();
    this.model.fetch({
      success: function () {
        var page;
        var pageHTML;
        var pages = [];
        var zip = new JSZip();
        var site = zip.folder(this.model.get("title"));
        this.model.pages().each(function (page) {
          var background_color = "background-color: " + page.get("background_color");
          var background_image = "";
          if (page.get("background_image")) {
            background_image = "background-image: " + page.get("background_image") +  ";"+
            "background-repeat: no-repeat; background-size: cover; background-position: center;"
          }
          pageHTML = "<head><link rel=stylesheet type=text/css href=https://necolas.github.io/normalize.css/3.0.2/normalize.css></head>";
          pageHTML += "\n<style> body {\n" + background_color + ";" +
            "width: " + page.get("width")+ "px;" +
            "height: " + page.get("height") + "px;"+
            background_image +
            "} </style>\n";
          page.elements().each(function (element) {
            pageHTML += element.toHTML()[0].outerHTML + "\n";
          });
          site.file(page.get("title") + ".html", pageHTML);
        }.bind(this));
        var content = zip.generate({ type: "blob" });
        saveAs(content, this.model.get("title") + ".zip");
      }.bind(this)
    });
    $(e.currentTarget).blur();
  },

  makeFile: function (text) {
    var data = new Blob([text], { type: 'text/plain'});
    var textFile = window.URL.createObjectURL(data);

    return textFile;
  },

  viewSite : function () {
    window.open("sites#" + this.model.id);
  },

  editSite: function () {
    Backbone.history.navigate("#/" + this.model.id, { trigger: true });
  },

  render: function () {
    this.$el.html(this.template({ site: this.model }));
    return this;
  }
});
