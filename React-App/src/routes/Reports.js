import React from "react";
import "./reportstyles.css"; // Ensure correct path to the external CSS file

function Reports() {
  // Dummy data for the line graphs
  const data1 = [40, 80, 60, 90, 70, 50, 85];
  const data2 = [30, 70, 50, 80, 60, 40, 75];

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
          <h5>Line Graph 1</h5>
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
          <h5>Line Graph 2</h5>
          <svg width="300" height="200">
            {/* X Axis */}
            <line x1="0" y1="200" x2="300" y2="200" stroke="black" />
            {/* Y Axis */}
            <line x1="0" y1="0" x2="0" y2="200" stroke="black" />
            <polyline
              points={path2}
              fill="none"
              stroke="red"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div className="text-grid">
        <h2>Your Medical History</h2>
        <div className="medical-history">
          <div className="medical-record">
            <p> John Doe</p> &nbsp;
            <p>22/03/2024-Cold</p>&nbsp;
            <a href="#" download>Download Prescription/Report</a>
          </div>
          <div className="medical-record">
            <p> Person 2</p> &nbsp;
            <p>22/03/2022-Asthma</p>&nbsp;
            <a href="#" download>Download Prescription/Report</a>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button>ORDER PRESCRIPTION</button>
        <button>VIEW MORE</button>
      </div>
    </div>
  );
}

export default Reports;
