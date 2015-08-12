Webspinr.Models.Element = Backbone.Model.extend({
  urlRoot: 'api/elements',

  // Overwrite proto toJSON to deeply copy attrs
  toJSON: function () {
    var json = Backbone.Model.prototype.toJSON.call(this);
    json.attrs = JSON.stringify(this.get("attrs"));
    return json;
  }
});
