// Crear mapa
let coord = [19.43223, -99.18641];
var mapa = L.map('mapa').setView(coord, 14);

// Agregar capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(mapa);

// Agregar marcador
var marcador = L.marker(coord).addTo(mapa);
marcador.bindPopup("<b>BARBERÍA SERGIO</b><br />Shiller 330, Polanco<br />CDMX").openPopup();