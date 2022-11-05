export function highlightRoutes(map) {
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
          for (let i = 0; i < legs.length; i++) {
            var steps = legs[i].steps;
            for (let j = 0; j < steps.length; j++) {
              var nextSegment = steps[j].path;
              for (let k = 0; k < nextSegment.length; k++) {
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
          for (let i = 0; i < legs.length; i++) {
            var steps = legs[i].steps;
            for (let j = 0; j < steps.length; j++) {
              var nextSegment = steps[j].path;
              for (let k = 0; k < nextSegment.length; k++) {
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
    /***** HEARNES LOOP 401 *****/
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
            strokeColor: "#FF00A",
            strokeWeight: 5,
            strokeOpacity: 0.5,
          });
          var bounds = new google.maps.LatLngBounds();
  
          var legs = response.routes[0].legs;
          for (let i = 0; i < legs.length; i++) {
            var steps = legs[i].steps;
            for (let j = 0; j < steps.length; j++) {
              var nextSegment = steps[j].path;
              for (let k = 0; k < nextSegment.length; k++) {
                polyline.getPath().push(nextSegment[k]);
                bounds.extend(nextSegment[k]);
              }
            }
          }
  
          polyline.setMap(map);
          google.maps.event.addListener(polyline, "click", () => {
            console.log("polyline 3 clicked");
          });
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }