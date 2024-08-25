"use client";

import { LatLngExpression } from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

export default function Map() {
  const position: LatLngExpression = [51.505, -0.09];
  const [pos, setPos] = useState<LatLngExpression>([51.505, -0.09]);
  function EventTracker() {
    useMapEvent("click", (e) => {
      setPos([e.latlng.lat, e.latlng.lng]);
    });
    return null;
  }

  return (
    <MapContainer
      className="flex items-center justify-center w-full h-screen"
      center={position}
      zoom={3}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={pos}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <EventTracker />
    </MapContainer>
  );
}
