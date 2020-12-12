import React from "react";

function Login() {
  return (
    <form onSubmit={handleSigninSubmit(onSignin)} className="sign-in-form">
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
                  "form-control " + (signinerrors.email ? "is-invalid" : "")
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
                  "form-control " + (signinerrors.password ? "is-invalid" : "")
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
      <small className="text-danger text-center">{signinErrorMessage}</small>
      <input type="submit" value="Login" className="btn solid" />
    </form>
  );
}

export default Login;
