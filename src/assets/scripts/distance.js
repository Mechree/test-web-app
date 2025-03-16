// distance-tick.js

AFRAME.registerComponent("distance-calc", {
  init: function () {
    this.arrowText = this.el // The entity doing the pointing (tagged element)
    this.targetEl = document.querySelector("#event") // The entity we want to point toward
    this.cameraEl = document.querySelector("a-camera") // POV using the user's camera
  },

  tick: function () {
    if (!this.targetEl || !this.cameraEl) return

    // World position of event (target)
    const targetWorldPos = new THREE.Vector3()
    this.targetEl.object3D.getWorldPosition(targetWorldPos)

    // World position of camera
    const cameraPos = new THREE.Vector3()
    this.cameraEl.object3D.getWorldPosition(cameraPos)

    // Get manhattan distance from camera to target
    let dist
    dist = cameraPos.manhattanDistanceTo(targetWorldPos)
    dist = dist.toFixed(2) // format to 2 decimal places
    var distTxt =
      "Your event is this way.\n Distance: " + dist.toString(dist) + "m" // Combine dist and text

    // Update arrowText
    this.arrowText.setAttribute("value", distTxt)
  },
})
