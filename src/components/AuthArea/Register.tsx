import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RegisterModel } from "../../models/RegisterModel";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CredentialsModel } from "../../models/CredentialsModel";
import { registerNew } from "../../utils/Networking/TasksApi";
import { registerAction } from "../../redux/AuthAppState";
import store from "../../redux/Store";
import notify, { ErrMsg, SccMsg } from "../../utils/Notification";

function Register() {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
    confirm: yup
      .string()
      .required("Confirm your password")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<RegisterModel>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const registerUser = (user: RegisterModel) => {
    let credentials = new CredentialsModel(user.email, user.password);
    registerNew(credentials)
      .then((response) => {
        store.dispatch(registerAction());
        notify.success(SccMsg.REGISTRATION_SUCCESS);
        navigate("/login");
      })
      .catch((error) => {
        notify.error(ErrMsg.REGISTRATION_FAILED);
        navigate("/");
      });
  };

  return (
    <div className="Center">
      <div className="window" style={{ width: "300px" }}>
        <div
          className="title-bar"
          style={{ paddingTop: "0.9rem", paddingBottom: "0.9rem" }}
        >
          <div className="title-bar-text">Register</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <form onSubmit={handleSubmit(registerUser)}>
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

            <div className="field-row-stacked">
              <label htmlFor="text21">Confirm Password</label>
              <input
                id="text21"
                type="password"
                placeholder="confirm password"
                {...register("confirm")}
              />
              <label htmlFor="text24">{errors.confirm?.message}</label>
            </div>
            <br />

            <button type="submit" disabled={!isDirty || !isValid}>
              register
            </button>
          </form>{" "}
        </div>
      </div>
    </div>
  );
}

export default Register;
