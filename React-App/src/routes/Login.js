import Web3 from "web3";
import { useState } from "react";

import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // Import the external CSS file

const Login = () => {
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    // Redirect to the Home page
    try {
      if (window?.ethereum?.isMetaMask) {
        // Desktop browser
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const account = Web3.utils.toChecksumAddress(accounts[0]);
        setAddress(account);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <h3>S.E.N.S.E.C.A.R.E</h3>
      <h4>
        Secure electronic network for safety emergency notification and care
        access with record encryption
      </h4>
      <div className="button-row">
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
