function initialize() {
  var map = new google.maps.Map(document.getElementById("map_canvas"), {
    center: new google.maps.LatLng(38.9404, -92.3277),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });
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
          strokeWeight: 3,
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
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
}
google.maps.event.addDomListener(window, "load", initialize);
