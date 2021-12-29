import React, { useRef, useState } from 'react';
import { Alert, Button, Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [loginData, SetLoginData] = useState({})
    const { user, loginUser, isLoading, signWithGoogle, authError, forgotPassword } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const emailRef = useRef();
    const psdRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = psdRef.current.value;
        if (email && password) loginUser(email, password);
    };



    const handleGoogleSignIn = () => {
        signWithGoogle(location, navigate)
    }
    const forgotPasswordHandler = () => {
        const email = emailRef.current.value;
        if (email)
            forgotPassword(email).then(() => {
                emailRef.current.value = "";
            });
    };


    return (
        <div>
            <Row>
                <Col xs={12} md={6} className='mt-5'>
                    <form onSubmit={onSubmit}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input
                            style={{ width: '80%', margin: 20 }}
                            // defaultValue="email"
                            // 
                            ref={emailRef}
                            type="email"
                            name='email'
                            placeholder='email'
                        /> <br />
                        <input
                            style={{ width: '80%', margin: 10, borderBottom: '' }}
                            // defaultValue="password"
                            placeholder='password'
                            // onChange={handleOnChange}
                            ref={psdRef}
                            name='password'
                            type="password" />

                        <br />

                        {/* include validation with required or other standard HTML validation rules */}

                        {/* {errors.exampleRequired && <span>This field is required</span>} */}

                        <input type="submit" value="login" onClick={onSubmit} className='bg-success rounded text-white border-0 p-2' /> <button className='bg-primary rounded text-white border-0 -2' onClick={handleGoogleSignIn}>google sign in</button><br />
                        <Link to="/register"><Button style={{ textDecoration: "none" }} variant="link">are new user?please signUp</Button></Link><br />
                        <Button style={{ textDecoration: "none" }} onClick={forgotPasswordHandler} variant="link">forget password?</Button>


                        {isLoading &&
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>}
                        {user?.email && <Alert>
                            user create successfully
                        </Alert>}
                        {/* {authError && <Alert  >
                            {authError}
                        </Alert>} */}
                    </form>
                </Col>
                <Col xs={12} md={6}>
                    <img className="img-fluid image-about" src="https://i.ibb.co/QPvBk3p/Support1.png" alt="" />
                </Col>

            </Row>
        </div>
    );
};

export default Login;