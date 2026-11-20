import { useState } from "react";
import ResumeDisplay from "./ResumeDisplay";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="resume-form">
        <h1>Form input will go here</h1>
      </div>
      <ResumeDisplay />
    </div>
  );
}

export default App;
