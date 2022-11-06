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
          content: '<h6 style="font-family">Hitt Street Parking Garage</h6>' + 
          '<body><b>Parking restrictions are enforced 7 a.m.-6 p.m., Monday-Friday.' +
          '<br>*There is a kiosk on the 4th floor that charges $1.25/hour.' +
          '<br>*The top floor is restricted 24/7.</b></body>'
        }),
      },
      { //university avenue garage
        position: new google.maps.LatLng(38.94701658266523, -92.32372902846195),
        type: "parking",
        content: new google.maps.InfoWindow({
          content: '<h6 style="font-family">University Avenue Parking Garage</h6>' + 
          '<body><b>Parking restrictions are enforced 7 a.m.-6 p.m., Monday-Friday.</body>'
        }),
      },
      { //conley ave garage
        position: new google.maps.LatLng(38.94514490207793, -92.33158633772024),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: '<h6 style="font-family">Conley Parking Garage</h6>' + 
            '<body><b>Parking restrictions are enforced 7 a.m.-6 p.m., Monday-Friday.</body>'
          }),
      },
      { //turner ave garage
        position: new google.maps.LatLng(38.94366217039565, -92.3306491277232),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: '<h6 style="font-family">Turner Avenue Parking Garage</h6>' + 
            '<body><b>Parking restrictions are enforced 7 a.m.-6 p.m., Monday-Friday.</body>'
          }),
      },
      { //virginia avenue garage
        position: new google.maps.LatLng(38.93995942051914, -92.3245841785612),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: '<h6 style="font-family">Virginia Parking Garage</h6>' + 
            '<body><b>Parking restrictions are enforced 7 a.m.-6 p.m., Monday-Friday.' +
            '<br>*Floors 4-6 are restricted 24/7.</b></body>'
            }),
      },
      { //WG10 - near Twain
        position: new google.maps.LatLng(38.944281258458744, -92.33191088501378),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: '<h6 style="font-family">WG10 Parking Lot</h6>' + 
            '<body><b>Parking restrictions enforced 7 a.m.-6 p.m., Monday-Friday.' +
            '<br>*This lot has metered parking during the day.' +
            '<br>*There is a kiosk that charges $1.25/hour.</body>'
          }),
      },
      { //Memorial Union Visitor Lot
        position: new google.maps.LatLng(38.94546999814113, -92.3241858704455),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: '<h6 style="font-family">Memorial Union Visitor Parking Lot</h6>' + 
            '<body><b>Parking restrictions enforced 7 a.m.-6 p.m., Monday-Friday.' +
            '<br>This lot has metered parking during the day.</body>'
          }),
      },
      { //WC7 - near Middlebush
        position: new google.maps.LatLng(38.94577039208177, -92.32654621440473),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: '<h6 style="font-family">WC7 Parking Lot</h6>' + 
            '<body><b>Parking restrictions enforced 7 a.m.-6 p.m., Monday-Friday.' +
            '<br>This lot has metered parking during the day.' +
            '<br>There are 14 spaces available.</body>'
          }),
      },
      { //CG17 - between SC & Stank
        position: new google.maps.LatLng(38.941889532937616, -92.32941135766158),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: '<h6 style="font-family">CG17 Parking Lot</h6>' + 
            '<body><b>Parking restrictions enforced 7 a.m.-6 p.m., Monday-Friday.' +
            '<br>This lot has metered parking during the day.' +
            '<br>There is a kiosk that charges $1.25/hour.</body>'
          }),
      },
      { //CG2 - black culture center
        position: new google.maps.LatLng(38.94091110831369, -92.32426151634915),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: '<h6 style="font-family">CG2 Parking Lot</h6>' + 
            '<body><b>Parking restrictions enforced 7 a.m.-6 p.m., Monday-Friday.' +
            '<br>This lot has metered parking during the day.' +
            '<br>There is a kiosk that charges $1.25/hour.</body>'
          }),
      },
      { //VAG Surface Parking
        position: new google.maps.LatLng(38.93992641151287, -92.3238752782632),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: '<h6 style="font-family">Virginia Avenue Surface Lot</h6>' + 
            '<body><b>Parking restrictions enforced 7 a.m.-6 p.m., Monday-Friday.' +
            '<br>*This lot has metered parking during the day.' +
            '<br>*There is a kiosk that charges $1.25/hour.</body>'
          }),
      },
      { //Southwest Athletic lot WG1
        position: new google.maps.LatLng(38.937654, -92.331345),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: '<h6 style="font-family">WG1 Parking Lot</h6>' + 
            '<body><b>Parking restrictions are enforced 7 a.m.-6 p.m., Monday-Friday.' +
            '<br>*This lot has metered parking during the day.' +
            '<br>*There is a kiosk that charges $1.25/h.</body>'
          }),
      },
      { //Hitt Street visitor lot
        position: new google.maps.LatLng(38.94327220119762, -92.32583671801366),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: '<h6 style="font-family">Hitt Street Visitor Parking Lot</h6>' + 
            '<body><b>Parking restrictions enforced 7 a.m.-6 p.m., Monday-Friday.' +
            '<br>*This lot has metered parking during the day.</body>' +
            '<br>*There is a kiosk that charges $1.25/hour.</body>'
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
      { // Plaza
        position: new google.maps.LatLng(38.940941083043825, -92.32290955015037),
        type: "food",
        content: new google.maps.InfoWindow({
            content: 'Test content',
          }),
      },
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
        position: new google.maps.LatLng(38.94498218741994, -92.33246610226834),
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
  