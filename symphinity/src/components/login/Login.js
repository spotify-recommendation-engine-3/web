import React, { useState } from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios';
import UserArtists from '../UserArtists';
import logo from './logo.jpg';
import '../../App.css';


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

    const Spotify = styled.div`
        margin: 0 auto;
        text-align: center;
        margin-top: 3%;
    `

    const Image = styled.div`
        margin-bottom:5%;
    `

function Login () {

    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    

    const handleSubmit = e => {
        e.preventDefault();
        axios
        .post('https://spotify-song-suggestor-be.herokuapp.com/api/auth/login', user)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user_id', response.data.user_id)
            console.log(response);
        })
        .catch(err => console.log(err.response));
    }

    const handleChanges = e => {
        e.preventDefault();
        setUser({...user, [e.target.name]: e.target.value });
    }

    return (
        <>
            <LoginBackground className="login-background">
                <LoginContainer className="login-container">
                    <Image>
                        <img style={{maxWidth: '333px'}} src={require('./logo.jpg')}/>
                    </Image>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>   
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="username" onChange={handleChanges} value={user.username} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password" onChange={handleChanges} value={user.password}/>
                        </FormGroup>
                        <ButtonContainer className="button-container"> 
                            <Button className="login-btn"color="success">LOG IN</Button>{' '}
                        </ButtonContainer>
                    </Form>
                </LoginContainer>
                    <Spotify>
                        <UserArtists />
                    </Spotify>
                    <ButtonContainer>
                        <Link to="/register">
                            <Button className="register-btn" color="primary" style={{margin: "0 auto",marginTop:"30px", width: "100px"}}>REGISTER</Button>{' '}
                        </Link>
                    </ButtonContainer>
            </LoginBackground>
        </>
    )
}

export default Login;