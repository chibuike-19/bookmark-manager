import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import img1 from '../assets/3.png'
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e: any) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <main>
        <section>
          <div className="form-container">
            <div>
              <h1> Welcome to BOOKER-IT </h1>
              <h2>LogIn</h2>
              <form onSubmit={(e) => onLogin(e)}>
                <div className="box-container">
                  <div className="input-container">
                  <label htmlFor="" className="email-label">
                    Email*
                  </label>
                  <input
                    type="email"
                    className="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                </div>
                  </div>

                <div className="box-container">
                  <div className="input-container">
                  <label htmlFor="" className="email-label">
                    Password*
                  </label>
                  <input
                    className="email"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                  </div>

                <div className="submit-btn">
                  <button type="submit" className="btn" onClick={onLogin}>
                    Sign up
                  </button>
                </div>
              </form>

              <p>
                Don't have an account yet? <NavLink to="/sign-up">Sign Up</NavLink>
              </p>
            </div>
            <div className="carousel-img">
            <img src={img1} alt="carosel image" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Login;
