Webspinr.Views.Element = Backbone.CompositeView.extend({
  template: JST["elements/element"],

  className: function (){
    if (this.model.get("attrs").class) {
      var classes = this.model.get("attrs").class.join(" ");
    }
    return "element " + classes;
  },

  tagName: function () {
    return this.model.get("tag");
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model, "change", this.saveElement);
    this.render();
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
    this.delegateEvents();
    this.onRender();
    this.attachSubviews();
    return this;
  },

  onRender: function () {
    this.setAttrs();
  }
});
