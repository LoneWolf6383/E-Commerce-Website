import React from "react";
import styled from "styled-components";
import { ShoppingCartOutlined } from "@material-ui/icons";
import SearchIcon from '@material-ui/icons/Search';
import { Badge } from "@material-ui/core";
import { Mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${Mobile({backgroundColor:"white"})}
`
const Wrapper = styled.div`
  align-content: center;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${Mobile({padding:"10px 0px"})}
`
const Left = styled.div`
  flex: 1; //sets 33.3% space for left
`
const Center = styled.div`
  flex: 1; //sets 33.3% space for left
  text-align:center;
`
const Right = styled.div`
  flex: 1; //sets 33.3% space for left
  display:flex;
  align-items:center;
  justify-content:flex-end;
  ${Mobile({flex:2,justifyContent:"center"})}
`

const SearchContainer = styled.div`
  border: 2px solid black;
  margin-left: 25px;
  padding: 5px;
  align-items:center;
  display:flex;
  width:auto;
`
const Input = styled.input`
  width: 100%;
  border: none;
  ${Mobile({width:"50px"})}
`
const Logo = styled.div`
  cursor:pointer;
  font-weight:bold;
  ${Mobile({justifyContent:"center"})}
`;
const MenuItem = styled.div`
  font-size:14px;
  cursor:pointer;
  margin-left:25px;
  ${Mobile({fontSize:"12px",marginLeft:"10px"})}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Search"></Input>
            <SearchIcon></SearchIcon>
          </SearchContainer>
        </Left>
        <Center><Logo>E-Com</Logo></Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sdsign UP</MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartOutlined color="primary" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
