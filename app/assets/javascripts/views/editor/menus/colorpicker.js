Webspinr.Views.Colorpicker = Backbone.View.extend({
  template: JST["menus/colorpicker"],
  className: 'colorpicker',

  hexFromRGB: function (r, g, b) {
      var hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    },

    refreshSwatch: function () {
      var red = this.$("#red").slider("value");
      var green = this.$("#green" ).slider("value");
      var blue = this.$("#blue" ).slider("value");
      var hex = this.hexFromRGB( red, green, blue );
      this.$( "#swatch" ).css( "background-color", "#" + hex );
    },

    render: function () {
      this.$el.html(this.template());
      this.onRender();
      return this;
    },

    onRender: function () {
      this.$( "#red, #green, #blue" ).slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 127,
        slide: this.refreshSwatch.bind(this),
        change: this.refreshSwatch.bind(this)
      });
      this.$( "#red" ).slider( "value", 255 );
      this.$( "#green" ).slider( "value", 140 );
      this.$( "#blue" ).slider( "value", 60 );
    }
});
