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
                    <Label for="firstName">First Name</Label>
                    <Input type="text" name="name" id="firstName" placeholder="first name" />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input type="text" name="name" id="lastName" placeholder="last name" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="email" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password" />
                </FormGroup>
                {/* <FormGroup>
                    <Label for="exampleFile">Upload a Profile Image</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                    This is some placeholder block-level help text for the above input.
                    It's a bit lighter and easily wraps to a new line.
                    </FormText>
                </FormGroup> */}
                <Button color="primary">Submit</Button>
            </Form>
        </RegisterWrapper>
    )
}

export default Register 