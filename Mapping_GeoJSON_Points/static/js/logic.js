
// let cityData = cities;

// // STEP 0: Grab the data...!
// console.log(cityData);
// STEP 4 = INIT THE MAP
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);


// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       //.bindPopup("<h2>" + feature.properties.city + "</h2>");
//        .bindPopup("<h3>" + feature.properties.name + "</h3><hr><h2>"+feature.properties.city+", "+feature.properties.country+"</h2>");
//     }

//   }).addTo(map);

L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup("<h3>" + feature.properties.name + "</h3><hr><h2>"+feature.properties.city+", "+feature.properties.country+"</h2>");
     }
}).addTo(map);



var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
// cityData.forEach(function(city){
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/100000,
//         color:"orange",
//         fillColor:'#ffffa1'

//     })
//     .bindPopup("<h2>"+city.city+","+city.state+"</h2><hr><h3>Population "+city.population.toLocaleString()+ "</h3>")
//     .addTo(map);
// });









  