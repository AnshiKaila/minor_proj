import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const ChargingPage = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // States for form values
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [station, setStation] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [connectionType, setConnectionType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [price, setPrice] = useState('');

  // Dummy data for dropdowns
  const cityOptions = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
  const areaOptions = {
    'New York': ['Manhattan', 'Brooklyn'],
    'Los Angeles': ['Hollywood', 'Downtown'],
    'Chicago': ['North Side', 'South Side'],
    'Houston': ['Midtown', 'Uptown'],
  };
  const stationOptions = {
    'Manhattan': ['Station A', 'Station B'],
    'Brooklyn': ['Station C', 'Station D'],
    'Hollywood': ['Station E', 'Station F'],
    'Downtown': ['Station G', 'Station H'],
    // Add more for other areas
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass form data to the payment page
    navigate('/payment', { 
      state: { 
        city, area, station, vehicleType, vehicleModel, connectionType, date, time, price 
      } 
    });
  };

  return (
    <div className="charging-page">
      <h2>Select Charging Station & Book a Slot</h2>
      <form onSubmit={handleSubmit} className="charging-form">
        {/* City Dropdown */}
        <div className="form-group">
          <label htmlFor="city">Select City</label>
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          >
            <option value="">-- Select City --</option>
            {cityOptions.map((cityName, idx) => (
              <option key={idx} value={cityName}>{cityName}</option>
            ))}
          </select>
        </div>

        {/* Area Dropdown */}
        {city && (
          <div className="form-group">
            <label htmlFor="area">Select Area</label>
            <select
              id="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              required
            >
              <option value="">-- Select Area --</option>
              {areaOptions[city].map((areaName, idx) => (
                <option key={idx} value={areaName}>{areaName}</option>
              ))}
            </select>
          </div>
        )}

        {/* Charging Station Dropdown */}
        {area && (
          <div className="form-group">
            <label htmlFor="station">Select Charging Station</label>
            <select
              id="station"
              value={station}
              onChange={(e) => setStation(e.target.value)}
              required
            >
              <option value="">-- Select Charging Station --</option>
              {stationOptions[area].map((stationName, idx) => (
                <option key={idx} value={stationName}>{stationName}</option>
              ))}
            </select>
          </div>
        )}

        <h3>Vehicle Details</h3>

        {/* Vehicle Type */}
        <div className="form-group">
          <label htmlFor="vehicleType">Vehicle Type</label>
          <input
            type="text"
            id="vehicleType"
            placeholder="e.g., Sedan, SUV"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            required
          />
        </div>

        {/* Vehicle Model */}
        <div className="form-group">
          <label htmlFor="vehicleModel">Vehicle Model</label>
          <input
            type="text"
            id="vehicleModel"
            placeholder="e.g., Tesla Model 3"
            value={vehicleModel}
            onChange={(e) => setVehicleModel(e.target.value)}
            required
          />
        </div>

        {/* Connection Type */}
        <div className="form-group">
          <label htmlFor="connectionType">Connection Type</label>
          <select
            id="connectionType"
            value={connectionType}
            onChange={(e) => setConnectionType(e.target.value)}
            required
          >
            <option value="">-- Select Connection Type --</option>
            <option value="Type 1">Type 1</option>
            <option value="Type 2">Type 2</option>
            <option value="CHAdeMO">CHAdeMO</option>
          </select>
        </div>

        {/* Date */}
        <div className="form-group">
          <label htmlFor="date">Select Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        {/* Time */}
        <div className="form-group">
          <label htmlFor="time">Select Time</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        {/* Price */}
        <div className="form-group">
          <label htmlFor="price">Price (in USD)</label>
          <input
            type="number"
            id="price"
            placeholder="Enter the price for booking"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Continue to Payment</button>
      </form>
    </div>
  );
};

export default ChargingPage;
