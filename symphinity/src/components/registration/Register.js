import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from 'styled-components';
import axios from 'axios';


const RegisterWrapper = styled.div`
    border: 1px solid black;
    width: 25rem;
    margin: 0 auto;
    margin-top: 200px;
    padding: 30px;
    background: #CFD8E6;
`

function Register () { 

    const [user, setUser] = useState([ 
        {
            username: '',
            email: '',
            password: ''
        }
    ]); 

    const submitForm = e => { 
        e.preventDefault();
        console.log(user);


        axios.post('https://spotify-song-suggestor-be.herokuapp.com/api/auth/register', {
            username: user.username,
            email: user.email,
            password: user.password
        } )
        .then(function (response) {
            console.log(response);
            localStorage.setItem('user', response);
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    const handleChanges = e => {
        setUser({...user, [e.target.name]: e.target.value });
        // console.log(e.target.value);
    } 

    return (
        <RegisterWrapper>
            <Link to="/">
                <Button color="secondary" style={{marginBottom: "3%"}}>Back</Button>
            </Link>
            <Form onSubmit={submitForm}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="username" placeholder="username" onChange={handleChanges} value={user.name} />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="email" onChange={handleChanges} value={user.email}/>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password" onChange={handleChanges} value={user.password}/>
                </FormGroup>
                <Button color="primary">Create Account</Button>
            </Form>
        </RegisterWrapper>
    )
}

export default Register 