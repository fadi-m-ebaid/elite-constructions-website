"use client";

import { StyleType } from "@/types/baseTypes";
import dynamic from "next/dynamic";

export interface MapDimensionsType {
  latitude: number;
  longitude: number;
}

interface MapProps {
  dimensions: MapDimensionsType;
  style?: StyleType;
  zoom?: number;
  popupMessage?: string;
}

const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(mod => mod.Popup), { ssr: false });

export default function Map({
  dimensions: { latitude, longitude },
  zoom = 13,
  popupMessage = "Location",
}: MapProps) {
  return (
    <div className="map-wrapper">
      <MapContainer
        center={[latitude, longitude]}
        zoom={zoom}
        className="leaflet-map"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longitude]}>
          <Popup>{popupMessage}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
