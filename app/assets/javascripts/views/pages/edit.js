Webspinr.Views.EditPage = Backbone.CompositeView.extend({
  template: JST["pages/edit"],

  events: {
  },

  initialize: function () {
    this.listenTo(this.collection, "add", this.render);
    this.listenTo(this.collection, 'add', this.addElementView);
    this.collection.each(this.addElementView.bind(this));
  },

  addElementView: function (element) {
    var subview = new Webspinr.Views.EditElement({ model: element });
    this.addSubview("#elements", subview);
  },

  render: function () {
    this.$el.html(this.template({ page: this.model }));
    this.delegateEvents();
    this.attachSubviews();
    return this;
  }
});
