# Webspinr

## Minimum Viable Project

Webspinr is a drag-and-drop website builder with a Rails backend and Backbone fronted. Users can:
- [x] Create a website with multiple pages
- [x] Drag and drop different elements onto the page
- [x] Drag the elements to reposition them
- [x] Click on the elements to change their properties
- [x] View the live website they are building
- [x] Download the html/css of the website they built

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md


## Implementation Timeline

### Phase 1: Site Creation (<1 day)

First I will allow public access to a page for creating a new site. Users will be able to create a new site with a simple form in backbone and view a very stripped down version of the site creation page.

[Details][phase-one]

### Phase 2: Viewing created sites (~1 day)

I will first add API routes to save created website's elements to the database. I will add a backbone model for site elements that will package up the elements's html and post it to the rails server. I will then add a route for viewing sites that will request all the site's elements from the database from the server and create a backbone app to display them.

[Details][phase-two]

### Phase 3: Adding more elements (~2 days)

I will add a menu in backbone to the site creation page which will allow users to select elements to add to the page. The elements will be represented by a backbone subview which will have a draggable element that can be repositioned around the page. I will add a save site button that will parse all the elements in the page into HTML and then post to the server to save or update the site.

[Details][phase-three]

### Phase 4: Editing elements (~2 days)

I will add a menu that is accessed by clicking on elements that will allow their properties to be updated. A small subset of css properties will be accessible through this menu.

[Details][phase-four]

### Phase 5: Saving sites (< 1 day)

I will add a button that will package up the html from the page and instead of posting to the server will allow the user to download the files to their computer.

[Details][phase-five]

### Bonus Features (TBD)
- [x] Download site as a zip file
- [x] Add site preview thumbnails to site index
- [ ] Option to create the website a separate heroku app
- [ ] Option to download the apps html and css and a lite webserver
- [ ] Adding dynamic content to created sites
- [ ] Adding drag select to remove elements



[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
