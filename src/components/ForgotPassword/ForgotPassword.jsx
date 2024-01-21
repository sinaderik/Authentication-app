import React from 'react'
import { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext';
import { Link,useNavigate } from 'react-router-dom';
import "../../components/App.css"

export default function ForgotPassword() {
    const [error, setError] = useState('')
    const [message,setMessage]=useState('')
    const [loading, setLoading] = useState(false)
    const emailRef = useRef();
    const { resetPassword } = useAuth()
    const navigate = useNavigate();

    async function handelSubmit(e) {
        e.preventDefault();

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
            emailRef.current.value=""
            // navigate("/")
        } catch (error) {
            setError(`Failed to reset password ! ${error}`);
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Reset Password</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handelSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>

                        <Button disabled={loading} className='w-100 mt-4' type='submit'>Reset Password</Button>
                    </Form>
                    <div className='w-100 mt-3 text-center'>
                        <Link to="/login">Login</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
               Need an account ? <Link to="/signup">Sign up</Link> 
            </div>
        </>
    )
}
