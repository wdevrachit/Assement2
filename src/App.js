import React from 'react'

import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'
import './Components/Assesment/Login'
import './Components/Assesment/Signup'
import './Components/Assesment/Dashboard'
import Login from './Components/Assesment/Login'
import Signup from './Components/Assesment/Signup'
import Dashboard from './Components/Assesment/Dashboard'
import './Components/Assesment/Login.css'

function App() {
  return (
    <Router>
      <div className='container'>
        
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Dashboard" element={<Dashboard/>}/>
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App