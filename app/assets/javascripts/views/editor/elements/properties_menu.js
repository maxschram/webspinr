Webspinr.Views.ElementPropertiesMenu = Backbone.CompositeView.extend({
  template: JST["elements/properties_menu"],
  className: 'element-properties-menu',

  events: {
    "click .delete": "deleteElement",
    "click .color": "changeColor",
    "click .style": "changeStyle",
    "click .save-color": "setColor",
    "mouseleave": "handleMouseLeave",
    "change .font-size": "changeFontSize",
    "submit .font-size": "changeFontSize",
    "click .move-back": "moveBack",
    "click .move-front": "moveFront",
    "click .move-middle": "moveMiddle"
  },

  handleMouseLeave: function (e) {
    this.resetTop(e);
    this.remove();
  },

  resetTop: function (e) {
    console.log(e.relatedTarget);
    if ($(e.relatedTarget).hasClass("elements")) {
      $(".element").each(function (idx, el) {
        $(el).removeClass("top");
      });
    }
  },

  deleteElement: function () {
    this.model.destroy();
    this.remove();
  },

  moveBack: function (e) {
    $(e.currentTarget).blur();
    this.model.get("attrs").style["z-index"] = 0;
    this.model.save();
    this.model.trigger("sync");
  },

  moveMiddle: function (e) {
    $(e.currentTarget).blur();
    this.model.get("attrs").style["z-index"] = 1;
    this.model.save();
    this.model.trigger("sync");
  },

  moveFront: function (e) {
    $(e.currentTarget).blur();
    this.model.get("attrs").style["z-index"] = 2;
    this.model.save();
    this.model.trigger("sync");
  },

  changeFontSize: function (e) {
    e.preventDefault();
    var newFontSize = $(e.currentTarget).serializeJSON().size;
    this.model.get("attrs").style["font-size"] = newFontSize + "px";
    this.model.save();
    this.model.trigger("sync");
  },

  changeColor: function (e) {
    $(e.currentTarget).blur();
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
    var borderRadius = (style * 10 - 10) + "px";
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
