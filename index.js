const BOUNDS = {
  north: 38.955,
  south: 38.935,
  west: -92.35,
  east: -92.3,
};

function highlightRoutes(map) {
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map,
    preserveViewport: true,
  });
  directionsService.route(
    {
      origin: new google.maps.LatLng(38.9404, -92.3277),
      destination: new google.maps.LatLng(38.944716, -92.332159),
      waypoints: [
        {
          stopover: false,
          location: new google.maps.LatLng(38.946456, -92.325635),
        },
      ],
      travelMode: google.maps.TravelMode.DRIVING,
    },
    function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        // directionsDisplay.setDirections(response);
        var polyline = new google.maps.Polyline({
          path: [],
          strokeColor: "#0000FF",
          strokeWeight: 5,
          strokeOpacity: 0.5,
        });
        var bounds = new google.maps.LatLngBounds();

        var legs = response.routes[0].legs;
        for (i = 0; i < legs.length; i++) {
          var steps = legs[i].steps;
          for (j = 0; j < steps.length; j++) {
            var nextSegment = steps[j].path;
            for (k = 0; k < nextSegment.length; k++) {
              polyline.getPath().push(nextSegment[k]);
              bounds.extend(nextSegment[k]);
            }
          }
        }

        polyline.setMap(map);
        google.maps.event.addListener(polyline, "click", () => {
          console.log("polyline 1 clicked");
        });
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
  // -------------------------------------------------------------------
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map,
    preserveViewport: true,
  });
  directionsService.route(
    {
      origin: new google.maps.LatLng(38.942377, -92.329996),
      destination: new google.maps.LatLng(38.940321, -92.323739),
      travelMode: google.maps.TravelMode.DRIVING,
    },
    function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        // directionsDisplay.setDirections(response);
        var polyline = new google.maps.Polyline({
          path: [],
          strokeColor: "#FF00FF",
          strokeWeight: 5,
          strokeOpacity: 0.5,
        });
        var bounds = new google.maps.LatLngBounds();

        var legs = response.routes[0].legs;
        for (i = 0; i < legs.length; i++) {
          var steps = legs[i].steps;
          for (j = 0; j < steps.length; j++) {
            var nextSegment = steps[j].path;
            for (k = 0; k < nextSegment.length; k++) {
              polyline.getPath().push(nextSegment[k]);
              bounds.extend(nextSegment[k]);
            }
          }
        }

        polyline.setMap(map);
        google.maps.event.addListener(polyline, "click", () => {
          console.log("polyline 2 clicked");
        });
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
}

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
    center: new google.maps.LatLng(38.944261, -92.326639),
    restriction: {
      latLngBounds: BOUNDS,
      strictBounds: false,
    },
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
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
