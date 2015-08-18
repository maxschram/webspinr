Webspinr.Views.ElementsMenu = Backbone.View.extend({
  template: JST["menus/elements"],
  className: 'elements-menu',

  initialize: function (options) {

  },

  events: {
    "click .btn": "dropFocus",
    "click .text": "createText",
    "click .box-el": "createBox",
    "click .image": "showImageMenu",
    "click .line": "createLine",
    "click .internal-link": "createInternalLink",
    "click .external-link": "createExternalLink"
  },

  dropFocus: function (e) {
    $(e.currentTarget).blur();
  },

  createText: function () {
    var element = new Webspinr.Models.Element({
      tag: "p",
      content: "Click here to enter your text...",
      page_id: this.currentPageView.model.id,
      attrs: {
        style: {
          top: "50%",
          left: "50%",
          position: "absolute",
          "font-size": "16px",
          "z-index": 3
        },
        class: [
          "text"
        ]
      }
    });
    this.currentPageView.collection.add(element);
  },

  createLine: function () {
    var element = new Webspinr.Models.Element({
      tag: "div",
      attrs: {
        style: {
          top: "50%",
          left: "50%",
          position: "absolute",
          background: "black",
          width: "1000px",
          height: "5px",
          "z-index": 3
        },
        class: [
          "box",
          "line"
        ]
      },
      page_id: this.currentPageView.model.id
    });
    this.saveElement(element);
  },

  createInternalLink: function () {
    var pageName = prompt("Enter the name of the page to link to");
    var url = "/sites#/" + this.model.id + '/' + pageName;
    var element = new Webspinr.Models.Element({
      tag: "a",
      attrs: {
        style: {
          top: "50%",
          left: "50%",
          position: "absolute",
          "z-index": 3
        },
        class: [
          "link text"
        ],
        href: url
      },
      content: "Link description",
      page_id: this.currentPageView.model.id
    });
    this.saveElement(element);
  },

  createExternalLink: function () {
    var url = prompt("Enter a url to link to");
    var element = new Webspinr.Models.Element({
      tag: "a",
      attrs: {
        style: {
          top: "50%",
          left: "50%",
          position: "absolute",
          "z-index": 3
        },
        class: [
          "link text"
        ],
        href: url
      },
      content: "Link description",
      page_id: this.currentPageView.model.id
    });
    this.saveElement(element);
  },

  saveElement: function (element) {
    this.currentPageView.collection.add(element);
    element.save({}, {
      error: function () {
        this.currentPageView.collection.remove(element);
      }.bind(this)
    });
  },

  showImageMenu: function () {
    filepicker.pick( {
      mimetype: 'image/*',
      services: ['CONVERT', 'BOX','CLOUDDRIVE','COMPUTER','DROPBOX','FACEBOOK','GOOGLE_DRIVE','FLICKR','EVERNOTE','GMAIL','INSTAGRAM','IMAGE_SEARCH','URL','WEBCAM']
      },

      function (blob) {
        this.createImage(blob.url);
      }.bind(this));
    // var imageUrl = prompt("Enter the image url");
    // this.createImage(imageUrl);
  },

  createImage: function (src) {
    var element = new Webspinr.Models.Element({
      tag: "img",
      page_id: this.currentPageView.model.id,
      attrs: {
        style: {
          top: "50%",
          left: "50%",
          position: "absolute",
          "z-index": 2
        },
        class: [
          "image"
        ],
        src: src
      }
    });
    this.currentPageView.collection.add(element);
    // this.saveElement();
  },

  createBox: function () {
    var element = new Webspinr.Models.Element({
      tag: "div",
      page_id: this.currentPageView.model.id,
      attrs: {
        style: {
          top: "50%",
          left: "50%",
          position: "absolute",
          width: "50px",
          height: "50px",
          background: "darksalmon",
          "z-index": 2
        },
        class: [
          "box"
        ]
      }
    });
    this.currentPageView.collection.add(element);

    element.save({}, {
      error: function () {
        this.currentPageView.collection.remove(element)
      }.bind(this)
    });
  },

  render: function () {
    this.$el.html(this.template({ element: this.model }));
    this.delegateEvents();
    return this;
  }
});
