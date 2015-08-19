Webspinr.Views.PagePropertiesMenu = Backbone.CompositeView.extend({
  template: JST["menus/page_properties"],
  className: 'page-properties-menu',

  initialize: function (options) {
    this.site = options.site;
  },

  events: {
    "click .background-image": "setBackgroundImage",
    "click .background-color": "setBackgroundColor",
    "submit form": "setTitle",
    "blur #title": "setTitle",
    "mouseleave .colorpicker": "removeColorpicker",
    "click .save-color": "setColor",
    "mouseleave": "removeColorpicker",
    "click .view-page-live": "viewLive"
  },

  viewLive: function () {
    window.open("sites#/" + this.site.id + "/" + this.model.escape("title"));
  },

  setTitle: function (e) {
    e.preventDefault();
    var newTitle = this.$("form").serializeJSON().title;
    this.model.save({title: newTitle});
  },

  setBackgroundImage: function (e) {
    e.preventDefault();
    $(e.currentTarget).blur();
    filepicker.pick( {
      mimetype: 'image/*',
      services: ['CONVERT', 'BOX','CLOUDDRIVE','COMPUTER','DROPBOX','FACEBOOK','GOOGLE_DRIVE','FLICKR','EVERNOTE','GMAIL','INSTAGRAM','IMAGE_SEARCH','URL','WEBCAM']
      },

      function (blob) {
        this.model.save({ background_image: "url(" + blob.url + ")"});
      }.bind(this));
  },

  setBackgroundColor: function (e) {
    e.preventDefault();
    $(e.currentTarget).blur();
    if (this._colorpicker) {
      this.removeColorpicker();
    } else {
      var colorpicker = new Webspinr.Views.Colorpicker ({
        model: this.model,
        setColor: this.setColor.bind(this)
      });
      this._colorpicker = colorpicker;
      colorpicker.render();
      this.$(".save-color").focus();
      this.$el.append(colorpicker.$el);
    }
  },

  setColor: function () {
    var color = this._colorpicker.getColor();
    this.model.save({ background_color: color });
  },

  removeColorpicker: function () {
    if ( this._colorpicker ) {
      this._colorpicker.remove();
      this._colorpicker = null;
    }
  },

  render: function () {
    this.$el.html(this.template({ page: this.model }));
    return this;
  }
});
