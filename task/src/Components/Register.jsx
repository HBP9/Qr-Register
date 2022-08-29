import { Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
const Register =  () => {
    let navigate = useNavigate();
    const [data,setData] = useState({
        phone : '',
        name : '',
        soc : '',
        pwd : '',
        cnf_pwd : ''
    });
    const submit=async()=>{
        if (data.phone === ''  || data.name === ''|| data.soc === ''|| data.pwd === ''|| data.cnf_pwd === ''){
            alert('All fields are required');
            return;
        }
        if (data.phone.length > 10){
            alert('Please Enter Valid Number');
            return;
        }
        if (data.pwd !== data.cnf_pwd){
            alert('Password Does Not Match');
            return;
        }
        const response =await Axios.post('http://localhost:5000/user/register',data)
        if(response.data.msg==='Registered Successfullly'){
            navigate('/Otp');
        }else{alert(response.data.msg)}
    }
    const inputEvent = (event) => {
        const {value,name:data} = event.target;
        setData((preVal) => {
            if(data === 'phone'){
                return{
                    phone : value,
                    name : preVal.name,
                    soc : preVal.soc,
                    pwd : preVal.pwd,
                    cnf_pwd : preVal.cnf_pwd
                };
            }else if(data === 'name'){
                return{
                    phone : preVal.phone,
                    name : value,
                    soc : preVal.soc,
                    pwd : preVal.pwd,
                    cnf_pwd : preVal.cnf_pwd
                };
            }else if(data === 'soc'){
                return{
                    phone : preVal.phone,
                    name : preVal.name,
                    soc : value,
                    pwd : preVal.pwd,
                    cnf_pwd : preVal.cnf_pwd
                };
            }else if(data === 'pwd'){
                return{
                    phone : preVal.phone,
                    name : preVal.name,
                    soc : preVal.soc,
                    pwd : value,
                    cnf_pwd : preVal.cnf_pwd
                };
            }else if(data === 'cnf_pwd'){
                return{
                    phone : preVal.phone,
                    name : preVal.name,
                    soc : preVal.soc,
                    pwd : preVal.pwd,
                    cnf_pwd : value
                };
            }
        })
    }
    const styles={
        main:{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          flexDirection:'column',
          height:'100vh'
        },
        form:{
          height:'80vh',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          flexDirection:'column',
          alignContent:'center',
          width:310,
          marginTop:70
        },
        input:{
          height:56,
          width:308,
          border:'1px solid #3B60E4',
          padding:'20px',
          borderRadius:10,
          fontFamily:'Metropolis, Regular',
          fontWeight:900,
          fontSize:'18dp'
        }
      }
  return (
    <>
    <div style={styles.main}>
        <form style={styles.form}>
            <input style={styles.input} type='number' placeholder='Mobile Number' name='phone' autoComplete='off'  value={data.phone} onChange={inputEvent} /><br />
            <input style={styles.input} type='text' placeholder='Name' name='name' autoComplete='off' value={data.name} onChange={inputEvent} /><br />
            <select style={styles.input} name='soc' value={data.soc} onChange={inputEvent}>
                <option value=''>Select Society</option>
                <option value='Oberoi'>Oberoi</option>
                <option value='Lashkariya'>Lashkariya</option>
                <option value='Raheja'>Raheja</option>
                <option value='Sky Heights'>Sky Heights</option>
            </select><br />
            <input style={styles.input} type='password' placeholder='Password' name='pwd' autoComplete='off' value={data.pwd} onChange={inputEvent} /><br />
            <input style={styles.input} type='password' placeholder='Confirm Password' name='cnf_pwd' autoComplete='off' value={data.cnf_pwd} onChange={inputEvent} /><br />
            <Button style={{height:56,width:308}} onClick={()=>{submit()}} variant='contained'>Submit</Button> 
        </form>
    </div>
    </>
  )
}

export default Register;