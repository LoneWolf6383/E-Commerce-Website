import styled from 'styled-components';
import React from 'react'
import { Facebook, Instagram, Mail, PhoneCallbackOutlined, Room } from '@mui/icons-material';
import { Twitter } from '@material-ui/icons';
import {Mobile} from '../responsive'

const Container = styled.div`
  display: flex;
  ${Mobile({flexDirection:"column"})}
  
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${Mobile({display:"none"})}
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${Mobile({backgroundColor:"rgb(255, 255, 255)"})}

`;

const Logo = styled.h1`
  margin-left: 10px;
`;
const Description = styled.p`
  margin: 10px;
  margin-right: 10px;
  text-align: left; 
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  align-items: center;
  justify-content: center;
  margin:0px 5px;
`;

const Title = styled.h1`
  
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin: 5px 0px;
`;

const ContactItems = styled.div`

`;

const Payments = styled.div`
    
`

export const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Namass</Logo>
                <Description>
                    Hey thanks for visiting our website. I Hope you found
                    what you were looking for. If you guys need us to add
                    something please contact us <br/> 
                    at this e-mail support@gmail.com
                </Description>
            <SocialContainer>
                <SocialIcon  color='385999'>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon  color='E4405F'>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter  />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Amazon.in</ListItem>
                <ListItem>flipkart.com</ListItem>
                <ListItem>Snapdeal.com</ListItem>
                <ListItem>Shoppie.in</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItems>
                <Room style={{margin:"10px 5px 0px 5px"}}/>3/449-O,Bharathiyar street,Madurai-018
            </ContactItems>
            <ContactItems >
                <PhoneCallbackOutlined style={{margin:"10px 5px 0px 5px"}}/> +91 6383512055
            </ContactItems>
            <ContactItems style={{margin:""}}>
                <Mail style={{marginTop:"20px",marginRight:"10px"}}/>namas@gmail.com
            </ContactItems>
        </Right>
    </Container>
  )
}
