//Configuración
const API_KEY = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImFiMmVlMjI1ZTIxMDQxMGM5NmViNjBiYzkxYjk0ZDZjIiwiaCI6Im11cm11cjY0In0=";
//Cordenadas del negocio
const negocio = [42.88721, -2.31494];
//Crear el mapa
const mapa = L.map("mapa").setView(negocio,13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(mapa);
//Marcador del negocio
L.marker(negocio).addTo(mapa).bindPopup("PedidosAndre").openPopup();
//Botón
document.getElementById("btnRuta").addEventListener("click", () => {
  if (!navigator.geolocation) {
    alert("Geolocalización no soportada");
    return;
  }
  navigator.geolocation.getCurrentPosition(async (pos) => {
    const cliente = [
      pos.coords.latitude,
      pos.coords.longitude
    ];
    // Marcador cliente
    L.marker(cliente).addTo(map)
      .bindPopup("Tu ubicación")
      .openPopup();
    //Petición a ORS
    const url = "https://api.openrouteservice.org/v2/directions/driving-car/geojson";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        coordinates: [
          [cliente[1], cliente[0]], //ORS usa [lng, lat]
          [negocio[1], negocio[0]]
        ]
      })
    });
    const data = await response.json();
    //Dibujar ruta
    const ruta = L.geoJSON(data, {
      style: {
        color: "blue",
        weight: 5
      }
    }).addTo(mapa);
    //Ajustar mapa a la ruta
    mapa.fitBounds(ruta.getBounds());
  }, () => {
    alert("No se pudo obtener tu ubicación");
  });

});
