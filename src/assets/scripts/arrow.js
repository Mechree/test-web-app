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
      // Get world positions of camera and event entity
      const cameraPos = new THREE.Vector3()
      const eventPos = new THREE.Vector3()
      camera.object3D.getWorldPosition(cameraPos)
      eventEntity.object3D.getWorldPosition(eventPos)

      // Compute a direction vector from the camera to the event
      const dx = eventPos.x - cameraPos.x
      const dz = eventPos.z - cameraPos.z

      // Calculate the yaw in radians
      const angleRadians = Math.atan2(dx, dz)

      // Convert the angle to degrees
      const angleDegrees = THREE.Math.radToDeg(angleRadians)

      // Apply the rotation using Euler angles, preserving the arrow's position
      arrow.setAttribute("rotation", { x: 0, y: 1.6, z: angleDegrees })
    },
  })
})
