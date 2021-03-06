
let cityData = cities;

// STEP 0: Grab the data...!
console.log(cityData);

// STEP 4 = INIT THE MAP
let map = L.map('mapid').setView([40.7, -94.5], 4);

var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
cityData.forEach(function(city){
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000,
        color:"orange",
        fillColor:'#ffffa1'

    })
    .bindPopup("<h2>"+city.city+","+city.state+"</h2><hr><h3>Population "+city.population.toLocaleString()+ "</h3>")
    .addTo(map);
});









  
