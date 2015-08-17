Webspinr.Views.ElementPropertiesMenu = Backbone.CompositeView.extend({
  template: JST["elements/properties_menu"],
  className: 'element-properties-menu',

  events: {
    "click .delete": "deleteElement",
    "click .color": "changeColor",
    "click .style": "changeStyle",
    "click .save-color": "setColor",
    "mouseleave": "remove",
    "change .font-size": "changeFontSize"
  },

  deleteElement: function () {
    this.model.destroy();
  },

  changeFontSize: function (e) {
    var newFontSize = $(e.currentTarget).serializeJSON().size;
    this.model.get("attrs").style["font-size"] = newFontSize + "px";
    this.model.save();
    this.model.trigger("sync");
  },

  changeColor: function (e) {
    $(e.currentTarget).blur();
    // var color = prompt("Enter a color"); //TODO: Replace with colorpicker
    var colorpicker = new Webspinr.Views.Colorpicker({ model: this.model });
    this._colorpicker = colorpicker;
    colorpicker.render();
    this.$el.append(colorpicker.$el);
  },

  setColor: function () {
    var color = this._colorpicker.getColor();
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
    this.$el.html(this.template({ element: this.model }));
    this.delegateEvents();
    return this;
  },

  onRender: function () {
    debugger;
  }
});
