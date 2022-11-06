import { activateMarker } from "./loadMarkers.js";

function distance(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = (lat2 - lat1).toRad(); // Javascript functions in radians
  var dLon = (lon2 - lon1).toRad();
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1.toRad()) *
      Math.cos(lat2.toRad()) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c * 0.621371; // Distance in miles
  return d;
}

export async function createParkingCards(map) {
  console.log("entered parking card function");
  /** Converts numeric degrees to radians */
  if (typeof Number.prototype.toRad === "undefined") {
    Number.prototype.toRad = function () {
      return (this * Math.PI) / 180;
    };
  }

  const parkinglotdistances = [];

  let parkingcards = document.getElementById("parkingcards");

  window.navigator.geolocation.getCurrentPosition(async function (pos) {
    // console.log("ours", pos.coords.latitude, pos.coords.longitude);
    // console.log(
    //   distance(pos.coords.latitude, pos.coords.longitude, 38.94327220119762, -92.32583671801366)
    // );
    parkinglotdistances.push({
      name: "Hitt Street Parking Garage",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.947844369844795,
        -92.32578733896105
      ),
      lat: 38.947844369844795,
      long: -92.32578733896105,
    });
    parkinglotdistances.push({
      name: "University Avenue Parking Garage",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.94701658266523,
        -92.32372902846195
      ),
      lat: 38.94701658266523,
      long: -92.32372902846195,
    });
    parkinglotdistances.push({
      name: "Conley Parking Garage",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.94514490207793,
        -92.33158633772024
      ),
      lat: 38.94514490207793,
      long: -92.33158633772024,
    });
    parkinglotdistances.push({
      name: "Turner Avenue Parking Garage",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.94366217039565,
        -92.3306491277232
      ),
      lat: 38.94366217039565,
      long: -92.3306491277232,
    });
    parkinglotdistances.push({
      name: "Virginia Parking Garage",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.93995942051914,
        -92.3245841785612
      ),
      lat: 38.93995942051914,
      long: -92.3245841785612,
    });
    parkinglotdistances.push({
      name: "WG10 Parking Lot",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.944281258458744,
        -92.33191088501378
      ),
      lat: 38.944281258458744,
      long: -92.33191088501378,
    });
    parkinglotdistances.push({
      name: "Memorial Union Visitor Parking Lot",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.94546999814113,
        -92.3241858704455
      ),
      lat: 38.94546999814113,
      long: -92.3241858704455,
    });
    parkinglotdistances.push({
      name: "WC7 Parking Lot",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.94577039208177,
        -92.32654621440473
      ),
      lat: 38.94577039208177,
      long: -92.32654621440473,
    });
    parkinglotdistances.push({
      name: "CG17 Parking Lot",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.941889532937616,
        -92.32941135766158
      ),
      lat: 38.941889532937616,
      long: -92.32941135766158,
    });
    parkinglotdistances.push({
      name: "CG2 Parking Lot",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.94091110831369,
        -92.32426151634915
      ),
      lat: 38.94091110831369,
      long: -92.32426151634915,
    });
    parkinglotdistances.push({
      name: "Virginia Avenue Surface Lot",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.93992641151287,
        -92.3238752782632
      ),
      lat: 38.93992641151287,
      long: -92.3238752782632,
    });
    parkinglotdistances.push({
      name: "WG1 Parking Lot",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.937654,
        -92.331345
      ),
      lat: 38.937654,
      long: -92.331345,
    });
    parkinglotdistances.push({
      name: "Hitt Street Visitor Parking Lot",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.94327220119762,
        -92.32583671801366
      ),
      lat: 38.94327220119762,
      long: -92.32583671801366,
    });
    parkinglotdistances.push({
      name: "Sixth & Cherry Garage",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.9495549,
        -92.3319585
      ),
      lat: 38.9495549,
      long: -92.3319585,
    });
    parkinglotdistances.push({
      name: "WG10",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.9469902,
        -92.3327713
      ),
      lat: 38.9469902,
      long: -92.3327713,
    });
    parkinglotdistances.push({
      name: "RC15",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.9456114,
        -92.3330497
      ),
      lat: 38.9456114,
      long: -92.3330497,
    });
    parkinglotdistances.push({
      name: "RC19",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.9492519,
        -92.3335829
      ),
      lat: 38.9492519,
      long: -92.3335829,
    });
    parkinglotdistances.push({
      name: "RC9",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.9479949,
        -92.3346699
      ),
      lat: 38.9479949,
      long: -92.3346699,
    });
    parkinglotdistances.push({
      name: "RC11",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.9464558,
        -92.3307481
      ),
      lat: 38.9464558,
      long: -92.3307481,
    });
    parkinglotdistances.push({
      name: "CG18",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.9419589,
        -92.3307481
      ),
      lat: 38.9419589,
      long: -92.3307481,
    });
    parkinglotdistances.push({
      name: "WC5",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.9439034,
        -92.327034
      ),
      lat: 38.9439034,
      long: -92.327034,
    });
    parkinglotdistances.push({
      name: "AV8",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.9400889,
        -92.3205019
      ),
      lat: 38.9400889,
      long: -92.3205019,
    });
    parkinglotdistances.push({
      name: "AV11",
      distance: distance(
        pos.coords.latitude,
        pos.coords.longitude,
        38.9399493,
        -92.3199573
      ),
      lat: 38.9399493,
      long: -92.3199573,
    });
    parkinglotdistances.sort((a, b) => a.distance - b.distance);

    const lotinfo = {
      "Hitt Street Parking Garage":
        "Parking restrictions are enforced 7 a.m.-6 p.m., Monday-Friday. <br>*There is a kiosk on the 4th floor that charges $1.25/hour.<br>*The top floor is restricted 24/7.",
      "University Avenue Parking Garage":
        "Parking restrictions are enforced 7 a.m.-6 p.m., Monday-Friday.",
      "Conley Parking Garage":
        "Parking restrictions are enforced 7 a.m.-6 p.m., Monday-Friday.",
      "Turner Avenue Parking Garage":
        "Parking restrictions are enforced 7 a.m.-6 p.m., Monday-Friday.",
      "Virginia Parking Garage":
        "Parking restrictions are enforced 7 a.m.-6 p.m., Monday-Friday.<br>*Floors 4-6 are restricted 24/7.",
      "WG10 Parking Lot":
        "Parking restrictions enforced 7 a.m.-6 p.m., Monday-Friday.<br>*This lot has metered parking during the day.<br>*There is a kiosk that charges $1.25/hour.",
      "Memorial Union Visitor Parking Lot":
        "Parking restrictions enforced 7 a.m.-6 p.m., Monday-Friday.<br>This lot has metered parking during the day.",
      "WC7 Parking Lot":
        "Parking restrictions enforced 7 a.m.-6 p.m., Monday-Friday.<br>This lot has metered parking during the day.<br>There are 14 spaces available.",
      "CG17 Parking Lot":
        "Parking restrictions enforced 7 a.m.-6 p.m., Monday-Friday.<br>This lot has metered parking during the day.<br>There is a kiosk that charges $1.25/hour.",
      "CG2 Parking Lot":
        "Parking restrictions enforced 7 a.m.-6 p.m., Monday-Friday.<br>This lot has metered parking during the day.<br>There is a kiosk that charges $1.25/hour.",
      "Virginia Avenue Surface Lot":
        "Parking restrictions enforced 7 a.m.-6 p.m., Monday-Friday.<br>*This lot has metered parking during the day.<br>*There is a kiosk that charges $1.25/hour.",
      "WG1 Parking Lot":
        "Parking restrictions are enforced 7 a.m.-6 p.m., Monday-Friday.<br>*This lot has metered parking during the day.<br>*There is a kiosk that charges $1.25/h.",
      "Hitt Street Visitor Parking Lot":
        "Parking restrictions enforced 7 a.m.-6 p.m., Monday-Friday.<br>*This lot has metered parking during the day.</body><br>*There is a kiosk that charges $1.25/hour.",
      "Sixth & Cherry Garage":
        "Open 7 Days A Week",
      "WG10":
        "Monday - Friday<br>7:00 am - 6:00 pm",
      "RC15":
        "Monday - Friday<br>7:00 am - 6:00 pm",
      "RC19":
        "Monday - Friday<br>7:00 am - 6:00 pm",
      "RC9":
        "Monday - Friday<br>7:00 am - 6:00 pm",
      "RC11":
        "Monday - Friday<br>7:00 am - 6:00 pm",
      "CG18":
        "Monday - Friday<br>7:00 am - 6:00 pm",
      "WC5":
        "Monday - Friday<br>7:00 am - 6:00 pm",
      "AV8":
        "Monday - Friday<br>7:00 am - 6:00 pm",
      "AV11":
        "Monday - Friday<br>7:00 am - 6:00 pm"
    };
    console.log("checkpoint");
    for (let i = 0; i < parkinglotdistances.length; i++) {
      parkingcards.innerHTML +=
        `<div class="card front card-inverse parkingcards" id="parking-card` +
        i.toString() +
        `">
        <div class="card-img-overlay">
          <h5 class="card-title" style="margin-top: -6px; color: black;">${
            parkinglotdistances[i].name
          }</h5>
          <h6 style="color:black">${parkinglotdistances[i].distance.toFixed(
            2
          )} miles</h6>
          <div style="font-size: 13px;">
            <p class="card-text">${lotinfo[parkinglotdistances[i].name]}</p>
          </div>
        </div>
      </div>`;
    }
    for (let i = 0; i < parkinglotdistances.length; i++) {
      var card = document.getElementById("parking-card" + i.toString());
      card.addEventListener("click", () => {
        console.log("debug");
        map.setZoom(17);
        map.panTo(
          new google.maps.LatLng(
            parkinglotdistances[i].lat,
            parkinglotdistances[i].long
          )
        );
        activateMarker(map, parkinglotdistances[i].name);
      });
    }
  });
}
