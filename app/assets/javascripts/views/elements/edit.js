Webspinr.Views.EditElement = Backbone.CompositeView.extend({
  template: JST["elements/edit"],

  events: {
    "click": "editElement"
  },

  className: function (){
    return "element " + this.model.get("classes");
  },

  tagName: function () {
    return this.model.get("tag");
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model, "change", this.saveElement);
  },

  saveElement: function () {
    // alert saving
  },

  editElement: function () {
    alert("Edit element");
  },

  render: function () {
    this.$el.html(this.template({ element: this.model }));
    this.$el.attr("style", this.model.get("style"));
    this.delegateEvents();
    this.onRender();
    this.attachSubviews();
    return this;
  },

  onRender: function () {
    var view = this;
    this.$el.draggable({
      stop: function (e, ui) {
        this.model.save({ style: this.$el.attr("style")}, {
          success: function () {
            // alert saving
          }
        });
      }.bind(this)
    });
  }
});
