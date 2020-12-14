import React from "react";
import "./App.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Axios } from "./constant";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [signinErrorMessage, signinSetErrorMessage] = useState("");

  const { register, handleSubmit, errors  } = useForm();

  const onSignin = (data) => {
    setIsLoading(true);
    signinSetErrorMessage(false);
    Axios.post("/profiles/signin", data)
      .then((respone) => {
        console.log(respone);
      })
      .catch((error) => {
        signinSetErrorMessage(error.response.data.errors);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSignin)} className="sign-in-form">
      <h3 className="title">Login</h3>
      <div className="form-row">
        <div className="row justify-content-center">
          <div className="col-md-8 mb-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <input
                type="email"
                className={
                  "form-control " + (errors.email ? "is-invalid" : "")
                }
                id="email"
                name="email"
                placeholder="email"
                ref={register({
                  required: true,
                })}
              />
              <small className="invalid-feedback">
                {errors.email?.type === "required" &&
                  "Your email is required"}
              </small>
            </div>
          </div>
          <div className="col-md-8 mb-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
              <input
                type="password"
                className={
                  "form-control " + (errors.password ? "is-invalid" : "")
                }
                id="password"
                name="password"
                placeholder="password"
                ref={register({
                  required: true,
                  maxLength: 15,
                  minLength: 5,
                })}
              />
              <small className="invalid-feedback">
                {errors.password?.type === "required" &&
                  "Your password is required"}
                {errors.password?.type === "minLength" &&
                  "min length of password should be 5"}
                {errors.password?.type === "maxLength" &&
                  "max length of password should be 15"}
              </small>
            </div>
          </div>
        </div>
      </div>
      <small className="text-danger text-center">{signinErrorMessage}</small>
      <input type="submit" value="Login" className="btn solid" />
    </form>
  );
}

export default Login;
