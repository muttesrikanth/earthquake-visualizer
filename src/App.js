import React, { useEffect, useState } from "react";
import axios from "axios";
import MapView from "./components/MapView";
import FilterPanel from "./components/FilterPanel";
import './App.css'
import ErrorBoundary from "./components/ErrorBoundary";


const App = () => {
  const [earthquakes, setEarthquakes] = useState([]);
  const [filters, setFilters] = useState({ minMag: 0, maxMag: 10 });
  const [filteredQuakes, setFilteredQuakes] = useState([]);
  const [error,setError]=useState('')
  const regions = {
    "North America": { latMin: 15, latMax: 70, lonMin: -170, lonMax: -50 },
    "South America": { latMin: -60, latMax: 15, lonMin: -90, lonMax: -30 },
    "Europe": { latMin: 35, latMax: 70, lonMin: -10, lonMax: 40 },
    "Asia": { latMin: 10, latMax: 80, lonMin: 40, lonMax: 180 },
    "Australia": { latMin: -50, latMax: -10, lonMin: 110, lonMax: 160 },
    "Africa": { latMin: -35, latMax: 40, lonMin: -20, lonMax: 55 },
  };
  

  useEffect(() => {
    const fetchEarthquakes = async () => {
      try {
        const response = await axios.get(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
        );
        setEarthquakes(response.data.features);
      } catch (error) {
        console.error("Error fetching earthquake data:", error.message);
        setError(error.message)
        setTimeout(() => {
          setError('')
        }, 5000);
      }
    };
    fetchEarthquakes();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const filtered = earthquakes.filter((quake) => {
        const mag = quake.properties.mag;
        const quakeTime = quake.properties.time;
        const [lon, lat] = quake.geometry.coordinates;
  
        // Convert time to Unix timestamp
        const startTime = filters.startTime ? new Date(filters.startTime).getTime() : null;
        const endTime = filters.endTime ? new Date(filters.endTime).getTime() : null;
      //  Get region bounds
        const regionBounds = regions[filters.region];
        const inRegion =
        !regionBounds ||
          (lat >= regionBounds.latMin &&
            lat <= regionBounds.latMax &&
            lon >= regionBounds.lonMin &&
            lon <= regionBounds.lonMax);
  
        return (
          mag >= filters.minMag &&
          mag <= filters.maxMag &&
          (!startTime || quakeTime >= startTime) &&
          (!endTime || quakeTime <= endTime) &&
          inRegion
        );
      });
      setFilteredQuakes(filtered);
    };
  
    applyFilters();
  }, [filters, earthquakes]);
  

  return (
    <>
      <ErrorBoundary>
        <div className="text-center bg-red-300 text-dark-500">{error}</div>
      <FilterPanel filters={filters} setFilters={setFilters} />
      <MapView filters={filters} earthquakes={filteredQuakes} />
      </ErrorBoundary>
    </>
  );
};

export default App;
