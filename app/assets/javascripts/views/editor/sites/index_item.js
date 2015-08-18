Webspinr.Views.SitesIndexItem = Backbone.View.extend({
  template: JST["sites/index_item"],
  className: 'site-index-item',

  events: {
    "click .edit": "editSite",
    "click .live": "viewSite",
    "click .download": "downloadSite"
  },

  initialize: function () {
    // this.listenTo(this.model, "sync", this.render);
  },

  downloadSite: function (e) {
    this.$(".download-links").empty();
    this.model.fetch({
      success: function () {
        var page;
        var pageHTML;
        var pages = [];
        this.model.pages().each(function (page) {
          var background_color = "background-color: " + page.get("background_color");
          pageHTML = "<style> body {\n" + background_color + "} </style>\n";
          page.elements().each(function (element) {
            pageHTML += element.toHTML()[0].outerHTML + "\n";
          });
          var downloadLink = $("<a>")
          downloadLink.addClass("btn btn-link")
                      .attr("download", page.get("title")+ ".html")
                      .html(page.get("title"))
                      .attr("href", this.makeFile(pageHTML));
          this.$(".download-links").append(downloadLink);
        }.bind(this));
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
