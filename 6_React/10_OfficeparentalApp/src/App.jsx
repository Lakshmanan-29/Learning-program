import React from "react";
import "./App.css";

function App() {
  const office = {
    name: "DBS",
    rent: 50000,
    address: "Chennai",
  };

  const rentStyle = {
    color: office.rent < 60000 ? "red" : "green",
    fontWeight: "bold",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Office Space , at Affordable Range</h1>
      <img
        src="/office.jpeg"
        alt="Office"
        width="300"
        height="200"
        style={{ margin: "20px 0" }}
      />
      <div style={{ textAlign: "left", marginLeft: "40%", fontSize: "18px" }}>
        <p><strong>Name:</strong> {office.name}</p>
        <p style={rentStyle}>
          Rent: Rs. {office.rent}
        </p>
        <p><strong>Address:</strong> {office.address}</p>
      </div>
    </div>
  );
}

export default App;
