import { createReports } from "./firebase.js"

function hideAllInfoWindows(map, markers)
{
    markers.forEach(function(marker) {
        marker.infowindow.close(map, marker);
    });
}

export async function loadReports(map) {
    var reports = await createReports();
    console.log(reports);
    const iconBase =
      "./icons/";
  
    const icons = {
      report: {
        icon: iconBase + "report.png",
      },
    };
    
    var features = [];
    for (let i =0; i < reports.length; i++)
    {
        console.log(reports[i]);
        features.push(
            {
                position: new google.maps.LatLng(reports[i][1], reports[i][2]),
                type: "report",
                content: new google.maps.InfoWindow({
                    content: reports[i][0]
                }),
            },
        )
    }
    console.log(features);

    var markers = [];
    //creates all the markers and their info windows
    for (let i = 0; i < features.length; i++) {
      const marker = new google.maps.Marker({
        position: {lat:reports[i][1], lng:reports[i][2]},
        icon: "./icons/report.png",
        map: map,
        infowindow: features[i].content
        // title: "Hello world!"
      });

      
    markers.push(marker);
    //listener for click
    marker.addListener("click", function() {
        hideAllInfoWindows(map, markers);
        marker.infowindow.open({
            anchor: marker,
            map,
            })
    })

    marker.setMap(map);
    google.maps.event.addListener(map, "click", function(event) {
        hideAllInfoWindows(map, markers);
        });
    }
}