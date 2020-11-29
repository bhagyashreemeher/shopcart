import "./App.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Axios } from "./constant";
import AlertMessage from "./Alert";

function App() {
  const [isRegister, setIsRegister] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register: registerSignin,
    handleSubmit: handleSigninSubmit,
    errors: signinerrors,
    reset: signinreset,
  } = useForm();

  const onSignup = (data) => {
    setIsLoading(true);
    setError("");
    Axios.post("/profiles/signup", data)
      .then((respone) => {})
      .catch((error) => {
        console.log(error.response);
      });
  };

  const onSignin = (data) => {
    Axios.post("/profiles/signin", data)
      .then((respone) => {
        console.log(respone);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={"container-sign " + (isRegister ? "sign-up-mode" : "")}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* <AlertMessage /> */}
          {!isRegister ? (
            <form
              onSubmit={handleSigninSubmit(onSignin)}
              className="sign-in-form"
            >
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
                          "form-control " +
                          (signinerrors.email ? "is-invalid" : "")
                        }
                        id="email"
                        name="email"
                        placeholder="email"
                        ref={registerSignin({
                          required: true,
                        })}
                      />
                      <small className="invalid-feedback">
                        {signinerrors.email?.type === "required" &&
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
                          "form-control " +
                          (signinerrors.password ? "is-invalid" : "")
                        }
                        id="password"
                        name="password"
                        placeholder="password"
                        ref={registerSignin({
                          required: true,
                          maxLength: 15,
                          minLength: 5,
                        })}
                      />
                      <small className="invalid-feedback">
                        {signinerrors.password?.type === "required" &&
                          "Your password is required"}
                        {signinerrors.password?.type === "minLength" &&
                          "min length of password should be 5"}
                        {signinerrors.password?.type === "maxLength" &&
                          "max length of password should be 15"}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <input type="submit" value="Login" className="btn solid" />
            </form>
          ) : (
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
                        className={
                          "form-control " + (errors.name ? "is-invalid" : "")
                        }
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
                        className={
                          "form-control " + (errors.email ? "is-invalid" : "")
                        }
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
                          "form-control " +
                          (errors.password ? "is-invalid" : "")
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
                        className={
                          "form-control " + (errors.age ? "is-invalid" : "")
                        }
                        name="age"
                        placeholder="age"
                        ref={register({ required: true, max: 100, min: 18 })}
                      />
                      <small className="invalid-feedback">
                        {errors.age?.type === "required" &&
                          "Your age is required"}
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
                        {errors.sex?.type === "required" &&
                          "Your sex is required"}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <input type="submit" className="btn solid" value="Register" />
            </form>
          )}
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Are you new!</h3>
            <p>Click on the button below to create your account !</p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={() => {
                reset();
                signinreset();
                setIsRegister(true);
              }}
            >
              Register
            </button>
          </div>
          <img
            src="https://i.pinimg.com/originals/72/82/fe/7282fee6a0641482ab4391b9638ee46c.png"
            className="image"
            alt=""
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Do you already have an account ?</h3>
            <p>{/* Login */}</p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={() => {
                signinreset();
                reset();
                setIsRegister(false);
              }}
            >
              LogIn
            </button>
          </div>
          <img
            src="https://i.pinimg.com/originals/77/29/f4/7729f497f9d0188fa35d41db45232cca.png"
            className="image"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
