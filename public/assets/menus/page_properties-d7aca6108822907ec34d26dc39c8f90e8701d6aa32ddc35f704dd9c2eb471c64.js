(function() { this.JST || (this.JST = {}); this.JST["menus/page_properties"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="menu btn-group-vertical" role="group" aria-label="...">\n  <h3 class="menu-title">Page Properties</h3>\n\n  <form>\n    Title: <input type="text" id="title" name="title" value="',  page.escape("title") ,'">\n  </form>\n  <button class="background-color btn btn-default">Background Color</button>\n  <button class="background-image btn btn-default">Background Image</button>\n  <button class="view-page-live btn btn-danger">View Page Live</button>\n</div>\n');}return __p.join('');};
}).call(this);
