import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from 'styled-components';

const RegisterWrapper = styled.div`
    border: 1px solid black;
    width: 25rem;
    margin: 0 auto;
    margin-top: 200px;
    padding: 30px;
    background: #CFD8E6;
`

function Register () { 
    return (
        <RegisterWrapper>
            <Link to="/">
                <Button color="secondary" style={{marginBottom: "3%"}}>Back</Button>
            </Link>
            <Form>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="name" id="username" placeholder="username" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="email" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password" />
                </FormGroup>
                <Button color="primary">Create Account</Button>
            </Form>
        </RegisterWrapper>
    )
}

export default Register 