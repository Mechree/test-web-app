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

  // Compute the direction vector from the camera to the event.
  const direction = new THREE.Vector3()
    .subVectors(eventPos, cameraPos)
    .normalize()

  // Build a rotation matrix that "looks" along the computed direction.
  // Since the arrow is a child of the camera, we create the matrix from the origin.
  const up = new THREE.Vector3(0, 1, 0) // World up vector.
  const rotationMatrix = new THREE.Matrix4().lookAt(
    new THREE.Vector3(0, 0, 0),
    direction,
    up
  )

  // Convert the rotation matrix into a quaternion.
  const targetQuaternion = new THREE.Quaternion().setFromRotationMatrix(
    rotationMatrix
  )

  // Apply the quaternion to the arrow's object3D.
  arrowEl.object3D.quaternion.copy(targetQuaternion)
})
