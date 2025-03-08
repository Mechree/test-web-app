AFRAME.registerComponent("arrow-pointer", {
  init: function () {
    this.targetEl = document.querySelector("#event") // The entity we want to point toward
    this.arrowEl = this.el // The entity doing the pointing
    this.cameraEl = document.querySelector("a-camera") // POV using the user's camera
  },

  // With every frame update, 90ms, rotate toward the targetEL
  tick: function () {
    if (!this.targetEl || !this.cameraEl) return

    const targetWorldPos = new THREE.Vector3()
    this.targetEl.object3D.getWorldPosition(targetWorldPos)

    const targetLocalPos = targetWorldPos.clone()
    this.cameraEl.object3D.worldToLocal(targetLocalPos)

    const angleRad = Math.atan2(targetLocalPos.y, targetLocalPos.x)
    // console.log(angleRad)
    var angleDeg = (180 / 3.1415926535) * angleRad + 245
    // angleDeg = (angleDeg + 360) % 360

    // console.log(angleDeg)
    // const angleDeg = THREE.Math.radToDeg(angleRad);
    this.arrowEl.setAttribute("rotation", { x: 0, y: 0, z: angleDeg })
  },
})
