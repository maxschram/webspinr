Webspinr.Models.Element = Backbone.Model.extend({
  urlRoot: '/api/elements',

  // Overwrite proto toJSON to deeply copy attrs
  toJSON: function () {
    var json = Backbone.Model.prototype.toJSON.call(this);
    json.attrs = JSON.stringify(this.get("attrs"));
    return json;
  },

  toHTML: function () {
    var html = $("<" + this.get("tag") + ">");
    var attrs = this.get("attrs");
      for (var attr in attrs) {
        if (attr === "style") {
          for(var prop in attrs[attr]) {
            html.css(prop, attrs[attr][prop]);
          }
        } else if (attr === 'class') {
          attrs[attr].forEach(function (klass) {
            html.addClass(klass);
          });
        } else if (attr === 'href') {
          var reg = /\/\d\/(\w*)/;
          html.attr(attr, attrs[attr].match(reg)[1]+".html");
        } else {
          html.attr(attr, attrs[attr]);
        }
      }
      html.css("transform", "translateY(-50px)");
      return html.html(this.escape("content"));
    }
});
