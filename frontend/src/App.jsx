import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './Components/Signup/Signup'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App