Webspinr.Models.Page = Backbone.Model.extend({

  urlRoot: 'api/pages',

  elements: function () {
    if (!this._elements) {
      this._elements = new Webspinr.Collections.Elements();
    }
    return this._elements;
  },

  parse: function (payload) {
    if (payload.elements) {
      this.elements().set(payload.elements);
      delete payload.elements;
    }
    return payload;
  }
});
