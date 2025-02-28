// Run when page loads
window.onload = () => {
  let arrowEntityAdded = false

  // Use DOM API to obtain entity
  const element = document.querySelector("[gps-new-camera]")

  // Listener for GPS position update via the camera entity
  element.addEventListener("gps-camera-update-position", (e) => {
    if (!testEntityAdded) {
      alert(
        `Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`
      )
      // Add a box to the north of the initial GPS position
      const entityArrow = document.createElement("a-triangle")
      entityArrow.setAttribute("scale", {
        x: 10,
        y: 10,
        z: 10,
      })
      entityArrow.setAttribute("material", { color: "yellow" })
      entityArrow.setAttribute("gps-new-entity-place", {
        latitude: e.detail.position.latitude + 0.001,
        longitude: e.detail.position.longitude,
      })
      document.querySelector("a-scene").appendChild(entityArrow)
    }
    arrowEntityAdded = true
  })
}
