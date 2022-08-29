import { Button } from '@mui/material';
import React from 'react';
import ty from '../images/ty.png'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Thank = () => {
  let navigate = useNavigate();
  let params = useParams();
  const styles={
    screen:{
      height:'100vh',
      width:'100vw',
      backgroundColor:'#3B60E4',
      display:'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-evenly'
    }
  }
   
  return (
    <div style={styles.screen}>
    <div style={{width:400,height:200,display:'flex',alignItems:'center',justifyContent:'center'}}>
    <img src={ty} alt='ty' />
    </div>
    <div>
        <h1 style={{color:'#fff',textAlign:'center'}}> Thank You For Visiting <span>{params.society}</span> </h1>
    </div>
        <Button style={{width:265,height:48}} variant='contained' color="secondary" onClick={() => {navigate("/Home")}}> Okay </Button>
    </div>

  )
}

export default Thank;