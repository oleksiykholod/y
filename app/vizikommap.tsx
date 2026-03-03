'use client'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { useState } from "react";
function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom(18))
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

const VizikomMap= () => {
  return(
    <div id="map">
    <MapContainer center={[38.63, 35.0]} zoom={10} scrollWheelZoom={true} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://tms0.visicom.ua/2.0.0/world,ua/base/{z}/{x}/{y}.png?origin=nw&key=66957d5cab9fbb3fb6d8947ac46d37cc"
      />
      <LocationMarker/>
    </MapContainer>
    </div>
  );
}
export default VizikomMap;