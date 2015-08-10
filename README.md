# Webspinr

## Minimum Viable Project

Webspinr is a drag-and-drop website builder with a Rails backend and Backbone fronted. Users can:
- [ ] Create a website with multiple pages
- [ ] Drag and drop different elements onto the page
- [ ] Drag the elements to reposition them
- [ ] Click on the elements to change their properties
- [ ] View the live website they are building
- [ ] Download the html/css of the website they built


## Implementation Timeline

### Phase 1: Site Creation (<1 day)

First I will allow public access to a page for creating a new site. Users will be able to create a new site with a simple form in backbone and view a very stripped down version of the site creation page.

### Phase 2: Viewing created sites (~1 day)

I will first add API routes to save created website's HTML to the database. I will add a backbone model to package up the created site's html and post it to the rails server. I will then add a route for viewing sites that will render the requested page's html.

### Phase 3: Adding elements (~2 days)

I will add a menu in backbone to the site creation page which will allow users to select elements to add to the page. The elements will be represented by a backbone subview which will have a draggable element that can be repositioned around the page. I will add a save site button that will parse all the elements in the page into HTML and then post to the server to save or update the site.

### Phase 4: Editing elements (~2 days)

I will add a menu that is accessed by clicking on elements that will allow their properties to be updated. A small subset of css properties will be accessible through this menu.

### Phase 5: Saving sites (< 1 day)

I will add a button that will package up the html from the page and instead of posting to the server will allow the user to download the files to their computer.

### Bonus Features (TBD)
- [ ] Option to create the website a separate heroku app
- [ ] Option to download the apps html and css and a lite webserver
- [ ] Adding pictures to created sites
- [ ] Adding dynamic content to created sites
