import "./App.css";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className={"container-sign " + (isRegister ? "sign-up-mode" : "")}>
      <div className="forms-container">
        <div className="signin-signup">
          {!isRegister ? <Login /> : <Register />}
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
