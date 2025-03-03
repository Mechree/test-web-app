// arrow.js

// Listen for GPS updates from the camera (emitted by gps-new-camera)
window.addEventListener("gps-camera-update-position", function () {
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

  // Compute the direction vector from the camera to the event in world space.
  const direction = new THREE.Vector3().subVectors(eventPos, cameraPos)
  direction.y = 0

  if (direction.lengthSq() < 0.0001) {
    return
  }
  direction.normalize()

  // Create a rotation matrix from the origin (0,0,0) towards the local event direction.
  const up = new THREE.Vector3(0, 1, 0) // Use world up
  const rotationMatrix = new THREE.Matrix4().lookAt(
    new THREE.Vector3(0, 0, 0),
    direction,
    up
  )

  // Convert the rotation matrix to a quaternion.
  const targetQuaternion = new THREE.Quaternion().setFromRotationMatrix(
    rotationMatrix
  )

  // Counteract cameraQuaternion
  const cameraQuat = cameraEl.object3D.quaternion
  const invCameraQuat = cameraQuat.clone().invert()
  const arrowLocalQuat = invCameraQuat.multiply(targetQuaternion)

  // Apply the quaternion to the arrow so it points correctly in camera space.
  arrowEl.object3D.quaternion.copy(arrowLocalQuat)

  // Reset the arrow's position relative to the camera.
  // This ensures it stays in the same place on screen (e.g. just below your event text).
  arrowEl.object3D.position.set(0, -0.5, 0)
})
