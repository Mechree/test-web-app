// interact.js
// This componenet modifies an entity to do something when the user touches the screen location where the entity is displayed (i.e., user touches event box, box displays event information on screen, user touches again, event info goes away).

AFRAME.registerComponent("display-info", {
  init: function () {
    console.log("interaction is working!")
  },
})
