import Cookies from "js-cookie";
import React from "react";
import { QrReader } from "react-qr-reader";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from 'moment'

const QrExit = () => {
  let navigate = useNavigate();
  var user = JSON.parse(Cookies.get("user"));
  const styles = {
    code: {
    width: '70%',
    height: '80vh',
    position: 'relative',
    top: '200px',
    left: '60px',
    }
  }
  return (
    <div style={styles.code}>
      <QrReader
        onResult={async (result, error) => {
          if (!!result) {
            const response = await Axios.post(
                result.text,
              {
                name: user.name,
                society: user.society,
                time:  moment().format(' h:mm a'),
                task: "exit",
                user: user._id,
              },
              {
                headers: {
                  "x-auth-token": Cookies.get("jwt"),
                },
              }
            )
            if(response.data.msg==='logged Succesfully'){
                navigate(`/thank/${user.society}`)
            }
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default QrExit;
