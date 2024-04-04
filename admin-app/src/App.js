import React, { useState } from "react";
import db from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import "./App.css";

function App() {
  const [Diagnosis, setDiagnosis] = useState("");
  const [Doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "history"), {
        Diagnosis,
        Doctor,
        Date: new Date(date), // Assumes date input is in a valid format
      });
      alert("Data added successfully");
      // Clear form fields after submission
      setDiagnosis("");
      setDoctor("");
      setDate("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">S.E.N.S.E.C.A.R.E</header>
      <p className="app-subheader">
        Secure electronic network for safety emergency notification and care
        access with record encryption
      </p>

      <form onSubmit={handleSubmit}>
        <input
          className="login-button"
          type="text"
          value={Diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
          placeholder="Diagnosis"
        />
        <input
          className="login-button"
          type="text"
          value={Doctor}
          onChange={(e) => setDoctor(e.target.value)}
          placeholder="Doctor"
        />
        <input
          className="login-button"
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
        />
        <button className="login-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
