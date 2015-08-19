Webspinr.Views.EditElement = Backbone.CompositeView.extend({
  template: function (options) {
    if (this.$el.hasClass("text") && this._editing) {
      return JST["elements/text_form"](options);
    } else {
      return JST["elements/edit"](options);
    }
  },

  events: {
    "dblclick": "editElement",
    "click": "clickElement",
    "blur textarea": "saveText",
    "submit form": "saveText",
    "contextmenu": "showPropertiesMenu"
  },

  className: function (){
    return "element " + this.model.get("classes");
  },

  tagName: function () {
    return this.model.get("tag");
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  showPropertiesMenu: function (e) {
    e.preventDefault();
    this.addMenu();
    $("#root").append(this._propertiesMenuView.render().$el);
    this._propertiesMenuView.$el.css({'top': e.pageY - 5, 'left': e.pageX - 5});
  },

  addMenu: function () {
    if (!this._propertiesMenuView) {
      var subview = new Webspinr.Views.ElementPropertiesMenu({
        model: this.model
      });
      this._propertiesMenuView = subview;
    }
  },

  clickElement: function (e) {
    e.preventDefault();
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

  editElement: function (e) {
    e.preventDefault();
    if (this.$el.hasClass("text")) {
      this._editing = true;
      this.render();
      this.$("textarea").focus();
    }
  },

  setAttrs: function () {
    var attrs = this.model.get("attrs");
    for (var attr in attrs) {
      if (attr === "style") {
        this.setStyle(attrs[attr]);
      } else if (attr === 'class') {
        attrs[attr].forEach(function (klass) {
          this.$el.addClass(klass);
        }.bind(this));
      } else {
        this.$el.attr(attr, attrs[attr]);
      }
    }
  },

  setStyle: function (style) {
    for(var prop in style) {
      this.$el.css(prop, style[prop]);
    }
  },

  render: function () {
    this.$el.html(this.template({ element: this.model }));
    this.setAttrs();
    // this.$el.attr("style", this.model.get("style"));
    // this.$el.attr("src", this.model.get("src"));
    this.onRender();
    this.attachSubviews();
    this.delegateEvents();
    return this;
  },

  updateSize: function (e, ui) {
    var width = this.$el.css("width");
    var height = this.$el.css("height");
    this.model.get("attrs").style.width = width;
    this.model.get("attrs").style.height = height;
    this.model.save();
  },

  updatePosition: function () {
    var left = this.$el.css("left");
    var top = this.$el.css("top");
    this.model.get("attrs").style.left = left;
    this.model.get("attrs").style.top = top;
    this.model.save();
  },

  onRender: function () {
    var view = this;

    this.$el.draggable({
      stop: this.updatePosition.bind(this),
      snap: true,
      grid: [4, 4]
    });

    if (this.model.get("tag") !== "img") {
      this.$el.resizable();
      this.$el.resizable("destroy");
      this.$el.resizable({
        autoHide: true,
        stop: this.updateSize.bind(this),
        grid: [2, 2]
      });
    }

    if (this.$el.hasClass("horizontal-line")) {
      this.$el.resizable("option", "maxHeight", 5);
      this.$el.resizable("option", "minHeight", 5);
    } else if (this.$el.hasClass("vertical-line")) {
      this.$el.resizable("option", "maxWidth", 5);
      this.$el.resizable("option", "minWidth", 5);
    }
    // Backbone.CompositeView.prototype.onRender.call(this);
  }
});
