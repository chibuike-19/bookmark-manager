import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
// import img1 from "../assets/3.png";
import "../styles/signIn.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signUpData } from "./signUpData";
import Carousel from "./carousel";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("")
  const [password, setPassword] = useState("");

  const onLogin = async (e: any) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential;
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
         if (error.message === "Firebase: Error (auth/network-request-failed).") {
           setError("failed to connect, check your internet.");
         } else if (error.message === "Firebase: Error (auth/user-not-found).") {
           setError("Oops email does not exist ");
         } else if (error.message === "Firebase: Error (auth/wrong-password).") {
           setError("incorrect password");
         }
        console.log(error);
      });
  };
  return (
    <div>
      <section>
        <div className="form-container">
          <div className="sign_up_form">
            <h1> Welcome to BOOKER-IT </h1>
            <h2>LogIn</h2>
            <form onSubmit={(e) => onLogin(e)}>
              <div className={error ? "error_active" : "error_inactive"}>
                <p className="error_message">{error && error}</p>
              </div>
              <div className="box-container">
                <div className="input-container">
                  <input
                    type="text"
                    className="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                  <label htmlFor="" className="email-label">
                    Email*
                  </label>
                </div>
              </div>

              <div className="box-container">
                <div className="input-container">
                  <input
                    className="email"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="" className="email-label">
                    Password*
                  </label>
                </div>
              </div>

              <div className="submit-btn">
                <button type="submit" className="btn" onClick={onLogin}>
                  Log In
                </button>
              </div>
            </form>

            <p>
              Don't have an account yet?{" "}
              <NavLink to="/">Sign Up</NavLink>
            </p>
          </div>
          <div className="carousel-img">
            <Carousel data={signUpData} />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
