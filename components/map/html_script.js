let html_script = `
<!DOCTYPE html>
<html>
<head>

  <title>Quick Start - Leaflet</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="initial-scale=1.0">

  <link rel="shortcut icon" type="image/x-icon" href="docs/images/favicon.ico" />
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin=""/>
  <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin=""></script>
</head>
<style>
/* css to customize Leaflet default styles  */
.custom .leaflet-popup-tip{
  background: #39B7B8;
}
.custom .leaflet-popup-content-wrapper {
    background: #39B7B8;
    color: #ffffff;
    text-align:center;
    font: 'inter';
    font-weight: 500;
    padding:0.1px;
    size: 12px;
    letter-spacing: -0.01em;
    border:0px;
}
</style>
<body style="padding: 0; margin: 0">
<div id="mapid" style="width: 100%; height: 100vh;"></div>
<script>

  var mymap = L.map('mapid').setView([50.634928, 3.07366], 12);
  var customOptions = {'className' : 'custom', 'closeButton' : false};
  var popUpIcon = L.icon({
        iconUrl: 'https://image.flaticon.com/icons/png/512/1179/1179997.png',
        iconSize: [32, 32], // size of the icon
        popupAnchor: [0,-16]
        });
  
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; OpenStreetMap contributors, ',
    id: 'mapbox/streets-v11'
  }).addTo(mymap);

  function openPosition(e) {
    window.ReactNativeWebView.postMessage(e.latlng.toString().replace('LatLng(','').replace(')',''));
  }
  
</script>
</body>
</html>
`;

export default html_script;
