// arrow.js

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

  // Convert the event's world position into camera's local space.
  const localEventPos = eventPos.clone()
  cameraEl.object3D.worldToLocal(localEventPos)

  // Project onto the XZ plane.
  localEventPos.y = 0

  // If the target is exactly at the camera (or too close), do nothing.
  if (localEventPos.lengthSq() < 0.0001) {
    return
  }

  // Calculate the yaw angle relative to the camera's forward vector.
  // In camera local space, forward is (0, 0, -1).
  const angle = Math.atan2(localEventPos.x, -localEventPos.z)

  // Create an Euler rotation around the Y axis.
  const euler = new THREE.Euler(0, angle, 0)
  const quaternion = new THREE.Quaternion().setFromEuler(euler)

  // Apply the quaternion to the arrow.
  arrowEl.object3D.quaternion.copy(quaternion)
})
