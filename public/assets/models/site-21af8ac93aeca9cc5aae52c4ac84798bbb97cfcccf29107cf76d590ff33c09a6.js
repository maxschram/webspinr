Webspinr.Models.Site = Backbone.Model.extend({
  urlRoot: '/api/sites',

  pages: function () {
    if (!this._pages) {
      this._pages = new Webspinr.Collections.Pages();
    }
    return this._pages;
  },

  parse: function (payload) {
    if (payload.pages) {
      this.pages().set(payload.pages, { parse: true });
      delete payload.pages;
    }

    return payload;
  }
});
