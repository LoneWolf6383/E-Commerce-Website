import styled from 'styled-components';
import React from 'react';
import { FavoriteBorderOutlined,SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons/index';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const Info  = styled.div`
  opacity: 0;
  width:100%;
  height: 100%;
  position: absolute;
  top:0;
  left: 0;
  background-color:rgba(0,0,0,0.3);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;
const Container = styled.div`
  flex:1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:rgba(160,210,210,1);
  position:relative;
  &:hover ${Info}{
    opacity: 1;
  }
  cursor: pointer;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const  Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;

  &:hover{
      background-color:white;
      transform:scale(1.2)
  }
`;

const Circle = styled.div`
  width:200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
export const Product = ({item}) => {
  return <Container>
      <Circle></Circle>
      <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                  <Link to={`/product/${item._id}`}>
                    <SearchOutlined/>
                  </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
  </Container>
}
