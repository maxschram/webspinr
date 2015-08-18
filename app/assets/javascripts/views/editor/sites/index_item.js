Webspinr.Views.SitesIndexItem = Backbone.View.extend({
  template: JST["sites/index_item"],
  className: 'site-index-item',

  events: {
    "click .edit": "editSite",
    "click .live": "viewSite",
    "click .download": "downloadSite"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  downloadSite: function (e) {
    this.model.fetch({
      success: function () {
        var page;
        var pageHTML;
        this.model.pages().each(function (page) {
          pageHTML = "";
          page.elements().each(function (element) {
            pageHTML += element.toHTML()[0].outerHTML + "\n";
          });
          // console.log(pageHTML);
        }.bind(this));
      }.bind(this)
    });
    $(e.currentTarget).blur();
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
