Webspinr.Views.Page = Backbone.CompositeView.extend({
  template: JST["pages/page"],
  className: 'page',

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, 'add', this.addElementView);
    this.collection.each(this.addElementView.bind(this));
  },

  addElementView: function (element) {
    var subview = new Webspinr.Views.Element({ model: element });
    this.addSubview("#elements", subview);
  },

  render: function () {
    this.$el.html(this.template({ page: this.model }));
    this.$el.css("background-image", this.model.get("background_image"));
    this.$el.css("background-color", this.model.get("background_color"));
    this.$el.css("width", this.model.get("width"));
    this.$el.css("height", this.model.get("height"));
    this.$el.css("box-sizing", "border-box");
    this.attachSubviews();
    return this;
  }
});
