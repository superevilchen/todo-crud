import React from "react";
import { PopupTaskProps } from "../utils/PropsUtil";

interface AboutProps{
  handleClose: () => void;
}

function About(props: AboutProps) {
  return (
    <div className="Center">
      <div className="window" style={{ width: "450px" }}>
        <div
          className="title-bar"
          style={{ paddingTop: "0.9rem", paddingBottom: "0.9rem" }}
        >
          <div className="title-bar-text">Command Prompt</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close" onClick={props.handleClose}></button>
          </div>
        </div>
        <div className="window-body">
          <pre>
            Todo Application - Use it wisely
            <br />
            &#10094;C&#10095; Copyright Chen Varsano 2022.
            <br />
            <br />
            View client (React + TS){" "}
            <a href="https://github.com/superevilchen/todo-crud">Source code</a>
            <br />
            View Server (Spring){" "}
            <a href="https://github.com/superevilchen/todo-list-server">
              Source code
            </a>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default About;
