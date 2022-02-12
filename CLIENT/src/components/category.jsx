import styled from 'styled-components';
import React from 'react';
import { categories } from '../data';
import { CategoryItems } from './categoryItems';
import { Mobile } from '../responsive';


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${Mobile({padding:"0px",flexDirection:"column"})}
`;


export const Categories = () => {
  return <Container>
      {categories.map(item=>(
          <CategoryItems item={item} key={item.id}></CategoryItems>
      ))}
  </Container>;
};
