import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from 'styled-components';

const RegisterWrapper = styled.div`
    border: 1px solid black;
    width: 25rem;
    margin: 0 auto;
    margin-top: 200px;
    padding: 30px;
`

function Register () {
    return (
        <RegisterWrapper>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">First Name</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="first name" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Last Name</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="last name" />
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
                <FormGroup check>
                    <Label check>
                    <Input type="checkbox" />{' '}
                        I have read and agree with the Term of Services
                    </Label>
                </FormGroup>
                <Button color="primary">Submit</Button>
            </Form>
        </RegisterWrapper>
    )
}

export default Register 