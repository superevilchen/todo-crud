import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Add from "../assets/add.png";
import All from "../assets/all.png";
import AboutImage from "../assets/about.png";
import { UserModel } from "../models/UserModel";
import store from "../redux/Store";
import AuthMenu from "./AuthArea/AuthMenu";
import AddTask from "./AddTask";
import About from "./About";
import Draggable from "react-draggable";

function IconMenu() {
  const [user, setUser] = useState(store.getState().authState.user);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleAddPopup = () => {
    setIsAddOpen(!isAddOpen);
  };

  const toggleAboutPopup = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  useEffect(() => {
    return store.subscribe(() => {
      setUser(store.getState().authState?.user || new UserModel("", "", ""));
    });
  }, []);

  return (
    <div className="IconMenu">
      {user?.token ? (
        <>
          <div className="IconContainer">
            <img
              src={AboutImage}
              alt=""
              className="Icon"
              onClick={toggleAboutPopup}
            />
            <div>About</div>
          </div>

          {isAboutOpen && (
            <Draggable>
              <div className="About">
                <About handleClose={toggleAboutPopup} />
              </div>
            </Draggable>
          )}

          <div className="IconContainer">
            <img src={Add} alt="" className="Icon" onClick={toggleAddPopup} />
            <div>Add Task</div>
          </div>

          {isAddOpen && (
            <Draggable>
              <div className="AddTask">
                <AddTask handleClose={toggleAddPopup} />
              </div>
            </Draggable>
          )}
          
        </>
      ) : (
        <></>
      )}

      <AuthMenu />
    </div>
  );
}

export default IconMenu;
