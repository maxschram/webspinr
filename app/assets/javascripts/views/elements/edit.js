Webspinr.Views.EditElement = Backbone.CompositeView.extend({
  template: JST["elements/edit"],

  className: function (){
    return "element " + this.model.get("classes");
  },

  tagName: function () {
    return this.model.get("tag");
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
    this.render();
  },

  render: function () {
    console.log(this.$el);
    this.$el.html(this.template({ element: this.model }));
    this.$el.draggable();
    this.delegateEvents();
    this.attachSubviews();
    return this;
  }
});
