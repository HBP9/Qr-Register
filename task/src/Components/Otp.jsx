import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  let navigate = useNavigate();
  const submit = () => {navigate('/');}
  const styles={
    main:{
      height:'70vh',
      display:'flex',
      flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    },
    form:{
      height:'50vh',
      display:'flex',
      flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    },
    input:{
      height:56,
      width:308,
      border:'1px solid #3B60E4',
      padding:'20px',
      borderRadius:10,
      fontFamily:'Metropolis, Regular',
      fontWeight:900,
      fontSize:'18dp',
      marginTop:'30px'
    },
    h3:{color:'#3B60E4',fontSize:16,textAlign:'left',width:275, marginTop:'30px'},
    a:{
      width:308,
      textAlign:'right',
      color:'#3B60E4',
      textDecoration:'none'
    }
  }
  return (
    <>
        <div style={styles.main}>
            <form style={styles.form}>
            <h3 style={styles.h3}>You will have received an OTP on your registered number</h3>
            <input style={styles.input} type='number' placeholder='Verification Code' name='otp' autoComplete='off' />
            <a href='' style={styles.a} target="_blank">Resend OTP</a>
            <Button style={{height:46,width:308,marginTop:'20px'}} variant='contained' onClick={() => {submit()}}>Submit</Button><br />
            </form>
        </div>
    </>
  )
}

export default Otp;