import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import styled from 'styled-components'

function Login () {
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

    return (
        <LoginBackground classNam="login-background">
            <LoginContainer className="login-container">
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Password" />
                    </FormGroup>
                    <ButtonContainer className="button-container">
                        <Button color="success">LOG IN</Button>{' '}
                    </ButtonContainer>
                </Form>
            </LoginContainer>

            <Button color="primary" style={{margin: "0 auto",marginTop:"30px", width: "100px"}}>SIGN UP</Button>{' '}
        </LoginBackground>
    )
}

export default Login;