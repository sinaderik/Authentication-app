import React from 'react'
import SignUp from './SignUp/SignUp'
import { Container } from 'react-bootstrap'

export default function App() {
  return (
    <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: "100vh", maxWidth:"400px" }}>
     
      <div style={{ width: "600px" }}>
        <SignUp />
      </div>
    </Container>
  )
}
