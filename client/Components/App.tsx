import React from "react";
import Body from "./Body";
import TopBar from "./TopBar";
import "../styles/app.css"

function App() {
  return (
    <div className="app">
      <TopBar />
      <Body />
    </div>
  );
}

export default App;
