import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Axios } from "./constant";

function Register() {
  const { register, handleSubmit, errors } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const onSignup = (data) => {
    setErrorMessage("");
    Axios.post("/profiles/signup", data)
      .then((respone) => {
        console.log(respone);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.errors);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSignup)} className="sign-up-form">
      <h3 className="title">Register</h3>
      <div className="form-row">
        <div className="row justify-content-center">
          <div className="col-md-8 mb-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
              <input
                type="text"
                className={"form-control " + (errors.name ? "is-invalid" : "")}
                id="name"
                name="name"
                placeholder="username"
                ref={register({
                  required: true,
                  maxLength: 20,
                  minLength: 5,
                })}
              />
              <small className="invalid-feedback">
                {errors.name?.type === "required" &&
                  "your username is required"}
              </small>
            </div>
          </div>
          <div className="col-md-8 mb-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
              <input
                type="email"
                className={"form-control " + (errors.email ? "is-invalid" : "")}
                id="email"
                name="email"
                placeholder="email"
                ref={register({
                  required: true,
                  maxLength: 30,
                  minLength: 10,
                })}
              />
              <small className="invalid-feedback">
                {errors.email?.type === "required" && "Your email is required"}
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
              </small>
            </div>
          </div>
          <div className="col-md-8 mb-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-globe"></i>
                </span>
              </div>
              <input
                className={
                  "form-control " + (errors.country ? "is-invalid" : "")
                }
                type="text"
                id="country"
                name="country"
                placeholder="country"
                ref={register({ required: true })}
              />
              <small className="invalid-feedback">
                {errors.country?.type === "required" &&
                  "Your country name is required"}
              </small>
            </div>
          </div>
          <div className="col-md-8 mb-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-birthday-cake"></i>
                </span>
              </div>
              <input
                type="number"
                id="age"
                className={"form-control " + (errors.age ? "is-invalid" : "")}
                name="age"
                placeholder="age"
                ref={register({ required: true, max: 100, min: 18 })}
              />
              <small className="invalid-feedback">
                {errors.age?.type === "required" && "Your age is required"}
              </small>
            </div>
          </div>

          <div className="col-md-8 mb-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-venus-mars"></i>
                </span>
              </div>
              <select
                name="sex"
                className={
                  "custom-select form-control " +
                  (errors.sex ? "is-invalid" : "")
                }
                ref={register({
                  required: true,
                })}
              >
                <option value="">sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <small className="invalid-feedback">
                {errors.sex?.type === "required" && "Your sex is required"}
              </small>
            </div>
          </div>
        </div>
      </div>
      <small className="text-danger text-center"> {errorMessage}</small>
      <input type="submit" className="btn solid" value="Register" />
    </form>
  );
}

export default Register;
