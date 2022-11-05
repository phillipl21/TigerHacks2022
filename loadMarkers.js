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
        position: new google.maps.LatLng(38.93831466093758, -92.33017375768632),
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
      { //parking structure #7
        position: new google.maps.LatLng(38.93708661633961, -92.32506965841958),
        type: "parking",
      },
      { //WG10 - near Twain
        position: new google.maps.LatLng(38.94454794767063, -92.33127226676486),
        type: "parking",
      },
      { //Memorial Union Visitor Lot
        position: new google.maps.LatLng(38.94546999814113, -92.3241858704455),
        type: "parking",
      },
      { //WC7 - near Middlebush
        position: new google.maps.LatLng(38.94577039208177, -92.32654621440473),
        type: "parking",
      },
      { //CG17 - between SC & Stank
        position: new google.maps.LatLng(38.941889532937616, -92.32941135766158),
        type: "parking",
      },
      { //CG2 - black culture center
        position: new google.maps.LatLng(38.94091110831369, -92.32426151634915),
        type: "parking",
      },
      { //VAG Surface Parking
        position: new google.maps.LatLng(38.93992641151287, -92.3238752782632),
        type: "parking",
      },
      { //Southwest Athletic lot
        position: new google.maps.LatLng(38.937654, -92.331345),
        type: "parking",
      },
      { //SC / Hitt Street visitor lot
        position: new google.maps.LatLng(38.94327220119762, -92.32583671801366),
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
  