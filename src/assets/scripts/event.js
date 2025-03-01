// Wait for the document to load, link scene and event entity to their respective variables, place event location via coordinates, and add some sort of marker.
document.addEventListener("DOMContentLoaded", function () {
  const scene = document.querySelector("a-scene")

  if (scene) {
    scene.addEventListener("loaded", function () {
      const elementEvent = document.getElementById("event")
      if (elementEvent) {
        console.log("Event entity found!")
        // Set scale, primitive and color.
        elementEvent.setAttribute("primitive", "box")
        elementEvent.setAttribute("material", {
          color: "red",
        })
        // Place entity slightly north of user position
        elementEvent.setAttribute("gps-entity-place", {
          latitude: 39.65210693451366 + 0.001,
          longitude: -84.12979108861603,
        })
      } else {
        console.error("Event entity not found!")
      }
    })
  } else {
    console.error("Scene element not found!")
  }
})
