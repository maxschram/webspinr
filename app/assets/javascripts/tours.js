indexTour = new Shepherd.Tour({
  defaults: {
    classes: 'shepherd-theme-arrows'
  }
});

indexTour.addStep('welcome', {
  title: "Welcome to the Editor",
  text: "Here you can view all of the sites you've created. Let's take a tour of the main features",
  attachTo: '.navbar bottom'
});

indexTour.addStep('site-preview', {
  title: "Site preview",
  text: "This is a site preivew. You can click here to view your sites live in a new tab",
  attachTo: '.zoomer-cover',
  advanceOn: {selector: ".zoomer-cover a", event: "click"}
});

indexTour.addStep('editing', {
  title: "Editing sites",
  text: "Okay, let's start building some sites now. Click 'Edit' to jump into the editor",
  attachTo: '.edit',
  buttons: [],
  advanceOn: ".edit click"
});

editorTour = new Shepherd.Tour({
  defaults: {
    classes: 'shepherd-theme-arrows'
  }
});

editorTour.addStep('editing', {
  title: "Moving elements",
  text: "This an element of your page. Try dragging it to move it around",
  attachTo: '.element',
  buttons: [],
  advanceOn: ".edit click"
});
