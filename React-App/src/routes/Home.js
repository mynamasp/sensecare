import React from "react";
import "./homestyles.css"; // Import the external CSS file

function Home() {
  return (
    <div className="home-profile">
      <div className="profile">
        <img
          src="https://i.imgur.com/9q5qsEo.png"
          alt="Person"
          className="profile-image"
        />
        <h2 className="name" style={{ color: "white" }}>
          SRIVINAYAN
        </h2>
      </div>
      <div className="home-grid">
        <div className="grid-container">
          <div className="grid-item">
            <h3>Device ID</h3>
            <div className="grid-content">
              <p>4592429-314134134</p>
            </div>
            <h3>Firmware version</h3>
            <div className="grid-content">
              <p>10.1.2</p>
            </div>
          </div>
          <div className="grid-item">
            <h3>User Info</h3>
            <div className="grid-content">
              <p>Gender &nbsp;: &nbsp; Male</p>
              <p>Weight &nbsp;: &nbsp; 70kg</p>
              <p>Height &nbsp;: &nbsp; 170cm</p>
              <p>D.O.B &nbsp;: &nbsp; 02/03/2005</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
