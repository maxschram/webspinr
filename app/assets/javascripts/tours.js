mediator = new Shepherd.Evented;

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

// editorTour.addStep('editing', {
//   title: "Moving elements",
//   text: "This an element of your page. Try dragging it to move it around",
//   attachTo: '.element.box top',
//   buttons: []
// });
//
// editorTour.addStep('editing', {
//   title: "Editing Text",
//   text: "This is a text element. You can double click it to edit the text inside",
//   attachTo: '.element.text:not(.link) top',
//   buttons: [],
//   advanceOn: '.element.text:not(.link) dblclick'
// });
//
// editorTour.addStep('editing', {
//   title: "Editing Text",
//   text: "Type in a nice poem or how you're feeling today. When you're done, click outside the box",
//   attachTo: '.element.text:not(.link) top',
//   buttons: [],
//   advanceOn: '.elements click'
// });
//
// editorTour.addStep('editing', {
//   title: "Properites Menu",
//   text: "To change the properties of an element, just right click on it",
//   attachTo: '.element.box top',
//   buttons: [],
//   advanceOn: '.element contextmenu'
// });
//
// editorTour.addStep('editing', {
//   title: "Properites Menu",
//   text: "These buttons allow you to change things like color and shape, or even " +
//   "delete the element if you decide you don't like it. Click the color button",
//   attachTo: { element: ".color", on: "left" },
//   buttons: [],
//   advanceOn: '.color click'
// });
//
// editorTour.addStep('editing', {
//   title: "Properites Menu",
//   text: "Use these sliders to make the box blue and then click update color",
//   attachTo: { element: ".ui-slider", on: "top" },
//   buttons: [],
//   advanceOn: '.save-color click'
// });
//
// editorTour.addStep('editing', {
//   title: "Properites Menu",
//   text: "These buttons allow you to change the order that elements stack. " +
//   "Try bringing this box to the front layer so it sits on top",
//   attachTo: '.move-front left',
//   buttons: [],
//   advanceOn: '.move-front click'
// });
//
// editorTour.addStep('editing', {
//   title: "Properites Menu",
//   text: "Nice work. Now move it back to the middle layer where it was.",
//   attachTo: '.move-middle left',
//   buttons: [],
//   advanceOn: '.move-middle click'
// });

editorTour.addStep('open-menu-tray', {
  title: "Menu Tray",
  text: "Hover over this button to open up the menu tray",
  attachTo: '.menu-button right',
  buttons: [],
  advanceOn: '.menu-bar mouseover'
});

editorTour.addStep('mouseover-box', {
  title: "Elements Menu",
  text: "Clicking on these buttons will create a new element on your page",
  attachTo: '.box-el right',
  buttons: []
});

// editorTour.addStep('click-box', {
//   title: "Elements Menu",
//   text: "Click this button to create a new box on your page",
//   attachTo: '.box-el right'
// });

// editorTour.addStep('page-properties-menu', {
//   title: "Page Properties Menu",
//   text: "Click this button to create a new box on your page",
//   attachTo: '.page-properties-menu right',
//   buttons: [],
//   // advanceOn: '.box-el click'
// });

// mediator.on('element-drag', editorTour.next);
