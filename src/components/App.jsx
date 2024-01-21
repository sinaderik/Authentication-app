import React from 'react'
import SignUp from './SignUp/SignUp'
import Dashboard from './Dashboard/Dashboard'
import Login from './Login/Login'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../context/AuthContext'
import { BrowserRouter as Router, Route, Routes,Outlet } from "react-router-dom"
import "../components/App.css"


export default function App() {

  return (

    <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: "100vh", maxWidth: "400px" }}>
      <div style={{ width: "600px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route
                path='/'
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route path='/signup' Component={SignUp} />
              <Route path='/login' Component={Login} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}
