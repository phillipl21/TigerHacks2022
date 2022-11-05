export function loadMarkers(map) {
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
      { //hitt street
        position: new google.maps.LatLng(38.947844369844795, -92.32578733896105),
        type: "parking",
      },
      { //university avenue garage
        position: new google.maps.LatLng(38.94701658266523, -92.32372902846195),
        type: "parking",
      },
      { //conley ave garage
        position: new google.maps.LatLng(38.94538529005281, -92.33150207017896),
        type: "parking",
      },
      { //turner ave garage
        position: new google.maps.LatLng(38.94366217039565, -92.3306491277232),
        type: "parking",
      },
      { //tiger ave garage
        position: new google.maps.LatLng(38.93882162105329, -92.32788552293911),
        type: "parking",
      },
      { //virginia avenue garage
        position: new google.maps.LatLng(38.93995942051914, -92.3245841785612),
        type: "parking",
      },
      { //parking structure #7
        position: new google.maps.LatLng(38.93708661633961, -92.32506965841958),
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
  