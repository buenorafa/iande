// Leaflet
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

function initMap() {
  const map = L.map("map").setView(
    [-7.1351608999508835, -34.873484685903584],
    13
  ); // Set the initial coordinates and zoom level

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Add a marker to the map
  L.marker([-7.1351608999508835, -34.873484685903584])
    .addTo(map)
    .bindPopup("<b>IFPB</b><br>Coleta de baterias.")
    .openPopup();
  L.marker([-7.146863620243023, -34.84931609537628])
    .addTo(map)
    .bindPopup("<b>Carrefour</b><br>Coleta de baterias e<br> óleo de cozinha.")
    .openPopup();
}

// Call the initMap function when the page loads
window.addEventListener("DOMContentLoaded", initMap);
