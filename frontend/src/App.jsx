import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App