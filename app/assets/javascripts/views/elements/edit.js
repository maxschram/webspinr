Webspinr.Views.EditElement = Backbone.CompositeView.extend({
  template: function (options) {
    if (this.model.get("classes") === "text" && this._editing) {
      return JST["elements/text_form"](options);
    } else {
      return JST["elements/edit"](options);
    }
  },

  events: {
    "dblclick": "editElement",
    "blur input": "saveText",
    "submit form": "saveText",
    "contextmenu": "showPropertiesMenu",
    "mouseleave": "removePropertiesMenu"
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

  showPropertiesMenu: function (e) {
    e.preventDefault();
    this.addMenu();
  },

  setColor: function () {
    if (this.model.get("tag") === "div") {
      this.$el.css("background-color", this.model.get("color"));
    } else {
      this.$el.css("color", this.model.get("color"));
    }
  },

  removePropertiesMenu: function () {
    if (this._propertiesMenuView) {
      this.removeSubview(".element-properties-menu", this._propertiesMenuView);
      this._propertiesMenuView = null;
    }
  },

  addMenu: function () {
    if (!this._propertiesMenuView) {
      var subview = new Webspinr.Views.ElementPropertiesMenu({
        model: this.model
      });
      this._propertiesMenuView = subview;
      this.addSubview(".element-properties-menu", subview);
      subview.render();
    }
  },

  saveText: function (e) {
    e.preventDefault();
    var view = this;
    var data = $(e.currentTarget).serializeJSON();
    view.model.save(data, {
      success: function () {
        view._editing = false;
        view.render();
      }
    });
  },

  editText: function () {
    alert("Edit text");
  },

  editElement: function () {
    if ( this.model.get("classes") === "text") {
      this._editing = true;
      this.render();
      this.$("input").focus();
    }
  },

  render: function () {
    this.$el.html(this.template({ element: this.model }));
    this.$el.attr("style", this.model.get("style"));
    this.$el.attr("src", this.model.get("src"));
    this.onRender();
    this.attachSubviews();
    this.delegateEvents();
    return this;
  },

  saveStyle: function () {
    this.model.save({ style: this.$el.attr("style")});
  },

  saveElement: function () {
    this.model.save();
  },

  onRender: function () {
    var view = this;
    this.setColor();

    this.$el.draggable({
      stop: this.saveStyle.bind(this)
    });

    if (this.model.get("tag") !== "img") {
      this.$el.resizable();
      this.$el.resizable("destroy");
      this.$el.resizable({
        autoHide: true,
        stop: this.saveStyle.bind(this)
      });
    }
    // Backbone.CompositeView.prototype.onRender.call(this);
  }
});
