'use client'
import { MapContainer, TileLayer, Marker, Popup,useMapEvents } from "react-leaflet";
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
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tms0.visicom.ua/2.0.0/world,ua/base/{z}/{x}/{y}.png?origin=nw&key=7f69e745d5dc82e7befb687f98d7615d"
      />
      <LocationMarker/>
    </MapContainer>
    </div>
  );
}
export default VizikomMap;