import { highlightRoutes } from "./highlightRoutes.js";

const BOUNDS = {
  north: 38.99,
  south: 38.89,
  west: -92.45,
  east: -92.2,
};

function loadMarkers(map) {
  const iconBase =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";

  const icons = {
    parking: {
      icon: iconBase + "parking_lot_maps.png",
    },
    library: {
      icon: iconBase + "library_maps.png",
    },
    info: {
      icon: iconBase + "info-i_maps.png",
    },
  };

  const features = [
    {
      position: new google.maps.LatLng(38.944261, -92.326639),
      type: "parking",
    },
  ];

  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}

function initialize() {
  var map = new google.maps.Map(document.getElementById("map_canvas"), {
    center: new google.maps.LatLng(38.940, -92.326635),
    restriction: {
      latLngBounds: BOUNDS,
      strictBounds: false,
    },
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    styles: [
      {
        featureType: "poi.business",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "poi.school",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "poi.sports_complex",
        stylers: [{ visibility: "off" }],
      },
    ],
  });

  highlightRoutes(map);

  loadMarkers(map);

  // map.setOptions();
}
window.addEventListener("load", initialize);
