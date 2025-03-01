// Waits for document to load and then Links the scene and arrow to variables by finding the scene and arrow entities in the HTML Documents
document.addEventListener("DOMContentLoaded", function () {
  const scene = document.querySelector("a-scene")

  if (scene) {
    scene.addEventListener("loaded", function () {
      const elementArrow = document.getElementById("arrow")
      console.log("Arrow entity:", elementArrow)

      // If arrow entity is found, modifying it
      if (elementArrow) {
        elementArrow.object3D.rotation.set(
          THREE.MathUtils.degToRad(0),
          THREE.MathUtils.degToRad(0),
          THREE.MathUtils.degToRad(0)
        )
        // Adds 360 degrees to the x-axis
        // elementArrow.object3D.rotation.x += 2 * Math.PI
      } else {
        console.error("Arrow entity not found!")
      }
    })
  } else {
    console.error("Scene element not found!")
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
