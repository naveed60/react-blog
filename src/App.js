// App.js
import React from "react";
import "./App.css";
import Examples from "./components/Examples.js";
import CoreConcepts from "./components/CoreConcepts.js";
import Header from "./components/Header.js";

function App() {
  return (
    <>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
};

export default App;
