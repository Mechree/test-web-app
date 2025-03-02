// Arrow.js Script

// Waits for document to load and then Links the scene and arrow to variables by finding the scene and arrow entities in the HTML Documents
document.addEventListener("DOMContentLoaded", function () {
  const scene = document.querySelector("a-scene")

  if (!scene) {
    console.error("arrow.js: Scene missing!")
    return
  }
  const camera = document.querySelector("[gps-new-camera]")
  const arrow = document.getElementById("arrow")
  const eventEntity = document.getElementById("event")
  const arrowTxt = document.getElementById("arrowTxt")

  // Check for entities
  if (!camera || !arrow || !eventEntity || !arrowTxt) {
    console.error("arrow.js: Entity missing from Scene>!")
    return
  }

  // Custom component to update the arrow's direction
  AFRAME.registerComponent("arrow-pointer", {
    tick: function () {
      // Get the world positions of the camera and event entity
      const cameraPos = new THREE.Vector3()
      const eventPos = new THREE.Vector3()
      camera.object3D.getWorldPosition(cameraPos)
      eventEntity.object3D.getWorldPosition(eventPos)

      // Have arrow point to the event position.
      arrow.object3D.lookAt(eventPos)
    },
  })

  // Attach the arrow-pointer component to the arrow entity.
  arrow.setAttribute("arrow-pointer", "")
})

// object3d.getWorldPosition returns a vector of that 3d object
// lookAt(object3d.getWorldPosition) look at that vector of the 3d object

// TICK update arrow to point to event
// Link arrow, scene, event
// Get event world position
// apply lookAt(event world pos) to arrow

// Event text
