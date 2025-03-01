// Waits for document to load and then Links the scene and arrow to global variables by finding the scene and arrow entities in the HTML Document
document.addEventListener("DOMContentLoaded", function () {
  const scene = document.querySelector("a-scene")
  if (scene) {
    scene.addEventListener("loaded", function () {
      const elementArrow = document.getElementById("arrow")
      console.log("Arrow entity:", elementArrow)
    })
  }
})

// Custom component that logs users position in the world using THREE.js
AFRAME.registerComponent("rotation-reader", {
  tick: (function () {
    var position = new THREE.Vector3()
    var quaternion = new THREE.Quaternion()

    return function () {
      console.log(this.el.object3D.getWorldPosition(position))
      console.log(this.el.object3D.getWorldQuaternion(quaternion))
    }
  })(),
})
