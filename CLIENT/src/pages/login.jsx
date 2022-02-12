import styled from 'styled-components';
import React from 'react'
import { Mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("../images/female-friends-out-shopping-together.jpg");
  /* https://www.freepik.com/free-photo/female-friends-out-shopping-together_2894602.htm#query=shopping&position=8&from_view=keyword */
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${Mobile({width:"75%"})}

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
width: 40%;
  border:none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export const LogIn = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder='username'></Input>
                <Input placeholder='password'></Input>
                <Button>Log In</Button>
                <Link>Forgot your password?</Link>
                <Link>First time here? Create a new Account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}
