import { React, useState,useEffect } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'


export default function Dashboard() {
  
  const { currentUser, logout } = useAuth()
  const [error, setError] = useState("")
  const navigate = useNavigate();

  async function handleLogOut() {
    setError("");
    try {
      await logout();
      navigate("/login")
    } catch {
      setError("Failed to log Out ")
    }

  }

  return (
    <>
      <h1>dashboard</h1>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong className='d-block w-100 text-center'>Email: {currentUser.email}</strong>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
        </Card.Body>
      </Card>

      <div className='w-100 text-center mt-2'>
        <Button variant="link" onClick={handleLogOut}>Log out</Button>
      </div>
    
    </>
  )
}
