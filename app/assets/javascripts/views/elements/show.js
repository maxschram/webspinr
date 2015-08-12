Webspinr.Views.Element = Backbone.CompositeView.extend({
  template: JST["elements/element"],

  className: function (){
    return "element " + this.model.get("classes");
  },

  tagName: function () {
    return this.model.get("tag");
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model, "change", this.saveElement);
    this.render();
  },

  render: function () {
    this.$el.html(this.template({ element: this.model }));
    this.$el.attr("style", this.model.get("style"));
    this.delegateEvents();
    this.onRender();
    this.attachSubviews();
    return this;
  }
});
