// // Waits for document to load and then Links the scene and arrow to variables by finding the scene and arrow entities in the HTML Documents
// document.addEventListener("DOMContentLoaded", function () {
//   const scene = document.querySelector("a-scene")
//   const camera = document.querySelector("[gps-new-camera]")
//   const arrow = document.getElementById("arrow")
//   const eventEntity = document.getElementById("event")
//   const arrowTxt = document.getElementById("arrowTxt")

//   // Check for entities
//   if (!scene || !camera || !arrow || !eventEntity || !arrowTxt) {
//     console.error("arrow.js: Entity missing in <a-scene>!")
//     return
//   }

//   scene.addEventListener("loaded", function () {
//     // This function updates the arrow entity to point toward the event location and displays the approximate distance to the user.
//     tick: function updateArrow() {

//     }
//   })
// })

// Custom component that updates users position in the world using THREE.js
AFRAME.registerComponent("rotation-reader", {
  tick: (function () {
    var position = new THREE.Vector3()
    var quaternion = new THREE.Quaternion()

    return function () {
      this.el.object3D.getWorldPosition(position)
      this.el.object3D.getWorldQuaternion(quaternion)
    }
  })(),
})

AFRAME.registerComponent("update-arrow", {
  tick: function () {
    const camera = document.querySelector("[gps-new-camera]")
    const arrow = document.getElementById("arrow")
    const eventEntity = document.getElementById("event")
    // User and event coords in lat/long
    var userCoords = camera.components["gps-new-camera"].currentCoords
    var eventCoords = eventEntity.getAttribute("gps-new-entity-place")

    // Check for user and event positions
    if (!userCoords || !eventCoords) {
      console.error("arrow.js: Cannot find user or event position!")
      return
    }
    console.log("eventPos:", eventCoords)
    console.log("userPos:", userCoords)

    // Get vector of event
    var eventVector = eventEntity.object3D.getWorldPosition
    // Point arrow to event using 3d vector
    arrow.object3D.lookAt(eventVector)
  },
})
