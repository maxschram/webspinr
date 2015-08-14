Webspinr.Views.Page = Backbone.CompositeView.extend({
  template: JST["pages/page"],
  className: 'page',

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addElementView);
    this.collection.each(this.addElementView.bind(this));
  },

  addElementView: function (element) {
    var subview = new Webspinr.Views.Element({ model: element });
    this.addSubview("#elements", subview);
  },

  render: function () {
    this.$el.html(this.template({ page: this.model }));
    this.$el.css("background", this.model.get("background"));
    this.attachSubviews();
    return this;
  }
});
