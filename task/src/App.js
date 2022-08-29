import React from 'react';
import Start from './Components/Start';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import Otp from './Components/Otp';
import Home from './Components/Home';
import Log from './Components/Log';
import Thank from './Components/Thank';
import './index.css';
import Welcome from './Components/Welcome';
import QrEntry from './Components/QrEntry';
import QrExit from './Components/QrExit';
import {PrivateRoute} from './Components/PrivateRoute'

const App = () => {
  return (
    <>
    <div className='main'>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Start />}>   </Route>
      <Route exact path='/login' element={<Login />}></Route>
      <Route exact path='/register' element={<Register />}></Route>
      <Route exact path='/Otp' element={<Otp />}></Route>
      <Route exact path='/Home' element={ <PrivateRoute><Home /></PrivateRoute>}></Route>
      <Route exact path='/log' element={ <PrivateRoute><Log /></PrivateRoute>}></Route>
      <Route exact path='/thank/:society' element={ <PrivateRoute><Thank /></PrivateRoute>}></Route>
      <Route exact path='/welcome/:society' element={ <PrivateRoute><Welcome /></PrivateRoute>}></Route>
      <Route exact path='/qrEntry' element={ <PrivateRoute><QrEntry /></PrivateRoute>}></Route>
      <Route exact path='/qrExit' element={ <PrivateRoute><QrExit /></PrivateRoute>}></Route>
    </Routes>
  </BrowserRouter>
  </div>
  </>
  )
}

export default App;