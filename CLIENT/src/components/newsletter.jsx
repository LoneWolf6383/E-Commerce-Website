import styled from 'styled-components';
import React from 'react'
import { Send } from '@mui/icons-material';
import {Mobile} from '../responsive'

const Container = styled.div`  
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.div`  
    font-size: 70px;
    margin-bottom: 20px;
`;
const Description = styled.div`  
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${Mobile({textAlign:"center"})}
`;
const InputContainer = styled.div`  
    width: 25%;
    height: 40px;
    background-color:white;
    justify-content: center;
    display: flex;
    border: 2px solid lightgrey;
    border-radius:5px;
    ${Mobile({width:"80%"})}

`;
const Input = styled.input`  
    border:none;
    flex: 8;
    padding-left: 20px;
`;
const Button = styled.button`  
    flex: 1;
    border: none;
    background-color: teal;
    color:white;
`;

export const Newsletter = () => {
  return (
    <Container>
        <Title>News Letter</Title>
        <Description>Get timely Updates of your Favourite Products</Description>
        <InputContainer>
            <Input placeholder='Your E-mail'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}
