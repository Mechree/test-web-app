// distance-gps.js

// Listen for GPS updates from the camera (emitted by gps-new-camera)
window.addEventListener("gps-camera-update-position", function (e) {
  const cameraEl = document.querySelector("[gps-new-camera]")
  const targetEl = document.getElementById("#event")
  const arrowEl = document.getElementById("arrow")

  if (!cameraEl || !arrowEl || !targetEl) {
    return
  }

  // World position of event (target)
  const targetWorldPos = new THREE.Vector3()
  targetEl.object3D.getWorldPosition(targetWorldPos)

  // World position of camera
  const cameraPos = new THREE.Vector3()
  cameraEl.object3D.getWorldPosition(cameraPos)

  // Get manhattan distance from camera to target
  let dist
  dist = cameraPos.manhattanDistanceTo(targetWorldPos)
  dist = dist.toFixed(2) // format to 2 decimal places
  var distTxt =
    "Your event is this way.\n Distance: " + dist.toString(dist) + "m" // Combine dist and text

  // Update arrowText
  arrowEl.setAttribute("value", distTxt)
})
