import React from 'react'
import SignUp from './SignUp/SignUp'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../context/AuthContext'

export default function App() {
  return (
    <AuthProvider>

      <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: "100vh", maxWidth: "400px" }}>
        <div style={{ width: "600px" }}>
          <SignUp />
        </div>
      </Container>

    </AuthProvider>
  )
}
