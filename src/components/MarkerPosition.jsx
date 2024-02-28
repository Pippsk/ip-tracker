"use client";
import { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import MarkerIcon from "../../node_modules/leaflet/dist/images/marker-icon.png";
import MarkerShadow from "../../node_modules/leaflet/dist/images/marker-shadow.png";
import L from "leaflet";

const MarkerPosition = ({ location }) => {
  const position = [location.lat, location.lng];
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 13, { animate: true });
  }, [map, position]);
  return (
    <>
      <Marker
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
        position={position}
      >
        <Popup>{location.city}</Popup>
      </Marker>
    </>
  );
};

export default MarkerPosition;
