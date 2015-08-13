Webspinr.Views.ElementPropertiesMenu = Backbone.CompositeView.extend({
  template: JST["elements/properties_menu"],
  className: 'menu',

  events: {
    "click .delete": "deleteElement",
    "click .color": "changeColor",
    "click .style": "changeStyle"
  },

  deleteElement: function () {
    this.model.destroy();
  },

  changeColor: function () {
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
    var style = $(e.currentTarget).data("style");
    var borderRadius = style * 10 + "px";
    this.model.get("attrs").style["border-radius"] = borderRadius;
    this.model.save();
    this.model.trigger("sync");
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  onRender: function () {
    debugger;
  }
});
