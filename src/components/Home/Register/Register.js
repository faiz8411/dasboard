import React, { useState } from 'react';
import { Alert, Col, Row, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Registration = () => {
    const [loginData, SetLoginData] = useState({})
    const { registerUser, isLoading, user, authError } = useAuth()

    const navigate = useNavigate()


    const handleOnBlur = (e) => {
        const Field = e.target.name;
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[Field] = value
        SetLoginData(newLoginData)
        console.log(newLoginData)
        e.preventDefault()
    }
    const handleLoginSubmit = (e) => {

        if (loginData.password !== loginData.password2) {
            alert('password did not macth')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name)
        e.preventDefault()
    }
    return (
        <div>
            <Row>
                <Col xs={12} md={6} className='mt-5'>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input
                            style={{ width: '80%', margin: 20 }}
                            // defaultValue="email"
                            onChange={handleOnBlur}

                            name='name'
                            placeholder='user name'
                        /> <br />
                        <input
                            style={{ width: '80%', margin: 20 }}
                            // defaultValue="email"
                            onChange={handleOnBlur}
                            type="email"
                            name='email'
                            placeholder='email'
                        /> <br />
                        <input
                            style={{ width: '80%', margin: 10, borderBottom: '' }}
                            // defaultValue="password"
                            placeholder='password'
                            onChange={handleOnBlur}
                            name='password'
                            type="password" />

                        <br />
                        <input
                            style={{ width: '80%', margin: 10, borderBottom: '' }}
                            // defaultValue="password"
                            placeholder='password'
                            onChange={handleOnBlur}
                            name='password2'
                            type="password" />

                        <br />

                        {/* include validation with required or other standard HTML validation rules */}

                        {/* {errors.exampleRequired && <span>This field is required</span>} */}

                        <input type="submit" value="register" className='bg-success rounded text-white border-0 p-4' />
                    </form>}
                    {isLoading &&
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    }
                    {user?.email && <Alert  >
                        user create successfully
                    </Alert>}
                    {authError && <Alert  >
                        {authError}
                    </Alert>}
                </Col>
                <Col xs={12} md={6}>
                    <img className="img-fluid image-about" src="https://i.ibb.co/QPvBk3p/Support1.png" alt="" />
                </Col>

            </Row>
        </div>
    );
};

export default Registration;