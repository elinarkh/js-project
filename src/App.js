import React from 'react';
import './App.css';
import Post from "./components/Post";
import RegOrLog from "./components/RegOrLog";
import { useHistory } from "react-router-dom";

function App() {

  return (
    <div className="App">
        <RegOrLog/>
        <Post/>
    </div>
  );
}

export default App;
