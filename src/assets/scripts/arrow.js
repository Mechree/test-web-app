AFRAME.registerComponent("arrow-track", {
  init: function () {
    this.targetEl = document.querySelector("#event") // The entity we want to point toward
    this.arrowEl = this.el // The entity doing the pointing
    this.cameraEl = document.querySelector("#cam") // POV using the user's camera
  },

  // With every frame update, 90ms, rotate toward the targetEL
  tick: function () {
    if (!this.targetEl || !this.cameraEl) return

    // Get the world position of the target
    const targetPos = new THREE.Vector3()
    this.targetEl.object3D.getWorldPosition(targetPos)

    // Get the world position of the user's POV, camera
    const cameraPos = new THREE.Vector3()
    this.cameraEl.object3D.getWorldPosition(cameraPos)

    // Convert target position to the camera's local space
    const targetDir = new THREE.Vector3().subVectors(targetPos, cameraPos)
    this.cameraEl.object3D.worldToLocal(targetDir) // Converts to camera's local coordinates

    // Compute rotation using lookAt()
    const quaternion = new THREE.Quaternion()
    const matrix = new THREE.Matrix4()
    matrix.lookAt(
      new THREE.Vector3(0, 0, 0),
      targetDir,
      new THREE.Vector3(0, 1, 0)
    )
    quaternion.setFromRotationMatrix(matrix)

    // Apply rotation (in local space)
    this.arrowEl.object3D.quaternion.copy(quaternion)
  },
})
