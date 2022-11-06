# TigerHacks2022

Visit TiGo @ https://tigo-45525.web.app

TiGo is a web app that makes public transportation, parking details, and facility/dining hour information more easily accessible to MU students. TiGo focuses on a clean, modern UI and easy-to-navigate map. TiGo also has the ability to receive live updates from users about problems like traffic hazards, crimes, and other incidents.

What files do:
parkingdistance.js: Runs the parking lot distance calculations with HTML Geolocation API to generate a sorted by distance list of parking lots. 
asdf
firebase.js/. oadReports.js: Works with our Google Firebase database to load and update our reports. 
loadMarkers.js/highlightRoutes.js: Utilizes the Google Maps API to call functions that work with our bus routes and necessary locations for all of the facilities and buildings. 
weather.js: Utilizes OpenWeather API to get the temperature/weather at the given time and display it. 
calculateArrivals.js: Runs algorithm to calculate and display the soonest bus stop for each bus route. 
