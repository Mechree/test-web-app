window.addEventListener("load", () => {
  const camera = document.querySelector("[camera]")
  const marker = document.querySelector("a-marker")
  let check

  marker.addEventListener("markerFound", () => {
    let cameraPosition = camera.object3D.position
    let markerPosition = marker.object3D.position
    let distance = cameraPosition.distanceTo(markerPosition)

    check = setInterval(() => {
      cameraPosition = camera.object3D.position
      markerPosition = marker.object3D.position
      distance = cameraPosition.distanceTo(markerPosition)

      // do what you want with the distance:
      console.log(distance)
    }, 100)
  })

  marker.addEventListener("markerLost", () => {
    clearInterval(check)
  })
})
