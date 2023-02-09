import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate, NavLink } from "react-router-dom";
import { auth } from "../firebase";
import { signUpData } from "./signUpData";
import { useState} from "react";
import "../styles/signIn.css";
import Carousel from "./carousel";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const nameRef = useRef();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        if (auth.currentUser) {
          updateProfile(auth.currentUser, {
            displayName: name,
          });
        }
        const user = userCredentials.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        if (
          error.message === "Firebase: Error (auth/network-request-failed)."
        ) {
          setError("failed to connect, check your internet.");
        } else if (error.message === "Firebase: Error (auth/user-not-found).") {
          setError("Oops email does not exist ");
        } else if (error.message === "Firebase: Error (auth/wrong-password).") {
          setError("incorrect password");
        } else if (error.message === "Firebase: Error (auth/invalid-email).") {
          setError("Invalid Email");
        }
        //  setError(error.message);
        console.log(error);
      });
  };

  return (
    <div>
      <section>
        <div className="form-container">
          <div className="sign_up_form">
            <h1> Welcome to Book-IT </h1>
            <h2>Sign Up</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className={error ? "error_active" : "error_inactive"}>
                <p className="error_message">{error && error}</p>
              </div>
              <div className="box-container">
                <div className="input-container">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    className="email"
                    required
                  />
                  <label htmlFor="email" className="email-label">Enter your name*</label>
                </div>
              </div>
              <div className="box-container">
                <div className="input-container">
                  <input
                    type="text"
                    name="email"
                    className="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                  <label htmlFor="email" className="email-label">
                    Email*
                  </label>
                </div>
              </div>

              <div className="box-container">
                <div className="input-container">
                  <input
                    className="email"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="password" className="email-label">
                    Password*
                  </label>
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
