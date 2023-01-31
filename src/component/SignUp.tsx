import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, NavLink } from "react-router-dom";
import { auth } from "../firebase";
import { signUpData } from "./signUpData";
import { useState } from "react";
import "../styles/signIn.css";
import Carousel from "./carousel";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [active, setActive] = useState(false);
  const [password, setPassword] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  return (
    <div>
      <section>
        <div className="form-container">
          <div className="sign_up_form">
            <h1> Welcome to BOOKER-IT Manager </h1>
            <h2>Sign Up</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="box-container">
                <div className="input-container">
                <label htmlFor="email" className="email-label">
                  Email*
                </label>
                <input
                  type="text"
                  name="email"
                  // className="email"
                  value={email}
                  onClick={() => setActive(true)}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
                </div>

              <div className="box-container">
                <div className="input-container">
                <label htmlFor="password" className="email-label">Password*</label>
                <input
                  // className="email"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="submit-btn">
                <button type="submit" className="btn" onClick={onSubmit}>
                  Sign up
                </button>
              </div>
                </div>
            </form>

            <p>
              Already have an account? <NavLink to="/login">Sign in</NavLink>
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
export default SignUp;
