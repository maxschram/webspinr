Webspinr.Views.EditElement = Backbone.CompositeView.extend({
  template: JST["elements/edit"],

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

  saveElement: function () {
    alert("save");
  },

  render: function () {
    this.$el.html(this.template({ element: this.model }));
    this.$el.css("top", this.model.get("top"));
    this.$el.css("left", this.model.get("left"));
    this.delegateEvents();
    this.onRender();
    this.attachSubviews();
    return this;
  },

  onRender: function () {
    var view = this;
    this.$el.draggable({
      stop: function (e, ui) {
        debugger
        this.model.set({ top: ui.position.top});
      }.bind(this)
    });
  }
});
