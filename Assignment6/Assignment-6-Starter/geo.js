var map;
var markers = [];
var polygons = [];
var temp = [];

//Runs when page is done loading
function initialize() {
    console.log($('#volcanoes').is(':checked'));
    console.log($('#earthquakes').is(':checked'));
    
    //Javascript object to help configure google map.
    var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(39.707, -101.503),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    //Create google map, place it in 'map-canvas' element, and use 'mapOptions' to 
    //help configure it
    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

    //Add the "click" event listener to the map, so we can capture
    //lat lon from a google map click.
    google.maps.event.addListener(map, "click", function(event) {
        var lat = event.latLng.lat();
        var lng = event.latLng.lng();

        console.log("lat: " + lat);
        console.log("lng: " + lng);
        
        //console.log("Volcanoes: " + $('#volcanoes').is(':checked'));
        //console.log("Earthquakes: " + $('#earthquakes').is(':checked'));        

        var echecked = $('#earthquakes').is(':checked');
        var vchecked = $('#volcanoes').is(':checked');

        var PostData = {
            lat:lat, 
            lng:lng , 
            earthQuakes: echecked , 
            volcanoes:vchecked
        }

        $.post("backend.php", PostData)
            .done(function( data ) {
                //data = JSON.parse(data);
                deleteMarkers();
                var obj = data;
                for (var i in obj){
                    switch(obj[i].Type){
                        case "MultiPolygon":
                            addMultiPolygon(obj[i].Coordinates);
                            break;
                        case "Polygon":
                            addPolygon(obj[i].Coordinates,HexColor());
                            break;
                        case "LineString ":
                            addLine(obj[i].Coordinates);
                            break;
                        case "Point":
                            addPoint(obj[i].Coordinates);
                            break;
                    }
                }
            });
    });  

}

function addMultiPolygon(obj){
    
    color = HexColor();

    for (var i in obj){
        addPolygon(obj[i],color);
    }
    
}

function addPolygon(obj,Color) {
    
    console.log("Polygon: ");
    console.log(obj);
    console.log(obj.length);  
    
    var PolyCoords = [];
    
    for (var i in obj){
        for(var j=0;j<obj[i].length;j++){
            var latlng = new google.maps.LatLng(obj[i][j][1],obj[i][j][0]);
            PolyCoords.push(latlng);
        }
    }

    var polygon = new google.maps.Polygon({
        paths: PolyCoords,
        title: obj.fullname,
        fillColor: Color,
        fillOpacity: 0.2,
        strokeWeight: 2,
        strokeColor: Color,
        map: map
    });

    polygons.push(polygon); //Add polygon to global array of polygons
    
}

function addLine(obj){

  var mapOptions = {
    zoom: 5,
    center: new google.maps.LatLng(0, -180),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // line string
	
	 var flightPlanCoordinates = [
    new google.maps.LatLng(33.546, -122.546),
    new google.maps.LatLng(19.291982, -147.821856),
    new google.maps.LatLng(-10.159679, 170.219),
    new google.maps.LatLng(-23.45746, 157.125892)
  ];

  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);
    
}
google.maps.event.addDomListener(window, 'load', initialize);

function addPoint(obj) {
    
	//console.log(obj[0]);
	
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(obj[1],obj[0]),
        //title: obj.fullname,
        map: map
    });
    markers.push(marker); //Add marker to global array of markers
	
	// line string
	
	 var flightPlanCoordinates = [
    new google.maps.LatLng(37.172109, -122.249180),
    new google.maps.LatLng(19.291982, -147.821856),
    new google.maps.LatLng(-10.159679, 170.219),
    new google.maps.LatLng(-23.45746, 157.125892)
  ];
}

//Sets the map on all markers (could change the map, or set to null to erase markers)
function setAllMap(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
        //polygons[i].setMap(map);
    }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setAllMap(null);
}

// Shows any markers currently in the array.
function showMarkers() {
    setAllMap(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    markers = [];	//set global marker array to EMPTY
    polygons = [];
}

function HexColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function process(key,value) {
    //if(isInt(key) === true)
        console.log(key + " : "+value);
}

function iterate(o,func){
    for (var i in o) {
        func.apply(this,[i,o[i]]);
    }
}

function traverse(o,func) {
    for (var i in o) {
        func.apply(this,[i,o[i]]);
        if (o[i] !== null && typeof(o[i])=="object") {  
            //going on step down in the object tree!!
            traverse(o[i],func);
        }
    }
}

function isInt(value) { 
    return !isNaN(parseInt(value,10)) && (parseFloat(value,10) == parseInt(value,10)); 
}
