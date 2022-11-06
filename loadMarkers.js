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
      { //WG16
        position: new google.maps.LatLng(38.9433534,-92.3324172),
        type: "parking",
        content: new google.maps.InfoWindow({
          content: '<h6 style="font-family">WG16 Parking lot</h6>' + 
          '<b>ASSIGNED STAFF ONLY' +
          '<br>MONDAY - FRIDAY: 7:00 AM - 5:00 PM'
        }),
      },
      { //conley ave garage
        position: new google.maps.LatLng(38.94514490207793, -92.33158633772024),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: '<h6 style="font-family">Conley Parking Garage</h6>' + 
            '<body><br>Parking restrictions are enforced 7 a.m.-6 p.m., Monday-Friday.</body>'
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
            content: 
            '<h6 style="font-family">Ellis Library</h6>' +
            '<body><b>Sunday - Thursday</b>' +
            '<br>12:00 am - 11:59 pm' +
            '<br>Open 24 Hours (MU ID required from 10 pm to 7am)' +
            '<br><b>Friday</b>' +
            '<br>12:00 am - 8:00 pm' +
            '<br><b>Saturday</b>' +
            '<br>9:00 am - 5:00 pm</body>'
          }),
      },
      { // student center
        position: new google.maps.LatLng(38.9427984491364, -92.32667952779617),
        type: "person",
        content: new google.maps.InfoWindow({
            content: 
            '<h6 style="font-family">MU Student Center</h6>' +
            '<body><b>Saturday - Sunday</b>' +
            '<br>9:00 am - 10:00 pm' +
            '<br><b>Monday - Friday</b>' +
            '<br>7:00 am - 10:00 pm</body>'
          }),
      },
      { // memorial union
        position: new google.maps.LatLng(38.945149299022134, -92.32507248098916),
        type: "person",
        content: new google.maps.InfoWindow({
            content: 
            '<h6 style="font-family">Memorial Student Union</h6>' +
            '<body><b>Monday - Friday</b>' +
            '<br>7:00 am - 9:30 pm' +
            '<br><b>Saturday - Sunday</b>' +
            '<br>9:00 am - 9:30 pm</body>'
          }),
      },
      { // MizzouRec
        position: new google.maps.LatLng(38.9414198823737, -92.32644018517845),
        type: "weight",
        content: new google.maps.InfoWindow({
            content: 
            '<h6 style="font-family">MizzouRec</h6>' +
            '<body><b>Monday - Thursday</b>' +
            '<br>5:30 am - 11:00 pm' +
            '<br><b>Friday</b>' +
            '<br>5:30 am - 8:00 pm' +
            '<br><b>Saturday</b>' +
            '<br>8:00 am - 8:00 pm' +
            '<br><b>Sunday</b>' +
            '<br>8:00 am - 11:00 pm</body>'
          }),
      },
      { // 1+5+3 Salads and Soups
        position: new google.maps.LatLng(38.93924968027523, -92.33125830703867),
        type: "food",
        content: new google.maps.InfoWindow({
            content: '<h6 style="font-family">Catalyst Café</h6>' + 
            'Monday - Friday: <br>11:00 AM - 2:00 PM <br>4:00 PM - 6:00 PM'+
            '<br>Saturday - Sunday: CLOSED',
          }),
      },
      { // Baja Grill - all student center
        position: new google.maps.LatLng(38.9426510787062, -92.32677505452564),
        type: "food",
        content: new google.maps.InfoWindow({
            content: '<h6 style="font-family">Bookmark Café</h6>' + 
            'Monday - Wednesday: 10:30 AM - 7:00PM'+
            '<br> Thursday: 10:30 AM - 5:00 PM'+
            '<br> Friday: 10:30 AM - 3:00 PM'+
            '<br>Saturday - Sunday: CLOSED',
          }),
      },
      { // Bookmark Cafe
        position: new google.maps.LatLng(38.94418563384068, -92.32707641542541),
        type: "coffee",
        content: new google.maps.InfoWindow({
            content: '<h6 style="font-family">Bookmark Café</h6>' + 
            'Monday - Wednesday: 7:30 AM - 8:00 PM'+
            '<br> Thursday: 7:30 AM - 3:00 PM'+
            '<br> Friday: 7:30 AM - 2:00 PM'+
            '<br>Saturday - Sunday: CLOSED',
          }),
      },
      { // Catalyst Cafe
        position: new google.maps.LatLng(38.94330054002937, -92.32293193107311),
        type: "coffee",
        content: new google.maps.InfoWindow({
            content: '<h6 style="font-family">Catalyst Café</h6>' + 
            'Monday - Friday: 10:00 AM - 3:00 PM (CLOSED ON WEDNESDAY)'+
            '<br>Saturday - Sunday: CLOSED',
          }),
      },
      { // Plaza
        position: new google.maps.LatLng(38.940941083043825, -92.32290955015037),
        type: "food",
        content: new google.maps.InfoWindow({
            content: '<h6 style="font-family">Plaza 900 Dining</h6>' + 
            'Monday - Friday: <br>10:30 AM - 2:30 PM (Lunch)'+
            '<br>4:30 PM - 8:00 PM (Dinner)'+
            '<br>Saturday - Sunday: CLOSED',
          }),
      },
      { // Emporium
        position: new google.maps.LatLng(38.94095410407053, -92.32245364405318),
        type: "coffee",
        content: new google.maps.InfoWindow({
            content: '<h6 style="font-family">Emporium</h6>' + 
            'Monday - Friday: 7:00 AM - 9:00 PM'+
            '<br>Saturday - Sunday: 12:00 PM - 9:00 PM',
          }),
      },
      { // Potential Energy Cafe
        position: new google.maps.LatLng(338.94620620812609, -92.32899852793562),
        type: "coffee",
        content: new google.maps.InfoWindow({
            content: '<h6 style="font-family">Potential Energy Cafe</h6>' + 
            'Monday - Friday: 7:45 AM - 1:30 PM'+
            '<br>Saturday - Sunday: CLOSED',
          }),
      },
      { // Pizza/Breakfast @ MO
        position: new google.maps.LatLng(38.94187223621653, -92.3230511498501),
        type: "food",
        content: new google.maps.InfoWindow({
            content: '<h6 style="font-family">Pizza/Breakfast & MO</h6>' + 
            '<br>Breakfast/Brunch:<br>Monday - Friday:7:00 AM - 10:15 AM<br>Saturday - Sunday:8:30 AM - 1:00 PM'+
            '<br>Dinner:<br>Monday - Friday: 11:00 AM - 9:00 PM <br>Saturday - Sunday: 3:00 PM - 9:00 PM',
          }),
      },
      { // Sabai
        position: new google.maps.LatLng(38.94196266974219, -92.32443162448779),
        type: "food",
        content: new google.maps.InfoWindow({
            content: 
            '<h6 style="font-family">Sabai</h6>' +
            '<br><b>Monday - Saturday</b>' +
            '<br>11:00 am - 9:00 pm' +
            '<br><b>Sunday</b>' +
            '<br>CLOSED</body>'
          }),
      },
      { // Starbucks Memorial
        position: new google.maps.LatLng(38.94529518466892, -92.32498666728256),
        type: "coffee",
        content: new google.maps.InfoWindow({
            content: 
            '<h6 style="font-family">Starbucks - Memorial Union</h6>' +
            '<body><b>Monday - Wednesday</b>' +
            '<br>7:00 am - 8:00 pm' + 
            '<br><b>Thursday</b>' + 
            '<br>7:00 am - 6:00 pm' +
            '<br><b>Friday</b>' +
            '<br>7:00 am - 5:00 pm' +
            '<br><b>Saturday - Sunday</b>' +
            '<br>10:00 am - 2:00 pm</body>'
          }),
      },
      { // Starbucks Southwest
        position: new google.maps.LatLng(38.938938, -92.332457),
        type: "coffee",
        content: new google.maps.InfoWindow({
            content: 
            '<h6 style="font-family">Starbucks - Southwest</h6>' +
            '<body><b>Monday - Wednesday</b>' + '<br>8:00 am - 8:00 pm' +
            '<br><b>Thursday - Friday</b>' + '<br>8:00 am - 5:00 pm' +
            '<br><b>Saturday</b>' + '<br>10:00 am - 2:00 pm' +
            '<br><b>Sunday</b>' + '<br>12:00 pm - 8:00 pm</body>'
          }),
      },
      { // Wheatstone
        position: new google.maps.LatLng(38.94530588977804, -92.325211),
        type: "food",
        content: new google.maps.InfoWindow({
            content: 
            '<h6 style="font-family">Wheatstone</h6>' +
            '<body><b>Monday - Friday</b>' + '<br>9:00 am - 1:30 pm' +
            '<br><b>Saturday - Sunday</b>' + '<br>CLOSED</body>'
          }),
      },
      { // The Mark
        position: new google.maps.LatLng(38.94498218741994, -92.33246610226834),
        type: "food",
        content: new google.maps.InfoWindow({
            content: 
            '<h6 style="font-family">The Mark</h6>' +
            '<body><b>Monday - Thursday</b>' + '<br>7:15 am - 10:00 am (Breakfast)' + '<br>11:00 am - 2:00 pm (Lunch)' + '<br>5:00 pm - 9:30 pm (Dinner)</body>' +
            '<br><b>Friday</b>' + '<br>7:15 am - 10:00 am (Breakfast)' + '<br>11:00 am - 2:00 pm (Lunch)' + '<br>5:00 pm - 7:00 pm (Dinner)</body>' +
            '<br><b>Saturday</b>' + '<br>11:00 am - 4:00 pm (Lunch)' + 
            '<br><b>Sunday</b>' + '<br>11:00 am - 2:00 pm (Lunch)' + '<br>5:00 pm - 7:30 pm (Dinner)</body>'
          }),
      },
      { // mizzou mart southwest
        position: new google.maps.LatLng(38.939194355395756, -92.33251343790602),
        type: "shop",
        content: new google.maps.InfoWindow({
            content: 
            '<h6 style="font-family">Mizzou Market - Southwest</h6>' +
            '<body><b>Monday - Friday</b>' + '<br>9:00 am - 11:00 pm' + 
            '<br><b>Saturday - Sunday</b>' + '<br>11:00 am - 11:00 pm</body>'
          }),
      },
      { // mizzou mart hitt
        position: new google.maps.LatLng(38.9397704505007, -92.32550039911034),
        type: "shop",
        content: new google.maps.InfoWindow({
            content: 
            '<h6 style="font-family">Mizzou Market - Hitt Street</h6>' + 
            '<body><b>Monday - Friday</b>' + '<br>7:30 am - 11:00 pm' +
            '<br><b>Saturday - Sunday</b>' + '<br>11:00 am - 11:00 pm</body>'
          }),
      },
      { // subway hitt
        position: new google.maps.LatLng(38.9398131537622, -92.32570386921351),
        type: "food",
        content: new google.maps.InfoWindow({
            content: 
            '<h6 style="font-family">Subway - Hitt Street</h6>' +
            '<body><b>Monday - Friday</b>' + '<br>9:00 am - 8:00 pm' +
            '<br><b>Saturday - Sunday</b>' + '<br>11:00 am - 8:00 pm</body>'
        }),
      },
      { // southwest subway
        position: new google.maps.LatLng(38.9389588333966, -92.33309603721887),
        type: "food",
        content: new google.maps.InfoWindow({
            content: 
            '<h6 style="font-family">Subway - Southwest</h6>' +
            '<body><b>Monday - Sunday</b>' + '<br>11:00 am - 11:00 pm</body>'
          }),
      },
      { // Sixth & Cherry Garage
        position: new google.maps.LatLng(38.9495549,-92.3319585),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 
            '<h6 style="font-family">Sixth & Cherry Garage</h6>' +
            '<b>Open 7 Days A Week</b>'
          }),
      },
      { // WG10
        position: new google.maps.LatLng(38.9469902,-92.3327713),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 
            '<h6 style="font-family">RC11 Parking Lot</h6>' +
            '<body><b>Monday - Friday</b>' + '<br>7:00 am - 6:00 pm</body>'
          }),
      },
      //PARKING TIMES NOT CONFIRMED



      { // RC19
        position: new google.maps.LatLng(38.9492519,-92.3335829),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 
            '<h6 style="font-family">RC19 Parking Lot</h6>' +
            '<body><b>Monday - Friday</b>' + '<br>7:00 am - 6:00 pm</body>'
          }),
      },
      { // RC9
        position: new google.maps.LatLng(38.9479949,-92.3346699),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 
            '<h6 style="font-family">RC9 Parking Lot</h6>' +
            '<body><b>Monday - Friday</b>' + '<br>7:00 am - 6:00 pm</body>'
          }),
      },
      { // RC11
        position: new google.maps.LatLng(38.9464558,-92.3358569),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 
            '<h6 style="font-family">RC11 Parking Lot</h6>' +
            '<body><b>Monday - Friday</b>' + '<br>7:00 am - 6:00 pm</body>'
          }),
      },
      { // CG18
        position: new google.maps.LatLng(38.9419589,-92.3307481),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 
            '<h6 style="font-family">CG18 Parking Lot</h6>' +
            '<body><b>Monday - Friday</b>' + '<br>7:00 am - 6:00 pm</body>'
          }),
      },
      { // WC5
        position: new google.maps.LatLng(38.9439034,-92.327034),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 
            '<h6 style="font-family">WC5 Parking Lot</h6>' +
            '<body><b>Monday - Friday</b>' + '<br>7:00 am - 6:00 pm</body>'
          }),
      },
      { // AV8
        position: new google.maps.LatLng(38.9400889,-92.3205019),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 
            '<h6 style="font-family">AV8 Parking Lot</h6>' +
            '<body><b>Monday - Friday</b>' + '<br>7:00 am - 6:00 pm</body>'
          }),
      },
      { // AV11
        position: new google.maps.LatLng(38.9399493,-92.3199573),
        type: "parking",
        content: new google.maps.InfoWindow({
            content: 
            '<h6 style="font-family">AV11 Parking Lot</h6>' +
            '<body><b>Monday - Friday</b>' + '<br>7:00 am - 6:00 pm</body>'
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