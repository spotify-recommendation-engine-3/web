import React from 'react'
import styled from 'styled-components';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';


function Register () {
    const SignUpBackground = styled.div`
        background: #CFD8E6;
        height: 100vh;
        position: absolute;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const SingUpContainer = styled.div`
        border: 1px solid black;
        width: 25rem;
        margin: 0 auto;
        margin-top: 200px;
        padding: 30px;     
        display: flex;
        flex-direction: column; 
    `

    const ButtonContainer = styled.div`
        display: flex;
        justify-content: center;
    `

    return (
        <SignUpBackground className="signup-bg">
            <SingUpContainer className="login-container">
                <h2 style={{margin: "10px auto"}}>Sign Up</h2>
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
                        <Button color="primary" style={{width: "100px"}}>SIGN UP</Button>
                    </ButtonContainer>
                </Form>
            </SingUpContainer>
        </SignUpBackground>
    )
}

export default Register