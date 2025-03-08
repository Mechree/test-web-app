// arrow.js

// Listen for GPS updates from the camera (emitted by gps-new-camera)
window.addEventListener("gps-camera-update-position", function (e) {
  const cameraEl = document.querySelector("[gps-new-camera]")
  const arrowEl = document.getElementById("arrow")
  const eventEl = document.getElementById("event")

  if (!cameraEl || !arrowEl || !eventEl) {
    return
  }

  // Event (target) world position
  const eventPos = new THREE.Vector3()
  eventEl.object3D.getWorldPosition(eventPos)

  // Transform the event's world position into the camera's local coordinate system.
  const localEventPos = eventPos.clone()
  cameraEl.object3D.worldToLocal(localEventPos)

  // Compute the angle.
  const angleRad = Math.atan2(localEventPos.y, localEventPos.x)

  //Convert to degrees and correct arrow direction
  var angleDeg = (180 / 3.1415926535) * angleRad + 245

  // Set arrow rotation on Z-axis
  arrowEl.setAttribute("rotation", { x: 0, y: 0, z: angleDeg })
})
