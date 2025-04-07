// Event.js Script
import { getEventByTitle } from "./fetch-event.js"

// Wait for the document to load, link scene and event entity to their respective variables, place event location via coordinates, and add some sort of marker.
document.addEventListener("DOMContentLoaded", function () {
  const scene = document.querySelector("a-scene")

  if (scene) {
    scene.addEventListener("loaded", function () {
      const elementEvent = document.getElementById("#event")

      if (elementEvent) {
        // console.log("Event entity found!")

        // Set scale, primitive and color.
        elementEvent.setAttribute("geometry", {
          primitive: "box",
          width: 8,
          height: 8,
          depth: 8,
        })

        const eventTitle = "Hackathon"
        const event = getEventByTitle(eventTitle)
        console.log(event.eventGeo.longitude)
        // Place entity
        elementEvent.setAttribute("gps-new-entity-place", {
          latitude: parseFloat(event.eventGeo.latitude),
          longitude: parseFloat(event.eventGeo.longitude),
        })
        // Log position
        console.log(
          "Event Position:",
          elementEvent.getAttribute("gps-new-entity-place")
        )
      } else {
        console.error("Event entity not found!")
      }
    })
  } else {
    console.error("Scene element not found!")
  }
})

// This component rotates the box at every frame tick (might add limiter to conserve resources)
AFRAME.registerComponent("rotation-tick", {
  init: function () {
    this.rotationTmp = { x: 0, y: 0, z: 0 } // Properly initialize rotationTmp
  },
  tick: function () {
    var el = this.el
    var rotation = el.getAttribute("rotation")

    // Increment the rotation
    this.rotationTmp.x = rotation.x + 0.2
    this.rotationTmp.y = rotation.y + 0.2
    this.rotationTmp.z = rotation.z + 0.2

    // Apply new rotation
    el.setAttribute("rotation", this.rotationTmp)
  },
})
