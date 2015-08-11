Webspinr.Models.Page = Backbone.Model.extend({
  parse: function (payload) {
    if (payload.elements) {
      this.elements().set(payload.elements);
      delete payload.elements
    }
    return payload;
  }
});
