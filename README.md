# 🌍  **Earthquake Visualizer**

An interactive web application that visualizes recent earthquake activity around the world, helping users understand seismic patterns with real-time data.

---

## **Live Demo**
Access the live application here: from stackblitz [Earthquake Visualizer](https://stackblitz.com/~/github.com/muttesrikanth/earthquake-visualizer)
from netlify:[go live](https://sparkly-pegasus-088261.netlify.app/)

---

## **Features**
- **Interactive Map**: Visualize earthquake locations on a world map using `react-leaflet`.
- **Filter by Time Range**: Choose specific time ranges to view earthquakes (e.g., past hour, past day).
- **Filter by Region**: Zoom into a specific region to focus on earthquakes within a selected area.
- **Pop-Up Details**: Click on earthquake markers to view detailed information (magnitude, location, depth, etc.).
- **Responsive Design**: Fully functional on desktop and mobile devices.
- **Error Handling**: Displays meaningful error messages for API failures or no results found.

---

## **API Details**
### **USGS Earthquake API**
- **Base URL**: `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson`
- **Response Format**: GeoJSON
- **Example Response**:
```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "mag": 5.6,
        "place": "114 km WNW of Houma, Tonga",
        "time": 1732099375380,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000p6id"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-176.2802, -20.7032, 203.271]
      }
    }
  ]
}
```

## 🗺️ How It Works
 Data Fetching: The app fetches earthquake data from the USGS Earthquake API.
 Mapping: Earthquakes are plotted as markers on an interactive Leaflet map.
 Details: Clicking a marker shows earthquake details (e.g., magnitude, time).


## Prerequisites
Node.js installed on your system.
Basic knowledge of React and npm/yarn commands

## Steps to Run Locally
---
### Clone the repository:
`git clone https://github.com/your-username/earthquake-visualizer.git`
### Navigate to the project directory:
`cd earthquake-visualizer`
### Install dependencies:
`npm install`
### Start the development server:
`npm start`

`Open http://localhost:3000 in your browser.`
---
## Usage Instructions
- **View All Earthquakes:**
Open the application to view earthquake markers on the map.
- **Filter by Time Range:**
Select a time range from the dropdown menu (e.g., past hour, past week).
- **Filter by Region:**
Enter a region name or zoom in to focus on specific areas.
- **View Earthquake Details:**
Click on any marker to see details such as magnitude, depth, and location.

## Technologies Used
- **Frontend Framework**: React
- **Mapping Library**: react-leaflet
- **API Integration**: USGS Earthquake API
- **Styling**: Tailwind CSS
- **Hosting**: StackBlitz



