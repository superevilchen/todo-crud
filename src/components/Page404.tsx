import React from "react";
import Draggable from "react-draggable";

function Page404() {
  return (
    <Draggable>
      <div className="Center">
        <div className="window">
          <div className="title-bar" style={{ paddingTop: "0.9rem", paddingBottom: "0.9rem" }}>
            <div className="title-bar-text">Command Prompt</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <pre>
              404
              <br />
              PAGE NOT FOUND
            </pre>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default Page404;
