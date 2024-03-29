import React from 'react'
import { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext';
import { Link,useNavigate } from 'react-router-dom';
import "../../components/App.css"

export default function Login() {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth()
    const navigate = useNavigate();
    // const history = useHistory();

    async function handelSubmit(e) {
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            // history.push("/")
            navigate("/")
            // redirect("/")
        } catch (error) {
            // console.error('Error during signup:', error);
            setError(`Failed to sign in ! ${error}`);
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Log in</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handelSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required />
                        </Form.Group>

                        <Button disabled={loading} className='w-100 mt-4' type='submit'>Log in</Button>
                    </Form>
                    <div className='w-100 mt-3 text-center'>
                        <Link to="/forgot-password">Forgot Password ?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
               Need an account ? <Link to="/signup">Sign up</Link> 
            </div>
        </>
    )
}
