import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { CredentialsModel } from "../../models/CredentialsModel";
import { login } from "../../utils/Networking/TasksApi";
import { loginAction } from "../../redux/AuthAppState";
import store from "../../redux/Store";
import notify, { ErrMsg, SccMsg } from "../../utils/Notification";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<CredentialsModel>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const loginUser = (credentials: CredentialsModel) => {
    login(credentials)
      .then((response) => {
        runLogoutTimer();
        store.dispatch(loginAction(response.data));
        notify.success(SccMsg.LOGIN_SUCCESS);
        navigate("/list");
      })
      .catch(() => {
        notify.error(ErrMsg.LOGOUT_FAILED);
        navigate("/");
      });
  };

  const runLogoutTimer = () => {
    setTimeout(() => {
      navigate("/logout");
    }, 1790000); // 29:50 minutes - 1790000
  };

  return (
    <div className="Center">
      <div className="window" style={{ width: "300px" }}>
        <div
          className="title-bar"
          style={{ paddingTop: "0.9rem", paddingBottom: "0.9rem" }}
        >
          <div className="title-bar-text">Login</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <form onSubmit={handleSubmit(loginUser)}>
            <div className="field-row-stacked">
              <label htmlFor="text21">Email</label>
              <input
                id="text21"
                type="email"
                placeholder="email"
                {...register("email")}
              />
              <label htmlFor="text24">{errors.email?.message}</label>
            </div>

            <div className="field-row-stacked">
              <label htmlFor="text21">Password</label>
              <input
                id="text21"
                type="password"
                placeholder="password"
                {...register("password")}
              />
              <label htmlFor="text24">{errors.password?.message}</label>
            </div>
            <br />
            <button type="submit" disabled={!isDirty || !isValid}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
