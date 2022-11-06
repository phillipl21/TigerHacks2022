var directions = [
  {
    polyline1: {},
    polyline2: {},
    polyline3: {},
    polyline4: {},
  },
];
var prevRoute = false;

function showMarkers(map, markers) {
  for (let i = 0; i < markers.length; i++) markers[i].setMap(map);
}

function hideMarkers(markers) {
  for (let i = 0; i < markers.length; i++) markers[i].setMap(null);
}

export function highlightRoute(map, name) {
  console.log("called");
  map.setZoom(15);
  if (prevRoute) {
    directions[prevRoute].polyline.setOptions({
      strokeWeight: 5,
      strokeOpacity: 0.4,
    });
    hideMarkers(directions[prevRoute].markers);
  }
  directions[name].polyline.setOptions({
    strokeWeight: 8,
    strokeOpacity: 0.7,
  });
  showMarkers(map, directions[name].markers);
  prevRoute = name;
}

export function highlightRoutes(map) {
  /***** HEARNES LOOP 401 *****/
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map,
    preserveViewport: true,
  });

  var waypoints1 = [
    {
      stopover: false,
      location: new google.maps.LatLng(
        38.942195,
        -92.322052
      ) /*rollins to college*/,
    },
    {
      stopover: true,
      location: new google.maps.LatLng(
        38.942217,
        -92.326668
      ) /*student center*/,
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
  ];
  directionsService.route(
    {
      origin: new google.maps.LatLng(38.942217, -92.326668) /*student center*/,
      destination: new google.maps.LatLng(38.942217, -92.326668),
      //stopover: true is a bustop
      waypoints: waypoints1,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        var polyline = new google.maps.Polyline({
          path: [],
          strokeColor: "#FF0000",
          strokeWeight: 5,
          strokeOpacity: 0.4,
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

        var markers = [];
        for (let i = 0; i < waypoints1.length; i++) {
          if (waypoints1[i].stopover) {
            markers.push(
              new google.maps.Marker({
                position: waypoints1[i].location,
                map,
              })
            );
          }
        }
        google.maps.event.addListener(polyline, "click", () => {
          console.log("Hearnes Loop 401 clicked");

          if (prevRoute) {
            console.log(prevRoute);
            directions[prevRoute].polyline.setOptions({
              strokeWeight: 5,
              strokeOpacity: 0.4,
            });
            hideMarkers(directions[prevRoute].markers);
          }
          polyline.setOptions({ strokeWeight: 8, strokeOpacity: 0.8 });
          showMarkers(map, markers);
          prevRoute = "polyline1";
        });
        google.maps.event.addListener(polyline, "mouseover", () => {
          if (!prevRoute) {
            polyline.setOptions({ strokeWeight: 8, strokeOpacity: 0.8 });
            showMarkers(map, markers);
          }
        });
        google.maps.event.addListener(polyline, "mouseout", () => {
          if (!prevRoute) {
            polyline.setOptions({ strokeWeight: 5, strokeOpacity: 0.3 });
            hideMarkers(markers);
          }
        });
        map.addListener("click", () => {
          hideMarkers(markers);
          prevRoute = null;
          polyline.setOptions({ strokeWeight: 5, strokeOpacity: 0.3 });
        });

        hideMarkers(markers);

        directions.polyline1 = { polyline: polyline, markers: markers };
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );

  /***** Trowbridge Loop 402 ****/
  var waypoints2 = [
    {
      stopover: true,
      location: new google.maps.LatLng(
        38.93803732930165,
        -92.31718344461066
      ) /*trowbridge*/,
    },
    {
      stopover: true,
      location: new google.maps.LatLng(
        38.942217,
        -92.326668
      ) /*student center*/,
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
  ];
  directionsService.route(
    {
      origin: new google.maps.LatLng(38.942217, -92.326668), //student center
      destination: new google.maps.LatLng(38.942217, -92.326668),
      waypoints: waypoints2,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        var polyline = new google.maps.Polyline({
          path: [],
          strokeColor: "#00FF00",
          strokeWeight: 5,
          strokeOpacity: 0.4,
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

        var markers = [];
        for (let i = 0; i < waypoints2.length; i++) {
          if (waypoints2[i].stopover) {
            markers.push(
              new google.maps.Marker({
                position: waypoints2[i].location,
                map,
              })
            );
          }
        }
        console.log(markers);
        google.maps.event.addListener(polyline, "click", () => {
          console.log("Trowbridge Loop 402 clicked");
          if (prevRoute) {
            directions[prevRoute].polyline.setOptions({
              strokeWeight: 5,
              strokeOpacity: 0.4,
            });
            hideMarkers(directions[prevRoute].markers);
          }
          polyline.setOptions({ strokeWeight: 8, strokeOpacity: 0.8 });
          showMarkers(map, markers);
          prevRoute = "polyline2";
        });
        google.maps.event.addListener(polyline, "mouseover", () => {
          if (!prevRoute) {
            polyline.setOptions({ strokeWeight: 8, strokeOpacity: 0.8 });
            showMarkers(map, markers);
          }
        });
        google.maps.event.addListener(polyline, "mouseout", () => {
          if (!prevRoute) {
            polyline.setOptions({ strokeWeight: 5, strokeOpacity: 0.3 });
            hideMarkers(markers);
          }
        });
        map.addListener("click", () => {
          hideMarkers(markers);
          prevRoute = null;
          polyline.setOptions({ strokeWeight: 5, strokeOpacity: 0.3 });
        });

        hideMarkers(markers);

        directions.polyline2 = { polyline: polyline, markers: markers };
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );

  //**** Campus Loop 405 *****/
  var waypoints3 = [
    {
      stopover: false,
      location: new google.maps.LatLng(38.937578, -92.325395), //hitt to rollins
    },
    {
      stopover: true,
      location: new google.maps.LatLng(38.942217, -92.326668), //student center
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
  ];
  directionsService.route(
    {
      origin: new google.maps.LatLng(38.942217, -92.326668), //student center
      destination: new google.maps.LatLng(38.942217, -92.326668),
      waypoints: waypoints3,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        var polyline = new google.maps.Polyline({
          path: [],
          strokeColor: "#0000FF",
          strokeWeight: 5,
          strokeOpacity: 0.4,
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

        var markers = [];
        for (let i = 0; i < waypoints3.length; i++) {
          if (waypoints3[i].stopover) {
            markers.push(
              new google.maps.Marker({
                position: waypoints3[i].location,
                map,
              })
            );
          }
        }
        console.log(markers);
        google.maps.event.addListener(polyline, "click", () => {
          console.log("Campus Loop 405 clicked");
          if (prevRoute) {
            directions[prevRoute].polyline.setOptions({
              strokeWeight: 5,
              strokeOpacity: 0.4,
            });
            hideMarkers(directions[prevRoute].markers);
          }
          polyline.setOptions({ strokeWeight: 8, strokeOpacity: 0.8 });
          showMarkers(map, markers);
          prevRoute = "polyline3";
        });
        google.maps.event.addListener(polyline, "mouseover", () => {
          if (!prevRoute) {
            polyline.setOptions({ strokeWeight: 8, strokeOpacity: 0.8 });
            showMarkers(map, markers);
          }
        });
        google.maps.event.addListener(polyline, "mouseout", () => {
          if (!prevRoute) {
            polyline.setOptions({ strokeWeight: 5, strokeOpacity: 0.3 });
            hideMarkers(markers);
          }
        });
        map.addListener("click", () => {
          hideMarkers(markers);
          prevRoute = null;
          polyline.setOptions({ strokeWeight: 5, strokeOpacity: 0.3 });
        });

        hideMarkers(markers);

        directions.polyline3 = { polyline: polyline, markers: markers };
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
  //***** MU Reactor Loop 403 *****/
  var waypoints4 = [
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
      stopover: true,
      location: new google.maps.LatLng(
        38.93048736385712,
        -92.33924247328811
      ) /*6th street stop*/,
    },
    {
      stopover: false,
      location: new google.maps.LatLng(38.948569, -92.33208), //fifth and elm
    },
  ];
  directionsService.route(
    {
      origin: new google.maps.LatLng(38.93048736385712, -92.33924247328811), //MU Reactor Lot
      destination: new google.maps.LatLng(
        38.93048736385712,
        -92.33924247328811
      ),
      waypoints: waypoints4,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        var polyline = new google.maps.Polyline({
          path: [],
          strokeColor: "#EEEE00",
          strokeWeight: 5,
          strokeOpacity: 0.4,
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

        var markers = [];
        for (let i = 0; i < waypoints4.length; i++) {
          if (waypoints4[i].stopover) {
            markers.push(
              new google.maps.Marker({
                position: waypoints4[i].location,
                map,
              })
            );
          }
        }
        google.maps.event.addListener(polyline, "click", () => {
          console.log("MU Reactor Loop 403 clicked");
          if (prevRoute) {
            directions[prevRoute].polyline.setOptions({
              strokeWeight: 5,
              strokeOpacity: 0.4,
            });
            hideMarkers(directions[prevRoute].markers);
          }
          polyline.setOptions({ strokeWeight: 8, strokeOpacity: 0.8 });
          showMarkers(map, markers);
          prevRoute = "polyline4";
        });
        google.maps.event.addListener(polyline, "mouseover", () => {
          if (!prevRoute) {
            polyline.setOptions({ strokeWeight: 8, strokeOpacity: 0.8 });
            showMarkers(map, markers);
          }
        });
        google.maps.event.addListener(polyline, "mouseout", () => {
          if (!prevRoute) {
            polyline.setOptions({ strokeWeight: 5, strokeOpacity: 0.4 });
            hideMarkers(markers);
          }
        });
        map.addListener("click", () => {
          hideMarkers(markers);
          prevRoute = null;
          polyline.setOptions({ strokeWeight: 5, strokeOpacity: 0.4 });
        });

        hideMarkers(markers);

        directions.polyline4 = { polyline: polyline, markers: markers };
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
}
