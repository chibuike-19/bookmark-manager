import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import { auth } from "../firebase";
// import RidesTable from "./rides-table";

type users = {
  displayName: string;
  email: string;
};
const Home = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<any>({});
  const [next, setNext] = useState(false);

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/");
      console.log("user signed out");
    });
  };

  const handleClick = () => {
    setNext(true);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        const uid = user.uid;
        const displayname = user.displayName;
        console.log(displayname, uid);
      } else {
        console.log("user logged out");
      }
    });
  }, []);

  return (
    <div>
      <nav className="nav_top">Microsoft ADC challenge</nav>
      <nav>
        <p>Welcome {currentUser.displayName}</p>
        <div className={next ? "inactive_form" : "active_form"}>
          <p>Enter the cordinates of your current location: </p>
          <div>
            <label htmlFor="" className="text">
              Longitude <br />
            </label>
            <input type="number" required />
          </div>
          <div>
            <label htmlFor="" className="text">
              latitude <br />
            </label>
            <input required type="number" />
          </div>
          <div className="next_btn" onClick={handleClick}>
            <p className="btn">Next</p>
          </div>
        </div>
        <div className={next ? "active_form" : "inactive_form"}>
          <p>Enter the cordinates of your destination: </p>
          <div>
            <label htmlFor="" className="text">
              Longitude <br />
            </label>
            <input type="number" required />
          </div>
          <div>
            <label htmlFor="" className="text">
              latitude <br />
            </label>
            <input required type="number" />
          </div>
          <div className="next_btn" >
            <p className="btn">Next</p>
          </div>
        </div>
        <div></div>
        <div>{/* <RidesTable /> */}</div>

        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </div>
  );
};
export default Home;
