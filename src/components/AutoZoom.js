import { useEffect } from "react";
import { useMap } from "react-leaflet";

const AutoZoom = ({ region }) => {
  const map = useMap();

  useEffect(() => {
    if (region) {
      // Calculate center based on latMin, latMax, lonMin, lonMax
      const centerLat = (region.latMin + region.latMax) / 2;
      const centerLon = (region.lonMin + region.lonMax) / 2;
      
      // Set the zoom level based on the region's bounds (you can adjust this value)
      const zoomLevel = 3;  // Adjust zoom level as necessary

      // Apply the new center and zoom level
      map.setView([centerLat, centerLon], zoomLevel);
    } else {
      // Reset to default view when region is null (i.e., "All" is selected)
      const defaultCenter = [20, 0]; // You can set a global default center (e.g., [0, 0] for a global view)
      const defaultZoom = 2; // Set default zoom level
      map.setView(defaultCenter, defaultZoom);
    }
  }, [region, map]);

  return null;
};

export default AutoZoom;
