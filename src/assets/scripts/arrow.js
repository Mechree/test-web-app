// arrow.js

// Listen for GPS updates from the camera (emitted by gps-new-camera)
window.addEventListener("gps-camera-update-position", function (e) {
  const cameraEl = document.querySelector("[gps-new-camera]")
  const arrowEl = document.getElementById("arrow")
  const eventEl = document.getElementById("event")

  if (!cameraEl || !arrowEl || !eventEl) {
    return
  }

  // Get the world positions of the camera and the event.
  const cameraPos = new THREE.Vector3()
  cameraEl.object3D.getWorldPosition(cameraPos)

  const eventPos = new THREE.Vector3()
  eventEl.object3D.getWorldPosition(eventPos)

  // Create a rotation matrix from the origin (0,0,0) towards the local event direction.
  const rotationMatrix = new THREE.Matrix4().lookAt(
    eventEl.position,
    arrowEl.position,
    arrowEl.up
  )

  // Convert the rotation matrix to a quaternion.
  const targetQuaternion = new THREE.Quaternion().setFromRotationMatrix(
    rotationMatrix
  )

  // Apply the quaternion to the arrow so it points correctly in camera space.
  arrowEl.object3D.quaternion.copy(targetQuaternion)
})
