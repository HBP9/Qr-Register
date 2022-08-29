import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import homebg from '../images/homebg.png'

  const Start = () => {
  let navigate = useNavigate();
  const styles = {
    link:{  
      display:'flex',
      flexDirection:'column',
      marginTop:50 
    },
    button:{
      width:250
    }
  }
  return (
    <>
    <div className='start'>
    <div className='image'>
      <img src ={homebg} alt='logo'/>
    </div>
    <div className='links' style={styles.link}>
      <Button variant="contained" onClick={()=>navigate('/login')} style={styles.button}>Log In</Button><br />
      <Button variant="contained" onClick={()=>navigate('/register') } style={styles.button}>Register</Button>
    </div>
    </div>
    </>
  )
}

export default Start;