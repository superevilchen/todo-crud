import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import store from "../../redux/Store";
import notify, { ErrMsg } from "../Notification";

export function useAuthorizedUser() {

    const navigate = useNavigate();

    useEffect(() => {
        // If we don't have a user object - we are not logged in
        if (!store.getState().authState.user.token) {
          notify.error(ErrMsg.LOGIN_NEEDED);
          navigate("/login");
        }
      }, []);
}