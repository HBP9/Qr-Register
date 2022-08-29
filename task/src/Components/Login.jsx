import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  let navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    phone: "",
    pwd: "",
  });
  const submit = async () => {
    if (loginData.phone === "" || loginData.pwd === "") {
      alert("All fields are required");
    }
    if (loginData.phone.length > 10) {
      alert("Please Enter Valid Number");
    }
    await Axios.post(
      "http://localhost:5000/user/login",
      loginData
    ).then((response) => {
      if (response.data.user) {
        console.log(response.data.user)
        Cookies.set("jwt", response.data.jwtToken);
        Cookies.set("user",JSON.stringify(response.data.user));
        navigate("/Home");
      } else {
        alert(response.data.msg);
      }
    });
  };
  const loginInput = (event) => {
    const { value, name: loginData } = event.target;
    setLoginData((preVal) => {
      if (loginData === "phone") {
        return {
          phone: value,
          pwd: preVal.pwd,
        };
      } else if (loginData === "pwd") {
        return {
          phone: preVal.phone,
          pwd: value,
        };
      }
    });
  };

  const styles = {
    main: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      height: "100vh",
    },
    form: {
      height: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      alignContent: "center",
      width: 310,
    },
    input: {
      height: 56,
      width: 308,
      border: "1px solid #3B60E4",
      padding: "20px",
      borderRadius: 10,
      fontFamily: "Metropolis, Regular",
      fontWeight: 900,
    },
  };
  return (
    <>
      <div style={styles.main}>
        <form style={styles.form}>
          <input
            style={styles.input}
            type="number"
            placeholder="Mobile Number"
            name="phone"
            autoComplete="off"
            value={loginData.phone}
            onChange={loginInput}
          />
          <br />
          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            name="pwd"
            autoComplete="off"
            value={loginData.pwd}
            onChange={loginInput}
          />
          <br />
          <Button
            style={{ height: 56, width: 308 }}
            onClick={() => {
              submit();
            }}
            variant="contained"
          >
            Login
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
