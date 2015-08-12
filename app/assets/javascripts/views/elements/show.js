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
    this.setColor();
    this.render();
  },

  setColor: function () {
    if (this.model.get("tag") === "div") {
      this.$el.css("background-color", this.model.get("color"));
    } else {
      this.$el.css("color", this.model.get("color"));
    }
  },

  render: function () {
    this.$el.html(this.template({ element: this.model }));
    this.$el.attr("style", this.model.get("style"));
    this.$el.attr("src", this.model.get("src"));
    this.delegateEvents();
    this.onRender();
    this.attachSubviews();
    return this;
  }
});
