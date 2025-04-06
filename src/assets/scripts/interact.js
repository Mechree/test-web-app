// interact.js
// This componenet modifies an entity to do something when the user touches the screen location where the entity is displayed (i.e., user touches event box, box displays event information on screen, user touches again, event info goes away).

AFRAME.registerComponent("click-display-info", {
  init: function () {
    var el = this.el
    var currColor = this.el.getAttribute("color")
    this.el.addEventListener("click", this.onClick.bind(this)) // Bind click event to element
    // console.log(el.getAttribute(currColor))
    console.log(`The ${el.id} entity is clickable.`)
    // console.log("testing the log...")
  },

  // On click change color of event entity and display information text
  onClick: function () {
    console.log(`The ${this.el.id} entity was clicked.`)
    if (this.el.currColor != "white") {
      this.el.setAttribute("material", "color: white")
      this.el.currColor = "white"
      console.log(this.el.currColor)
    } else {
      this.el.setAttribute("material", "color: blue")
      this.el.currColor = "blue"
      console.log(this.el.currColor)
    }
  },
})
