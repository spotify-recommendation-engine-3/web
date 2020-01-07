import React, { useState } from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Login () {

    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const LoginContainer = styled.div`
        border: 1px solid black;
        width: 25rem;
        margin: 0 auto;
        margin-top: 200px;
        padding: 30px;        
    `

    const LoginBackground = styled.div`
        background: #CFD8E6;
        height: 100vh;
        position: absolute;
        width: 100vw;
        display: flex;
        flex-direction: column;
    `

    const ButtonContainer = styled.div`
        display: flex;
        justify-content: space-around;
    `

    const handleSubmit = e => {
        e.preventDefault();
        axios
        .post('https://spotify-song-suggestor-be.herokuapp.com/api/auth/login', user)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            alert('Yay! Logged In!')
        })
        .catch(err => console.log(err.response));
    }

    const handleChanges = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    return (
        <LoginBackground classNam="login-background">
            <LoginContainer className="login-container">
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" value={user.password} onChange={handleChanges} name="username" id="username" placeholder="Username" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" onChange={handleChanges} value={user.password} name="password" id="password" placeholder="Password" />
                    </FormGroup>
                    <ButtonContainer className="button-container">
                        <Button color="success">LOG IN</Button>{' '}
                    </ButtonContainer>
                </Form>
            </LoginContainer>

            <Link to="/register">
                <ButtonContainer>
                    <Button color="primary" style={{margin: "0 auto",marginTop:"30px", width: "100px"}}>SIGN UP</Button>{' '}
                </ButtonContainer>
            </Link>
        </LoginBackground>
    )
}

export default Login;