import React, { useState } from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import styled from 'styled-components'
import axios from 'axios';
import logo from '../../images/logo.png';
import '../../App.css';


const LoginContainer = styled.div`
        border: 1px solid black;
        width: 25rem;
        margin: 0 auto;
        margin-top: 50px;
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
    `

    const Spotify = styled.div`
        margin: 0 auto;
        text-align: center;
        margin-top: 3%;
    `

    const Image = styled.div`
        margin-bottom:5%;
    `

function Login (props) {

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
            alert('Logged In. Please Link your Spotify Account.')
            setUser({
                username: '',
                password: ''
            })
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
                        <img alt='logo' style={{maxWidth: '333px'}} src={logo}/>
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
                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <ButtonContainer className="button-container"> 
                                <Button className="login-btn"color="success">LOG IN</Button>{' '}
                            </ButtonContainer>
                            <ButtonContainer className="button-container"> 
                                <a href='https://oauth-spotify-backend.herokuapp.com/login'>
                                    <button type='button'>Link your <i className="fab fa-spotify"></i></button>
                                </a>
                            </ButtonContainer>
                        </div>
                            {/* <a href='http://localhost:8888/login'>
                                <button>Link your <i className="fab fa-spotify"></i></button>
                            </a>  */}
                            {/* <Link to="/register">
                                <Button className="register-btn" color="primary" style={{margin: "0 auto", width: "100px"}}>REGISTER</Button>{' '}
                            </Link> */}
                    </Form>
                </LoginContainer>
            </LoginBackground>
        </>
    )
}

export default Login;