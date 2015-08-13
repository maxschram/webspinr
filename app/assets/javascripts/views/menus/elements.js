Webspinr.Views.ElementsMenu = Backbone.View.extend({
  template: JST["menus/elements"],
  className: 'elements-menu',

  initialize: function (options) {

  },

  events: {
    "click .text": "createText",
    "click .list": "createList",
    "click .box": "createBox",
    "click .image": "showImageMenu",
    // "click .internal-link": "createInternalLink",
    "click .external-link": "createExternalLink"
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
          position: "absolute"
        },
        class: [
          "text"
        ]
      }
    });
    this.currentPageView.collection.add(element);
  },

  createInternalLink: function () {
    var url = prompt("which page");
    var element = new Webspinr.Models.Element({
      tag: "a",
      content: "Link description",
      page_id: this.currentPageView.model.id,
      style: "top: 50%; left: 50%; position: absolute",
      classes: "link"
    });
    this.currentPageView.collection.add(element);
  },

  createExternalLink: function () {
    var url = prompt("Enter a url to link to");
    var element = new Webspinr.Models.Element({
      tag: "a",

      content: "Link description",
      page_id: this.currentPageView.model.id,
      style: "top: 50%; left: 50%; position: absolute",
      classes: "link"
    });
    this.currentPageView.collection.add(element);
  },

  saveElement: function (element) {
    element.save({}, {
      success: function () {
        this.currentPageView.collection.add(element);
      }
    });
  },

  showImageMenu: function () {
    var imageUrl = prompt("Enter the image url");
    this.createImage(imageUrl);
  },

  createImage: function (src) {
    var element = new Webspinr.Models.Element({
      tag: "img",
      page_id: this.currentPageView.model.id,
      attrs: {
        style: {
          top: "50%",
          left: "50%",
          position: "absolute"
        },
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
          background: "darksalmon"
        }
      }
    });
    this.currentPageView.collection.add(element);

    element.save({}, {
      error: function () {
        this.currentPageView.collection.remove(element)
      }.bind(this)
    });
  },

  createList: function () {
    alert("list");
  },

  render: function () {
    this.$el.html(this.template());
    this.delegateEvents();
    return this;
  }
});
