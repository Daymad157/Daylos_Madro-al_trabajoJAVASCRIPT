// Inicialización del mapa con coordenadas de "Av. del Comercio, 11" (aquí puse unas coordenadas aproximadas)
var map = L.map('mapid').setView([37.402241, -5.711676], 13); // Coordenadas de Madrid, cambia por las correctas para tu ubicación

// Agregar una capa de mapa (en este caso OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Agregar un marcador en la dirección de la empresa
var marker = L.marker([37.402241, -5.711676]).addTo(map); // Coordenadas de la dirección de la empresa

// Agregar un popup con la información de la empresa
marker.bindPopup("<b>Mi Empresa</b><br>Dirección: Av. del Comercio, 11").openPopup();
