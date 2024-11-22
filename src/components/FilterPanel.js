import React,{useState} from "react";
import '../App.css'

const FilterPanel = ({ filters, setFilters }) => {

    const regions = {
        "North America": { latMin: 15, latMax: 70, lonMin: -170, lonMax: -50 },
        "South America": { latMin: -60, latMax: 15, lonMin: -90, lonMax: -30 },
        "Europe": { latMin: 35, latMax: 70, lonMin: -10, lonMax: 40 },
        "Asia": { latMin: 10, latMax: 80, lonMin: 40, lonMax: 180 },
        "Australia": { latMin: -50, latMax: -10, lonMin: 110, lonMax: 160 },
        "Africa": { latMin: -35, latMax: 40, lonMin: -20, lonMax: 55 },
      };
    const [filterButton,setFilterButton]= useState(true)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: name === "startTime" || name === "endTime" ? value : parseFloat(value) || 0,
    }));
  };
  const closeHandeler=()=>{
    setFilterButton(prev=>!prev)
  }

  return (

    <div>
    
      {filterButton?<button className={`filter-panel filter-Button`} onClick={closeHandeler}>Apply Filters</button>:

   
   
    <div className={`filter-panel p-3 flex flex-col`}>
      <h1 className="text-blue-700 font-extrabold text-center">Filter Earthquakes</h1>

      {/* Magnitude Filters */}
      <label className="text-pink-500">
        Min Magnitude:
        </label>
        <input
          type="number"
          name="minMag"
          value={filters.minMag}
          onChange={handleInputChange}
          min="0"
          step="0.1"
        />
      <label  className="text-pink-500">
        Max Magnitude:
        </label>
        <input
          type="number"
          name="maxMag"
          value={filters.maxMag}
          onChange={handleInputChange}
          min="0"
          max="14"
          step="0.1"
        />

      {/* Time Range Filters */}
      <label  className="text-pink-500" >
        Start Time:
        </label>
        <input
          type="datetime-local"
          name="startTime"
          value={filters.startTime}
          onChange={handleInputChange}
        />
      <label  className="text-pink-500">
        End Time:
        </label>
        <input
          type="datetime-local"
          name="endTime"
          value={filters.endTime}
          onChange={handleInputChange}
        />
      <label  className="text-pink-500">
  Region:
  </label>
  <select
    name="region"
    value={filters.region}
    onChange={(e) =>
      setFilters((prevFilters) => ({ ...prevFilters, region: e.target.value }))
    }
  >
    <option value="">All</option>
    {Object.keys(regions).map((region) => (
      <option key={region} value={region}>
        {region}
      </option>
    ))}
  </select>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded mt-2" onClick={closeHandeler}>close</button>
    </div>
}</div>

  );
};

export default FilterPanel;
