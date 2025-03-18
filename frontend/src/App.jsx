import React, { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import EmailVerify from './Components/EmailVerify/EmailVerify'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/verification' element={<EmailVerify  />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App