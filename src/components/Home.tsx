import React from "react";
import Draggable from "react-draggable";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Draggable>
      <div className="Center">
        <div className="window" style={{ width: "300px" }}>
          <div
            className="title-bar"
            style={{ paddingTop: "0.9rem", paddingBottom: "0.9rem" }}
          >
            <div className="title-bar-text">Welcome!</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <p className="Center">Welcome!</p>
            <div className="BoxTask">
              <Link to="/login">Login</Link>
              <span> ~ </span>
              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default Home;
