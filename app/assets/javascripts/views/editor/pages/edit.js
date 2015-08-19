Webspinr.Views.EditPage = Backbone.CompositeView.extend({
  template: JST["pages/edit"],
  className: 'page',

  events: {
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "add", this.render);
    this.listenTo(this.collection, 'add', this.addElementView);
    this.listenTo(this.collection, "remove", this.removeElementView);
    this.collection.each(this.addElementView.bind(this));
  },

  addElementView: function (element) {
    var subview = new Webspinr.Views.EditElement({ model: element });
    this.addSubview("#elements", subview);
    subview.render();
  },

  removeElementView: function (element) {
    this.removeModelSubview("#elements", element);
  },

  render: function () {
    this.$el.html(this.template({ page: this.model }));
    if (this.model.get("background_image")) {
      this.$el.css("background-image", this.model.get("background_image"));
    }
    this.$el.css("background-color", this.model.get("background_color"));
    this.$el.css("width", this.model.get("width"));
    this.$el.css("height", this.model.get("height"));
    this.$el.css("box-sizing", "border-box");
    this.attachSubviews();
    this.onRender();
    return this;
  }
});
