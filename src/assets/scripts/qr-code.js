// qr-code.js
// This code will allow the user to scan a QR code embedded with event location datat which will take them to our webpage.
// To run node.js must be installed
// Use the command 'node ./path/to/script.js"

// Module
const QRCode = require('qrcode')

// File path
const filePath = "./src/assets/images/qr-code.png"
// QR options
var options = {
  errorCorrectionLevel: 'M',
  scale: '10',
  type: 'image/png',
  color: {
    dark:"#010599FF",
    light:"#FFBF60FF"
  }
}

// Webpage
const webPage = "https://mechree.github.io/test-web-app/"

// Location data
var latitude = 39.65210693451366 + 0.001
var longitude = -84.12979108861603

QRCode.toFile(filePath, webPage, options, function(err)
{
  if (err) throw err
  console.log('done')
})
