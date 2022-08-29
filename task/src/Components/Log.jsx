import { Button } from "@mui/material";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import Axios from "axios";

const Log = () => {
  const [type, setType] = React.useState("entry");
  const [entryData, setEntryData] = React.useState([]);
  const [exitData, setExitData] = React.useState([]);
  const fetch = async () => {
    await Axios.get("http://localhost:5000/user/fetchLogs", {
      headers: {
        "x-auth-token": Cookies.get("jwt"),
      },
    }).then((response) => {
      response.data.map((element) => {
        if (element.task == "entry") {
          entryData.push(element);
        } else {
          exitData.push(element);
        }
      });
      console.log(entryData, exitData);
    });
  };
  useEffect(() => {
    fetch();
  }, []);

  const styles = {
    main: {
      width: "100%",
      height: "100vh",
      background: `linear-gradient(180deg, #3B60E4 50%, #F7F8FA 50%)`,
      display: "flex",
      flexDirection: "column",
    },
    dates: {
      height: "24vh",
      backgroundColor: "#3B60E4",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
    },
    logs: {
      height: "73vh",
      backgroundColor: "#F7F8FA",
    },
    buttonDiv: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    input: {
      height: "56px",
      width: "158px",
      margin: `10px 10px 10px 10px`,
      padding: "0px 10px 0px 10px",
    },
    buttons: {
      margin: "0px 20px 0px 20px",
      color: "#fff",
      fontSize: "large",
    },
    button: {
      width: "158px",
    },
    logBody: {
      width: "358px",
      height: "67px",
      display: "flex",
      justifyContent: "space-between",
      boxShadow: "0 3px 10px #00000029",
      borderRadius: "8px",
      margin: "10px",
    },
    time: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: 10,
    },
    name: {
      margin: 10,
      justifyContent: "center",
    },
  };
  return (
    <>
      <div style={styles.main}>
        <div style={styles.dates}>
          <div>
            <h1 style={{ color: "white", margin: "10px" }}>Logs</h1>
          </div>
          <div>
            <input style={styles.input} placeholder="Start Date"></input>
            <input style={styles.input} placeholder="End Date"></input>
          </div>
          <div style={styles.buttonDiv}>
            <div style={styles.button}>
              <Button
                exact
                style={styles.buttons}
                onClick={() => setType("entry")}
              >
                Entry
              </Button>
            </div>
            <div style={styles.button}>
              <Button
                exact
                style={styles.buttons}
                onClick={() => setType("exit")}
              >
                Exit
              </Button>
            </div>
          </div>
        </div>
        {entryData!==[] ?(
        <div style={styles.logs}>
<>
          {type === "entry" ? (
            <div>
              {entryData.map((element) => {
                return (
                  <div style={styles.logBody}>
                    <div style={styles.name}>
                      <p>{element.name}</p>
                      <p>{element.society}</p>
                    </div>
                    <div style={styles.time}>{element.time}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              {exitData.map((element) => {
                return (
                  <div style={styles.logBody}>
                    <div style={styles.name}>
                      <p>{element.name}</p>
                      <p>{element.society}</p>
                    </div>
                    <div style={styles.time}>{element.time}</div>
                  </div>
                );
              })}
            </div>
          )}</>
        </div>
        ):null}
      </div>
    </>
  );
};

export default Log;
