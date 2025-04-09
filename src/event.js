// Event.js Script
import { getEventByTitle } from "./fetch-event.js"

// Wait for the document to load, link scene and event entity to their respective variables, place event location via coordinates, and apply values to the display info window.

document.addEventListener("DOMContentLoaded", async function () {
  const scene = document.querySelector("a-scene")
  if (scene) {
    console.log("event-js scene found!")
    console.log("Scene load state: ", scene.hasLoaded)

    const elementEvent = document.getElementById("event")

    if (elementEvent) {
      console.log("Event entity found!")
      const infoDisplay = document.getElementById("display-info-text")

      // Set scale, primitive and color.
      elementEvent.setAttribute("geometry", {
        primitive: "box",
        width: 8,
        height: 8,
        depth: 8,
      })

      const eventTitle = "Hackathon"
      const event = await getEventByTitle(eventTitle)
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

      infoDisplay.setAttribute(
        "value",
        `Name: ${event.eventName}
        \nBldg: ${event.eventBldg} 
        \nRm:  ${event.eventRm}
        \nTime:  ${event.eventTime.toDate()}`
      )
    } else {
      console.error("Event entity not found!")
    }
  } else {
    console.error("Scene element not found!")
  }
})
