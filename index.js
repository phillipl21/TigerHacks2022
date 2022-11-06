import { highlightRoutes } from "./highlightRoutes.js";
import { loadMarkers } from "./loadMarkers.js";

const BOUNDS = {
  north: 38.99,
  south: 38.89,
  west: -92.45,
  east: -92.2,
};

function initialize() {
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

  highlightRoutes(map);

  loadMarkers(map);

  // map.setOptions();
}
window.addEventListener("load", initialize);
