// Wait for the document to load, link scene and event entity to their respective variables, place event location via coordinates, and add some sort of marker.
document.addEventListener("DOMContentLoaded", function () {
  const scene = document.querySelector("a-scene")

  if (scene) {
    scene.addEventListener("loaded", function () {
      const event = document.querySelector("event")
      if (event) {
        console.log("Event entity found!")
      } else {
        console.error("Event entity not found!")
      }
    })
  } else {
    console.error("Scene element not found!")
  }
})
