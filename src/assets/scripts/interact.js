// interact.js
// This componenet modifies an entity to do something when the user touches the screen location where the entity is displayed (i.e., user touches event box, box displays event information on screen, user touches again, event info goes away).

AFRAME.registerComponent("click-display-info", {
  init: function () {
    var data = this.data
    var el = this.el
    this.el.addEventListener("click", function (evt) {
      console.log(`Display-info is attached to ${el} !`)
    })
  },
})
