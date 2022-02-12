import styled from 'styled-components';
import React from 'react'
import { Mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("../images/female-friends-out-shopping-together.jpg");
  /* https://www.freepik.com/free-photo/female-friends-out-shopping-together_2894602.htm#query=shopping&position=8&from_view=keyword */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${Mobile({width:"75%"})}

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap  : wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
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
  margin-left: 180px;
`;

export const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create  An Account</Title>
            <Form>
                <Input placeholder='first name'></Input>
                <Input placeholder='last name'></Input>
                <Input placeholder='username'></Input>
                <Input placeholder='email'></Input>
                <Input placeholder='password'></Input>
                <Input placeholder='confirm password'></Input>
                <Agreement>
                  By Creating an account , I consent to the processing of my perosnal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}
