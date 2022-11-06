import { highlightRoutes, highlightRoute } from "./highlightRoutes.js";
import { loadMarkers } from "./loadMarkers.js";
import { loadReports } from "./loadReports.js";
import { createParkingCards } from "./parkingdistance.js";
import { calculateArrivals } from "./calculateArrivals.js";

const BOUNDS = {
  north: 38.96,
  south: 38.925,
  west: -92.38,
  east: -92.28,
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

  calculateArrivals();

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
window.addEventListener("load", initialize);
