Webspinr.Views.ElementPropertiesMenu = Backbone.CompositeView.extend({
  template: JST["elements/properties_menu"],
  className: 'element-properties-menu',

  events: {
    "click .delete": "deleteElement",
    "click .color": "changeColor",
    "click .style": "changeStyle",
    "mouseleave": "remove"
  },

  deleteElement: function () {
    this.model.destroy();
  },

  changeColor: function (e) {
    var color = prompt("Enter a color"); //TODO: Replace with colorpicker
    if (this.model.get("tag") === "div") {
      this.model.get("attrs").style.background = color;
    } else {
      this.model.get("attrs").style.color = color;
    }
    this.model.save();
    this.model.trigger("sync");
  },

  changeStyle: function (e) {
    $(e.currentTarget).blur();
    var style = $(e.currentTarget).data("style");
    var borderRadius = style * 10 + "px";
    this.model.get("attrs").style["border-radius"] = borderRadius;
    this.model.save();
    this.model.trigger("sync");
  },

  render: function () {
    this.$el.html(this.template());
    this.delegateEvents();
    return this;
  },

  onRender: function () {
    debugger;
  }
});
