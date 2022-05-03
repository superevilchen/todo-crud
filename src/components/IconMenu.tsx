import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Add from "../assets/add.png";
import All from "../assets/all.png";
import About from "../assets/about.png";
import { UserModel } from "../models/UserModel";
import store from "../redux/Store";
import AuthMenu from "./AuthArea/AuthMenu";

function IconMenu() {
  const [user, setUser] = useState(store.getState().authState.user);

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
            <Link to="/about" className="Link">
              <img src={About} alt="" className="Icon" />
              <div>About</div>
            </Link>
          </div>
                  
          <div className="IconContainer">
            <Link to="/add" className="Link">
              <img src={Add} alt="" className="Icon" />
              <div>Add Task</div>
            </Link>
          </div>

          <div className="IconContainer">
            <Link to="/" className="Link">
              <img src={All} alt="" className="Icon" />
              <div>All Tasks</div>
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}

      <AuthMenu />
    </div>
  );
}

export default IconMenu;
