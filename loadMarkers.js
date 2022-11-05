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
      { // ellis library
        position: new google.maps.LatLng(38.94440674595565, -92.32616446602765),
        type: "library",
      },
      { // student center
        position: new google.maps.LatLng(38.9427984491364, -92.32667952779617),
        type: "person",
      },
      { // memorial union
        position: new google.maps.LatLng(38.945149299022134, -92.32507248098916),
        type: "person",
      },
      { // MizzouRec
        position: new google.maps.LatLng(38.9414198823737, -92.32644018517845),
        type: "weight",
      },
      { // 1+5+3 Salads and Soups
        position: new google.maps.LatLng(38.93924968027523, -92.33125830703867),
        type: "food",
      },
    //   { // 1839 kitchen
    //     position: new google.maps.LatLng(38.935014592812695, -92.33163521363811),
    //     type: "food",
    //   },
      { // Baja Grill - all student center
        position: new google.maps.LatLng(38.9426510787062, -92.32677505452564),
        type: "food",
      },
      { // Bookmark Cafe
        position: new google.maps.LatLng(38.94418563384068, -92.32707641542541),
        type: "coffee",
      },
      { // Catalyst Cafe
        position: new google.maps.LatLng(38.94330054002937, -92.32293193107311),
        type: "coffee",
      },
    //   { // Do Mundo's
    //     position: new google.maps.LatLng(38.94291340398343, -92.32630872978697),
    //     type: "food",
    //   },
      { // Plaza
        position: new google.maps.LatLng(38.940941083043825, -92.32290955015037),
        type: "food",
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
      },
      { // Potential Energy Cafe
        position: new google.maps.LatLng(338.94620620812609, -92.32899852793562),
        type: "coffee",
      },
      { // Pizza/Breakfast @ MO
        position: new google.maps.LatLng(38.94187223621653, -92.3230511498501),
        type: "food",
      },
      { // Sabai
        position: new google.maps.LatLng(38.94196266974219, -92.32443162448779),
        type: "food",
      },
      { // Starbucks Memorial
        position: new google.maps.LatLng(38.94529518466892, -92.32498666728256),
        type: "coffee",
      },
      { // Starbucks Southwest
        position: new google.maps.LatLng(38.938938, -92.332457),
        type: "coffee",
      },
      { // Wheatstone
        position: new google.maps.LatLng(38.94530588977804, -92.325211),
        type: "food",
      },
      { // The Mark
        position: new google.maps.LatLng(38.94512195516211, -92.33162925306914),
        type: "food",
      },
      { // mizzou mart southwest
        position: new google.maps.LatLng(38.939194355395756, -92.33251343790602),
        type: "shop",
      },
      { // mizzou mart hitt
        position: new google.maps.LatLng(38.9397704505007, -92.32550039911034),
        type: "shop",
      },
      { // subway hitt
        position: new google.maps.LatLng(38.9398131537622, -92.32570386921351),
        type: "food",
      },
      { // southwest subway
        position: new google.maps.LatLng(38.9389588333966, -92.33309603721887),
        type: "food",
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
  