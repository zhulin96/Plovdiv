

var map = L.map('leaflet_map').setView([42.1436378,24.7481758], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var Icon = L.icon({
    iconUrl: 'img/point.svg',
    iconSize: [10, 10]
    
})
L.marker([42.1436378,24.7481758], {icon: Icon}).addTo(map);
L.marker([42.1446791,24.7470685], {icon: Icon}).addTo(map);
L.marker([42.1450215,24.7467215], {icon: Icon}).addTo(map);
L.marker([42.1462594,24.7465914], {icon: Icon}).addTo(map);
L.marker([42.1476728,24.7458634], {icon: Icon}).addTo(map);
L.marker([42.147904,24.7461515], {icon: Icon}).addTo(map);
var path = [[42.1436378,24.7481758], [42.1446791,24.7470685],[42.1450215,24.7467215], [42.1462594,24.7465914], [42.1476728,24.7458634],[42.147904,24.7461515]];

var marker = L.Marker.movingMarker(path,
    [70000, 15000, 15000, 30000,30000], {autostart: true ,loop:true}).addTo(map);
L.polyline(path, {color: 'red'}).addTo(map);
map.fitBounds(path);

marker2.on('end', function() {
    marker.bindPopup('<b>Welcome to Bucarest !</b><br>GitHub Page: <a target="\\blanck" href="https://github.com/ewoken/Leaflet.MovingMarker"><img src="github.png"></a>', {closeOnClick: false})
    .openPopup();
});
