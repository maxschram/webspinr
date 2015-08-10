# Phase 2: Viewing created sites

## Rails
### Models
* html
* stylesheet

### Controllers
* StaticPagesController (root)
* API::SiteController (create, update, destroy)
* SitesController (show)

### Views
* static_pages/root.html.erb
* sites/show.htmlerb

## Backbone
### Models
* SiteElement
* Site

### Collections
* SiteElements

### Views
* siteBuilder (composite)
* site (composite) < siteBuilder
* menu < siteBuilder

## Gems/Libraries
* backbone-on-rails
