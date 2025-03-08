AFRAME.registerComponent("arrow-pointer", {
  init: function () {
    this.targetEl = document.querySelector("#event") // The entity we want to point toward (event)
    this.arrowEl = this.el // The entity doing the pointing (arrow)
    this.cameraEl = document.querySelector("#cam") // POV using the user's camera
  },

  // With every frame update, 90ms, rotate toward the targetEL
  tick: function () {
    if (!this.targetEl || !this.cameraEl) return

    const camera = this.cameraEl.object3D
    const arrow = this.arrowEl.object3D
    const target = this.targetEl.object3D

    // Get the world position of the target
    const targetPos = new THREE.Vector3()
    target.getWorldPosition(targetPos)

    // Get the world position of the user's POV, camera
    const cameraPos = new THREE.Vector3()
    camera.getWorldPosition(cameraPos)

    // Convert target position to the camera's local space
    const targetDir = new THREE.Vector3().subVectors(targetPos, cameraPos)
    this.cameraEl.object3D.worldToLocal(targetDir)

    const angle = Math.atan2(targetDir.x, -targetDir.z) // Flip Z for correct orientation

    // Convert angle to degrees and apply rotation
    this.arrowEl.setAttribute(
      "rotation",
      `0 0 ${THREE.MathUtils.radToDeg(angle)}`
    )
  },
})
