window.addEventListener("gps-camera-update-position", () => {
  const cameraEl = document.querySelector("[gps-new-camera]")
  const arrowEl = document.getElementById("arrow")
  const eventEl = document.getElementById("event")

  if (!cameraEl || !arrowEl || !eventEl) {
    console.error("arrow.js: Elements missing from scene!")
    return
  }

  // Get the event's world position.
  const eventPos = new THREE.Vector3()
  eventEl.object3D.getWorldPosition(eventPos)

  // Get the camera's world position.
  const cameraPos = new THREE.Vector3()
  cameraEl.object3D.getWorldPosition(cameraPos)

  // Calculate the direction from the camera to the event.
  const direction = new THREE.Vector3().subVectors(eventPos, cameraPos)

  // Project the direction onto the XZ plane (if you want a 2D planar rotation).
  direction.y = 0

  // Check if the direction is valid (not zero length).
  if (direction.lengthSq() < 0.0001) {
    return
  }

  // Normalize the direction vector.
  direction.normalize()

  // Create a target point using the direction.
  const targetPos = new THREE.Vector3().addVectors(cameraPos, direction)

  // Rotate the arrow so it faces the target point.
  // This will internally calculate a quaternion for you.
  arrowEl.object3D.lookAt(targetPos)

  // Optionally, if you need to adjust for a specific local rotation offset,
  // you can modify the arrow's rotation here.
})
