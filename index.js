import { highlightRoutes, highlightRoute } from "./highlightRoutes.js";
import { loadMarkers } from "./loadMarkers.js";
import { loadReports } from "./loadReports.js";
import { createParkingCards } from "./parkingdistance.js";
let markers = []

const BOUNDS = {
  north: 38.99,
  south: 38.89,
  west: -92.45,
  east: -92.2,
};

async function initialize() {
  var map = new google.maps.Map(document.getElementById("map_canvas"), {
    center: new google.maps.LatLng(38.94, -92.326635),
    restriction: {
      latLngBounds: BOUNDS,
      strictBounds: false,
    },
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    streetViewControl: false,
    styles: [
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }],
      },
    ],
  });

  map.addListener("click", (e) => {

    placeMarkerAndPanTo(e.latLng, map);
    // console.log("=============")
    // console.log(e.latLng.lat())
    // console.log(e.latLng.lng())
    const latitude = markers[0].position.lat()
    const longitude = markers[0].position.lng()
    // let info = document.getElementById("marker-info")
    // info.innerText = "Latitude: " + latitude + " | Longitude: " + longitude
    
    console.log(markers[0].position.lat())
    console.log(markers[0].position.lng())
  });

  highlightRoutes(map);

  loadMarkers(map);
  
  await loadReports(map);

  document.getElementById("card-1").addEventListener("click", () => {
    highlightRoute(map, "polyline1");
  });
  document.getElementById("card-2").addEventListener("click", () => {
    highlightRoute(map, "polyline2");
  });
  document.getElementById("card-3").addEventListener("click", () => {
    highlightRoute(map, "polyline3");
  });
  document.getElementById("card-4").addEventListener("click", () => {
    highlightRoute(map, "polyline4");
  });

  createParkingCards(map);
}

function placeMarkerAndPanTo(latLng, map) {
    console.log(markers)
    if (markers.length > 0) {
        // console.log("markers is not empty")
        markers[0].setMap(null)
        markers = []
    }
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
    });
    map.panTo(latLng);
    markers.push(marker)

  }

window.addEventListener("load", initialize);

const longitude = markers[0].position.lng()
const latitude = markers[0].position.lat()
export {latitude, longitude}