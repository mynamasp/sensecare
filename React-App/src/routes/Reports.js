import React, { useState, useEffect } from "react";
import "./reportstyles.css"; // Ensure correct path to the external CSS file
import db from "../firebase.js";

function Reports() {
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    db.collection("history").onSnapshot((snapshot) => {
      setPatientData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  useEffect(() => {
    console.log({ patientData });
  }, [patientData]);

  // useEffect(() => {
  //   db.collection("history").onSnapshot((snapshot) => {
  //     setPatientData(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     );
  //   });
  //   console.log({ patientData });
  // }, [patientData]);

  // Dummy data for the line graphs
  const data1 = [65, 74, 83, 67, 78, 87, 68];
  const data2 = [99, 96, 96, 98, 95, 98, 99];

  // Calculate the maximum value in the data arrays
  const maxValue1 = Math.max(...data1);
  const maxValue2 = Math.max(...data2);
  const maxValue = Math.max(maxValue1, maxValue2);

  // Calculate the height of each unit in the graphs
  const unitHeight = 200 / maxValue;

  // Generate SVG path string for the line graphs
  const path1 = data1
    .map((value, index) => `${index * 50},${200 - value * unitHeight}`)
    .join(" ");
  const path2 = data2
    .map((value, index) => `${index * 50},${200 - value * unitHeight}`)
    .join(" ");
  return (
    <div className="reports-container">
      <div className="grid-container">
        <div className="grid-item">
          <h5>Average HR (Last 7 Days) </h5>
          <svg width="300" height="200">
            {/* X Axis */}
            <line x1="0" y1="200" x2="300" y2="200" stroke="black" />
            {/* Y Axis */}
            <line x1="0" y1="0" x2="0" y2="200" stroke="black" />
            <polyline
              points={path1}
              fill="none"
              stroke="blue"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="grid-item">
          <h5>Average spO2 (Last 7 Days)</h5>

          <svg width="300" height="200">
            {/* X Axis */}
            <line x1="0" y1="200" x2="300" y2="200" stroke="black" />
            {/* Y Axis */}
            <line x1="0" y1="0" x2="0" y2="200" stroke="black" />
            <polyline points={path2} fill="none" stroke="red" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="text-grid">
        <h2>Your Medical History</h2>
        {patientData?.map(({ id, data }) => (
          <div className="medical-history">
            <div key={id}>
              <div className="medical-record">
                <div>{data.Date.toDate().toDateString()}</div>
                <div>{data.Doctor}</div>
                <div>{data.Diagnosis}</div>
                <a href="#" download>
                  Download Prescription/Report
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button>ORDER PRESCRIPTION</button>
        <button>VIEW MORE</button>
      </div>
    </div>
  );
}

export default Reports;
