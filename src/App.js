import React from "react";
import "./App.css";
import { NavBar, Products } from "./components";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>Category name</h1>
        <Products />
      </div>
    );
  }
}

export default App;
