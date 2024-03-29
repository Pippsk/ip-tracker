"use client";
import styles from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerIcon from "../../node_modules/leaflet/dist/images/marker-icon.png";
import MarkerShadow from "../../node_modules/leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MarkerPosition from "./MarkerPosition";

const Map = ({ location }) => {
  return (
    <div>
      <MapContainer
        className={styles.map}
        center={[location.lat, location.lng]}
        zoom={12}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* <Marker
          icon={
            new L.icon({
              iconUrl: MarkerIcon.src,
              iconRetinaUrl: MarkerIcon.src,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [0, -41],
              shadowUrl: MarkerShadow.src,
              shadowSize: [41, 41],
            })
          }
          position={[location.lat, location.lng]}
        >
          <Popup>this is a popup</Popup>
        </Marker> */}

        <MarkerPosition location={location} />
      </MapContainer>
    </div>
  );
};

export default Map;
