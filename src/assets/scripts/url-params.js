// url-params.js
// This script allows the webpage to collect lattitude and longitude information from the url parameters after a user scans a QR code. 
// Webpage

// const webPage = "https://mechree.github.io/test-web-app/"
const webPage = document.URL
console.log(currentUrl)

// Location data
var lat = 39.65210693451366 + 0.0011
var lng = -84.12979108861603

// Combined url
const url = `${webPage}?lat=${lat}&lng=${lng}`

// Module
var urlMod = require('url')

// Query url and return object
var parse = urlMod.parse(url, true)
var objs = parse.query

// Assign lattitude and longitude variables from object
var lat = objs.lat
var lng = objs.lng

console.log(lat, lng)