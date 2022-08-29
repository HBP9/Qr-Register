import React from "react";
import { Link } from "react-router-dom";
import logEntry from "../images/social-media.png";
import logExit from "../images/buildings.png";
import showLog from "../images/interface.png";
import logout from "../images/signs.png";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Home = () => {
  let navigate = useNavigate();
  const styles = {
    card: {
      height: 125,
      width: 116,
      margin: "20px",
      backgroundColor: "#7765E3",
      display: "flex",
      alignItems: " center",
      justifyContent: "center",
    },
    link: {
      textDecoration: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      flexWrap: "wrap",
      color: "#FFFFFF  ",
      backgroundColor:'#7765E3',
      border:'none'
    },
    cards: {
      height: "100vh",
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      flexDirection: "row",
    },
  };
  const logouts = () => {
    Cookies.remove("jwt");
    Cookies.remove("user");
    navigate("/");
  };
  return (
    <>
      <div className="cards" style={styles.cards}>
        <div className="card" style={styles.card}>
          <Link to={"/qrEntry"} style={styles.link}>
            <img src={logEntry} alt="logo" />
            <h3>Log Entry</h3>
          </Link>
        </div>
        <div className="card" style={styles.card}>
          <Link to={"/qrExit"} style={styles.link}>
            <img src={logExit} alt="logo" style={{ width: 50 }} />
            <h3> Log Exit </h3>
          </Link>
        </div>
        <div className="card" style={styles.card}>
          <Link to={"/log"} style={styles.link}>
            <img src={showLog} alt="logo" />
            <h3>View Log</h3>
          </Link>
        </div>
        <div className="card" style={styles.card}>
          <button onClick={() => logouts()} style={styles.link}>
            <img src={logout} alt="logo" style={{ width: 40 }} />
            <h3>Logout</h3>
            </button>
        </div>
      </div>
    </>
  );
};

export default Home;
