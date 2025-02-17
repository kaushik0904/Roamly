import { useState } from "react";
import "./App.css";

function App() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  
  return (
    <div className="app-container">
      <header className="header">
        <h1>Welcome to Routly</h1>
        <p>Your personal trip planner</p>
      </header>
      
      <div className="trip-form">
        <h2>Plan Your Trip</h2>
        <label>Destination:</label>
        <input 
          type="text" 
          placeholder="Enter destination" 
          value={destination} 
          onChange={(e) => setDestination(e.target.value)} 
        />

        <label>Date:</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />

        <label>Notes:</label>
        <textarea 
          placeholder="Add some notes..." 
          value={notes} 
          onChange={(e) => setNotes(e.target.value)} 
        ></textarea>

        <button className="plan-button">Save Trip</button>
      </div>
    </div>
  );
}

export default App;