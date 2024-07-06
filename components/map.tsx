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
import { TestEvent } from "node:test/reporters";

function EventTracker() {
  const TestEvent = useMapEvent("click", (e) =>
    console.log("clicked on", e.latlng)
  );
  return null;
}

export default function Map() {
  const position: LatLngExpression = [51.505, -0.09];

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
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <EventTracker />
    </MapContainer>
  );
}
