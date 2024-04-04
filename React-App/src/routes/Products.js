import React from "react";
import "./productstyles.css"; // Import the external CSS file

function Products() {
  return (
    <div className="products">
      <h1 className="product-heading">HEALTH INSURANCE</h1>
      <div className="product-grid">
        <p>Insurance provider &nbsp; : &nbsp; Star Health & allied insurance co LTD</p>
        <p>Insurance plan &nbsp; : &nbsp; gold shield plus</p>
        <p>Valid upto &nbsp; : &nbsp; 25-01-2025</p>
        {/* Add more text content as needed */}
      </div>
      <div className="product-button-container">
        <button className="product-button">Claim Insurance</button>
        <button className="product-button">Renew Insurance</button>
      </div>
    </div>
  );
}

export default Products;
