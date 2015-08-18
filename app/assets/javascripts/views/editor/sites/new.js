Webspinr.Views.NewSite = Backbone.CompositeView.extend({
  model: Webspinr.Models.Site,
  className: 'panel',

  template: function () {
    if (this._editing) {
      return JST["sites/form"]();
    } else {
      return JST["sites/new"]();
    }
  },

  events: {
    "click .new-site-button": "newSite",
    "submit form": "createSite"
  },

  initialize: function () {
    this._editing = false;
  },

  newSite: function () {
    this._editing = true;
    this.render();
    this.$("#title").focus();
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  createSite: function (e) {
    e.preventDefault();
    var formData = this.$("form").serializeJSON();
    var site = new Webspinr.Models.Site(formData);
    site.save({}, {
      success: function () {
        this._editing = false;
        Backbone.history.navigate(
          ("#/" + site.id),
          { trigger: true }
        );
      }
    });
  }
});
