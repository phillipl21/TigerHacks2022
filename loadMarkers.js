function hideAllInfoWindows(map, markers)
{
    markers.forEach(function(marker) {
        marker.infowindow.close(map, marker);
    });
}

export function loadMarkers(map) {
    const iconBase =
      "./icons/";
  
    const icons = {
      parking: {
        icon: iconBase + "parking2.png",
      },
      library: {
        icon: iconBase + "book1.png",
      },
      food: {
        icon: iconBase + "utensils1.png",
      },
      person: {
        icon: iconBase + "person1.png",
      },
      weight: {
        icon: iconBase + "weight1.png",
      },
      shop: {
        icon: iconBase + "shop1.png",
      },
      coffee: {
        icon: iconBase + "coffee.png",
      },
    };
  
    const features = [
      { //hitt street
        position: new google.maps.LatLng(38.947844369844795, -92.32578733896105),
        type: "parking",
        content: new google.maps.InfoWindow({
          content: 'Test content',
        }),
      },
      { //university avenue garage
        position: new google.maps.LatLng(38.94701658266523, -92.32372902846195),
        type: "parking",
        content: new google.maps.InfoWindow({
          content: 'Test content',
        }),
      },
      { //conley ave garage
        position: new google.maps.LatLng(38.94538529005281, -92.33150207017896),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { //turner ave garage
        position: new google.maps.LatLng(38.94366217039565, -92.3306491277232),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { //tiger ave garage
        position: new google.maps.LatLng(38.93831466093758, -92.33017375768632),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { //virginia avenue garage
        position: new google.maps.LatLng(38.93995942051914, -92.3245841785612),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { //parking structure #7
        position: new google.maps.LatLng(38.93708661633961, -92.32506965841958),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { //parking structure #7
        position: new google.maps.LatLng(38.93708661633961, -92.32506965841958),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { //WG10 - near Twain
        position: new google.maps.LatLng(38.94454794767063, -92.33127226676486),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { //Memorial Union Visitor Lot
        position: new google.maps.LatLng(38.94546999814113, -92.3241858704455),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { //WC7 - near Middlebush
        position: new google.maps.LatLng(38.94577039208177, -92.32654621440473),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { //CG17 - between SC & Stank
        position: new google.maps.LatLng(38.941889532937616, -92.32941135766158),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { //CG2 - black culture center
        position: new google.maps.LatLng(38.94091110831369, -92.32426151634915),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { //VAG Surface Parking
        position: new google.maps.LatLng(38.93992641151287, -92.3238752782632),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { //Southwest Athletic lot
        position: new google.maps.LatLng(38.937654, -92.331345),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { //SC / Hitt Street visitor lot
        position: new google.maps.LatLng(38.94327220119762, -92.32583671801366),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { // ellis library
        position: new google.maps.LatLng(38.94440674595565, -92.32616446602765),
        type: "library",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { // student center
        position: new google.maps.LatLng(38.9427984491364, -92.32667952779617),
        type: "person",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { // memorial union
        position: new google.maps.LatLng(38.945149299022134, -92.32507248098916),
        type: "person",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { // MizzouRec
        position: new google.maps.LatLng(38.9414198823737, -92.32644018517845),
        type: "weight",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { // 1+5+3 Salads and Soups
        position: new google.maps.LatLng(38.93924968027523, -92.33125830703867),
        type: "food",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
    //   { // 1839 kitchen
    //     position: new google.maps.LatLng(38.935014592812695, -92.33163521363811),
    //     type: "food",
    //   },
      { // Baja Grill - all student center
        position: new google.maps.LatLng(38.9426510787062, -92.32677505452564),
        type: "food",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { // Bookmark Cafe
        position: new google.maps.LatLng(38.94418563384068, -92.32707641542541),
        type: "coffee",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { // Catalyst Cafe
        position: new google.maps.LatLng(38.94330054002937, -92.32293193107311),
        type: "coffee",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
    //   { // Do Mundo's
    //     position: new google.maps.LatLng(38.94291340398343, -92.32630872978697),
    //     type: "food",
    //   },
      { // Plaza
        position: new google.maps.LatLng(38.940941083043825, -92.32290955015037),
        type: "food",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
    //   { // infusion
    //     position: new google.maps.LatLng(38.94236548814668, -92.32661017897087),
    //     type: "coffee",
    //   },
    //   { // Legacy Grill38.94528085683478, -92.32466152184817
    //     position: new google.maps.LatLng(38.931014592812695, -92.33133521363811),
    //     type: "food",
    //},
    //   { // Mort's
    //     position: new google.maps.LatLng(38.942990525467316, -92.32735117528374),
    //     type: "food",
    //   },
    //   { // Olive and Oil
    //     position: new google.maps.LatLng(38.939140, -92.332604),
    //     type: "food",
    //   },
      { // Emporium
        position: new google.maps.LatLng(38.94095410407053, -92.32245364405318),
        type: "coffee",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { // Potential Energy Cafe
        position: new google.maps.LatLng(338.94620620812609, -92.32899852793562),
        type: "coffee",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { // Pizza/Breakfast @ MO
        position: new google.maps.LatLng(38.94187223621653, -92.3230511498501),
        type: "food",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { // Sabai
        position: new google.maps.LatLng(38.94196266974219, -92.32443162448779),
        type: "food",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { // Starbucks Memorial
        position: new google.maps.LatLng(38.94529518466892, -92.32498666728256),
        type: "coffee",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { // Starbucks Southwest
        position: new google.maps.LatLng(38.938938, -92.332457),
        type: "coffee",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { // Wheatstone
        position: new google.maps.LatLng(38.94530588977804, -92.325211),
        type: "food",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { // The Mark
        position: new google.maps.LatLng(38.94512195516211, -92.33162925306914),
        type: "food",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { // mizzou mart southwest
        position: new google.maps.LatLng(38.939194355395756, -92.33251343790602),
        type: "shop",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { // mizzou mart hitt
        position: new google.maps.LatLng(38.9397704505007, -92.32550039911034),
        type: "shop",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { // subway hitt
        position: new google.maps.LatLng(38.9398131537622, -92.32570386921351),
        type: "food",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
      { // southwest subway
        position: new google.maps.LatLng(38.9389588333966, -92.33309603721887),
        type: "food",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
    ];
    
    var markers = [];

    //creates all the markers and their info windows
    for (let i = 0; i < features.length; i++) {
      const marker = new google.maps.Marker({
        position: features[i].position,
        icon: icons[features[i].type].icon,
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
    google.maps.event.addListener(map, "click", function(event) {
        hideAllInfoWindows(map, markers);
        });
    }
  }
  