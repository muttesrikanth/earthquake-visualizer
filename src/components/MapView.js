import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import AutoZoom from "./AutoZoom";
import '../App.css'

const MapView = ({filters, earthquakes }) => {
  const regions = {
    "North America": { latMin: 15, latMax: 70, lonMin: -170, lonMax: -50 },
    "South America": { latMin: -60, latMax: 15, lonMin: -90, lonMax: -30 },
    "Europe": { latMin: 35, latMax: 70, lonMin: -10, lonMax: 40 },
    "Asia": { latMin: 10, latMax: 80, lonMin: 40, lonMax: 180 },
    "Australia": { latMin: -50, latMax: -10, lonMin: 110, lonMax: 160 },
    "Africa": { latMin: -35, latMax: 40, lonMin: -20, lonMax: 55 },
  };
  const regionBounds = filters.region ? regions[filters.region] : null;
  const clickHandler=()=>{
    document.querySelector('.MapContainer').classList.add('earthquake')
    setTimeout(()=>{
      document.querySelector('.MapContainer').classList.remove('earthquake')
    },1000)
  }
  
  return(
    <MapContainer center={[20, 0]} zoom={2} 
    maxBounds={[
      [-90, -180],   // Southwest corner
      [90, 180],     // Northeast corner
    ]}               // Restrict panning
    maxBoundsViscosity={1.0} 
    className="MapContainer" >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
         <AutoZoom region={regionBounds} />
      {earthquakes.map((quake) => (
        <Marker
          key={quake.id}
          position={[
            quake.geometry.coordinates[1],
            quake.geometry.coordinates[0],
          ]}
          eventHandlers={{
            click: () => clickHandler(),
          }}
        >
          <Popup >
            <strong  className="bg-red-200 p-2 rounded">{quake.properties.title}</strong>
            <p>Magnitude: {quake.properties.mag}</p>
            <p>Depth: {quake.geometry.coordinates[2]} km</p>
            <p>
              <a href={quake.properties.url} target="_blank" rel="noopener noreferrer">
                Details
              </a>
            </p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );}
  
  export default MapView
  