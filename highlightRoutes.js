// function showWaypoints(map, s) {
//   const directionsService = new google.maps.DirectionsService();
//   const directionsRenderer = new google.maps.DirectionsRenderer();
//   directionsRenderer.setMap(map);
// }

export function highlightRoutes(map) {
  /***** HEARNES LOOP 401 *****/
  var routeSelected = false;
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map,
    preserveViewport: true,
  });
  directionsService.route(
    {
      origin: new google.maps.LatLng(38.942217, -92.326668) /*student center*/,
      destination: new google.maps.LatLng(38.942217, -92.326668),
      //stopover: true is a bustop
      waypoints: [
        {
          stopover: false,
          location: new google.maps.LatLng(
            38.942195,
            -92.322052
          ) /*rollins to college*/,
        },
        {
          stopover: true,
          location: new google.maps.LatLng(38.933522, -92.334403) /*hearnes*/,
        },
        {
          stopover: false,
          location: new google.maps.LatLng(
            38.936142,
            -92.331249
          ) /*stadium to tiger*/,
        },
        {
          stopover: true,
          location: new google.maps.LatLng(
            38.937553,
            -92.330766
          ) /*tiger and hospital*/,
        },
        {
          stopover: true,
          location: new google.maps.LatLng(
            38.939254,
            -92.330581
          ) /* tiger and kentucky*/,
        },
        {
          stopover: true,
          location: new google.maps.LatLng(
            38.9423,
            -92.329556
          ) /*front of trulaske*/,
        },
      ],
      travelMode: google.maps.TravelMode.DRIVING,
    },
    function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        var polyline = new google.maps.Polyline({
          path: [],
          strokeColor: "#42BFDD",
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
          console.log("Hearnes Loop 401 clicked");
          routeSelected = true;
        });
        google.maps.event.addListener(polyline, "mouseover", () => {
          if (!routeSelected) {
            polyline.setOptions({ strokeWeight: 8, strokeOpacity: 0.7 });
            directionsDisplay.setDirections(response);
          }
        });
        google.maps.event.addListener(polyline, "mouseout", () => {
          if (!routeSelected) {
            polyline.setOptions({ strokeWeight: 5, strokeOpacity: 0.5 });
            directionsDisplay.setDirections({ routes: [] });
          }
        });
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
  /***** Trowbridge Loop 402 ****/
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map,
    preserveViewport: true,
  });
  directionsService.route(
    {
      origin: new google.maps.LatLng(38.942217, -92.326668), //student center
      destination: new google.maps.LatLng(38.942217, -92.326668),
      waypoints: [
        {
          stopover: true,
          location: new google.maps.LatLng(
            38.93803732930165,
            -92.31718344461066
          ) /*trowbridge*/,
        },
        {
          stopover: false,
          location: new google.maps.LatLng(
            38.93524,
            -92.317012
          ) /*east campus drive to ashland*/,
        },
        {
          stopover: false,
          location: new google.maps.LatLng(
            38.937627,
            -92.330637
          ) /*hospital drive to tiger ave*/,
        },
      ],
      travelMode: google.maps.TravelMode.DRIVING,
    },
    function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        console.log(response);
        var polyline = new google.maps.Polyline({
          path: [],
          strokeColor: "#EC0B43",
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
          console.log("Trowbridge Loop 402 clicked");
          routeSelected = true;
        });
        google.maps.event.addListener(polyline, "mouseover", () => {
          if (!routeSelected) {
            polyline.setOptions({ strokeWeight: 8, strokeOpacity: 0.7 });
            directionsDisplay.setDirections(response);
          }
        });
        google.maps.event.addListener(polyline, "mouseout", () => {
          if (!routeSelected) {
            polyline.setOptions({ strokeWeight: 5, strokeOpacity: 0.5 });
            directionsDisplay.setDirections({ routes: [] });
          }
        });
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
  //**** Campus Loop 405 *****/
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map,
    preserveViewport: true,
  });
  directionsService.route(
    {
      origin: new google.maps.LatLng(38.942217, -92.326668), //student center
      destination: new google.maps.LatLng(38.942217, -92.326668),
      waypoints: [
        {
          stopover: false,
          location: new google.maps.LatLng(38.937578, -92.325395), //hitt to rollins
        },
        {
          stopover: false,
          location: new google.maps.LatLng(38.934615, -92.331833), //mcdeaver memorial dr
        },
        {
          stopover: true,
          location: new google.maps.LatLng(38.933522, -92.334403) /*hearnes*/,
        },
        {
          stopover: false,
          location: new google.maps.LatLng(38.938891, -92.321364), //college to ashland
        },
        {
          stopover: true,
          location: new google.maps.LatLng(
            38.93803732930165,
            -92.31718344461066
          ) /*trowbridge*/,
        },
        {
          stopover: false,
          location: new google.maps.LatLng(38.941944, -92.318532), //east vampus drive to rollins
        },
        {
          stopover: false,
          location: new google.maps.LatLng(38.950468, -92.325924), //hitt street and cherry
        },
        {
          stopover: false,
          location: new google.maps.LatLng(38.944596, -92.330899), //conley and 6th
        },
      ],
      travelMode: google.maps.TravelMode.DRIVING,
    },
    function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        console.log(response);
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
          console.log("Campus Loop 405 clicked");
          routeSelected = true;
        });
        google.maps.event.addListener(polyline, "mouseover", () => {
          if (!routeSelected) {
            polyline.setOptions({ strokeWeight: 8, strokeOpacity: 0.7 });
            directionsDisplay.setDirections(response);
          }
        });
        google.maps.event.addListener(polyline, "mouseout", () => {
          if (!routeSelected) {
            polyline.setOptions({ strokeWeight: 5, strokeOpacity: 0.5 });
            directionsDisplay.setDirections({ routes: [] });
          }
        });
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
  //***** MU Reactor Loop 403 *****/
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map,
    preserveViewport: true,
  });
  directionsService.route(
    {
      origin: new google.maps.LatLng(38.93048736385712, -92.33924247328811), //MU Reactor Lot
      destination: new google.maps.LatLng(
        38.93048736385712,
        -92.33924247328811
      ),
      waypoints: [
        {
          stopover: false,
          location: new google.maps.LatLng(38.933522, -92.332004), //mick deaver mem dr
        },
        {
          stopover: true,
          location: new google.maps.LatLng(
            38.945723,
            -92.330952
          ) /*6th street stop*/,
        },
        {
          stopover: false,
          location: new google.maps.LatLng(38.948569, -92.33208), //fifth and elm
        },
      ],
      travelMode: google.maps.TravelMode.DRIVING,
    },
    function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        console.log(response);
        var polyline = new google.maps.Polyline({
          path: [],
          strokeColor: "#58355E",
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
          console.log("MU Reactor Loop 403 clicked");
          routeSelected = true;
        });
        google.maps.event.addListener(polyline, "mouseover", () => {
          if (!routeSelected) {
            polyline.setOptions({ strokeWeight: 8, strokeOpacity: 0.7 });
            directionsDisplay.setDirections(response);
          }
        });
        google.maps.event.addListener(polyline, "mouseout", () => {
          if (!routeSelected) {
            polyline.setOptions({ strokeWeight: 5, strokeOpacity: 0.5 });
            directionsDisplay.setDirections({ routes: [] });
          }
        });
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );

  map.addListener("click", () => {
    directionsDisplay.setDirections({ routes: [] });
    routeSelected = false;
  });
}
