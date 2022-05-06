import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserModel } from "../../models/UserModel";
import store from "../../redux/Store";
import Login from "../../assets/login.png";
import Register from "../../assets/register.png";

function AuthMenu() {
    const [user, setUser] = useState(store.getState().authState.user);

  useEffect(() => {
    return store.subscribe(() => {
      setUser(store.getState().authState?.user || new UserModel("", "", ""));
    });
  }, []);

  return (
    <div>
      {user?.token ? (
        <div className="IconContainer">
          <Link to="/logout" className="Link">
            <img src={Login} alt="" className="Icon" />
            <div>Logout</div>
          </Link>
        </div>
      ) : (
        <>
          <div className="IconContainer">
            <Link to="/login" className="Link">
              <img src={Login} alt="" className="Icon" />
              <div>Login</div>
            </Link>
          </div>

          <div className="IconContainer">
            <Link to="/register" className="Link">
              <img src={Register} alt="" className="Icon" />
              <div>Register</div>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default AuthMenu;
