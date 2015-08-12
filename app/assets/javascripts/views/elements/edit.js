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
    "submit form": "saveText"
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
    this.delegateEvents();
    this.onRender();
    this.attachSubviews();
    return this;
  },

  saveStyle: function () {
    this.model.save({ style: this.$el.attr("style")});
  },

  onRender: function () {
    var view = this;

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
  }
});
