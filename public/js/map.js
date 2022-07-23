map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: 3
});

var bounds = [[0, 0], [100, 100]];
var image = L.imageOverlay('/images/map.jpg', bounds).addTo(map);

map.fitBounds(bounds);

function onMapClick(e) {
    alert("You clicked the map at v: " + e.latlng.lng + " and h: " + e.latlng.lat);
}

map.on('click', onMapClick);


$.getJSON('/api/pins', function (pins) {
    pins.forEach(pin => {
        addPin(pin["vertical"], pin["horizontal"]);
    });
});

function addPin(v, h) {
    var pin = L.latLng([h, v]);
    L.marker(pin).addTo(map);
}


