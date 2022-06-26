# Mapping_Earthquakes
Using the data from the GeoJSON file, populate a geographical map using Javascript, D3, Leaflet Libraries, and the Mapbox API.<br>

## Overview of the Analysis
Creating interactive maps that are easy to use is an essential skill in the Data visualization field. Maps allow us to understand and explore and make decisions about our world. We will use GeoJSON, a JSON file type, in this analysis. It is specifically designed to host geographical information.GeoJSON data can be found in many apps that have mapping features like ride-sharing, navigation and food, and package delivery services. Even the smartphone apps that allow us to track our location can store and use GeoJSON data.<br>
The GeoJSON format is the industry standard for representing simple geographical features and non-spatial attributes. We explore geographical features such as Points that contain addresses and locations like latitude and longitude co-ordinates. Line Strings have co-ordinates for the boundaries of streets, highways, travel routes, and tectonic plates. Polygons contain co-ordinates for the boundaries of zipcodes,counties,countries,provinces and tracts of land.We will also explore non-spatial attributes, which are data independent of all geometric considerations and packed in the hierarchical structure of a GeoJSON file. Examples include elevation, temperature, rain accumulation, hail size, tornado or hurricane strength, and the magnitude of an earthquake.<br>

## Purpose of the Analysis
We will traverse and retrieve GeoJSON earthquake data and tectonic plate data from the USGS website and populate the data on the map using Javascript, D3, Leaflet, and MapBox API. On the map, the magnitude and location of each earth quake will be shown in a pop-up marker. The diameters of the markers for each earthquake reflect the earth quake's magnitude in size and color. Earthquakes with higher magnitude will appear larger and darker in color, with a legend providing the context for our map data. To illustrate the relationship between the location and frequency of seismic activity and tectonic plates. We will add fault lines on the map.<br>

## Resources Used
*DataSources*: [Earthquakes GeoJSON](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson), [Earthquakes above 4.5mag GeoJSON](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson), [Tectonic Plate GeoJSON](https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json)<br>
*Software used*: HTML,CSS,Leaflet library,D3.js Library.<br>
*Language*: JavaScript. <br>
The Mapping Earthquake data is deployed on the Github page: https://fathi129.github.io/Earthquakes/ <br>

## Deliverable 1: Add Tectonic Plate Data
Using the knowledge of JavaScript, Leaflet.js, and geoJSON data,we will add tectonic plate data using d3.json(), and the geoJSON() layer,the tectonic plate LineString data is set to stand out on the map, and the tectonic plate data is added to the overlay object with the earthquake data. We will create a layer group variable for tectonic plate data, the reference of the tectonic plate data is added to the overlay object. Using d3.json() callback method, a call is made to the tectonic plate data using the GeoJSON/PB2002_boundaries.json data from this GitHub repository. The tectonic plate data is passed to the geoJSON() layer, Styled the lines with color and weight that will make it stand out on all maps. The tectonic layer group variable we created is added to the map, i.e., addTo(tectonicPlates) and the geoJSON() layer is closed.Next,the tectonic layer group variable is added to the map, i.e, tectonicPlates.addTo(map).Finally, we need to close the d3.json() callback. Bu Starting our Python server and launching the index.html file, the map with the earthquake and tectonic plate data is displayed, similar to the following image.<br>

<img src = "https://github.com/fathi129/Mapping_Earthquakes/blob/master/Screenshots%20Mapping_earthquake/tectonic_data.png"  width = 800><br>

## Deliverable 2: Add Major Earthquake Data 
The major earthquake data is added to the map using d3.json(). We will add color, set the radius of the circle markers based on the earthquake's magnitude, and add a pop-up marker for each earthquake that displays the magnitude and location of the earthquake using the GeoJSON layer, geoJSON().
The third layer group variable for the major earthquake data is created,a reference to the major earthquake data is added to the overlay object. using the d3.json() callback method, a call is made to the major earthquake data from the GeoJSON Summary Feed for M4.5+ Earthquakes for the Past 7 Days. using the functions like styleInfo(),getColor(),getRadius(),the circle markers are styled with color and magnitude of earth quake. Pop-up for the circle to display the magnitude and location of the earthquake is created.The major earthquake layer group variable is added to the map, i.e., .addTo(majorEarthQuake) and then the geoJSON() layer is closed.Then,the major earthquake layer group variable is added to the map, i.e, majorEarthQuake.addTo(map), and then the d3.json() callback method is closed. By starting the Python server and launching the index.html file the map with the two earthquake data sets and tectonic plate data similar to the following image is generated.<br>

<img src = "https://github.com/fathi129/Mapping_Earthquakes/blob/master/Screenshots%20Mapping_earthquake/Major_Earthquakes.png"  width = 800><br>
<img src = "https://github.com/fathi129/Mapping_Earthquakes/blob/master/Screenshots%20Mapping_earthquake/Majorearth_popup.png"  width = 800><br>

## Deliverable 3: Add an Additional Map
Using the options from the Mapbox styles,a third map style as a tile layer object is added, the dark map style variable is added to the base layer object. By starting the Python server and launching the index.html file, a map similar to the following image is generated. There are three map styles,such as Streets,Satellite,Dark and displays the two earthquake data sets and the tectonic plate data.<br>
<img src = "https://github.com/fathi129/Mapping_Earthquakes/blob/master/Screenshots%20Mapping_earthquake/dark_Layer.png"  width = 800><br>







