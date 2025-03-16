// distance-gps.js
// This script creates a customized component for an AFRAME entity where the distance between a user and their target (event) is populated into the text attribute of another element (arrow) when the users GPS position is updated via the camera component.
// Currently does not work
document.addEventListener("DOMContentLoaded", function () {
  // Listen for GPS updates from the camera (emitted by gps-new-camera)
  window.addEventListener("gps-camera-update-position", function (e) {
    const cameraEl = document.querySelector("[gps-new-camera]")
    const targetEl = document.getElementById("#event")
    const arrowEl = document.getElementById("arrow")

    if (!cameraEl || !arrowEl || !targetEl) {
      console.log("Missing element in distance-gps.js.")
      return
    }

    // World position of event (target)
    const targetWorldPos = new THREE.Vector3()
    targetEl.object3D.getWorldPosition(targetWorldPos)
    console.log(targetWorldPos)

    // World position of camera
    const cameraPos = new THREE.Vector3()
    cameraEl.object3D.getWorldPosition(cameraPos)
    console.log(cameraPos)

    // Get manhattan distance from camera to target
    let dist
    dist = cameraPos.manhattanDistanceTo(targetWorldPos)
    dist = dist.toFixed(2) // format to 2 decimal places
    console.log(dist)

    var distTxt =
      "Your event is this way.\n Distance: " + dist.toString(dist) + "m" // Combine dist and text

    // Update arrowText
    arrowEl.setAttribute("value", distTxt)
  })
})
