import styled from 'styled-components';
import React from 'react';
import { categories } from '../data';
import { CategoryItems } from './categoryItems';


const Container = styled.div`
display: flex;
`;


export const Categories = () => {
  return <Container>
      {categories.map(item=>(
          <CategoryItems item={item} key={item.id}></CategoryItems>
      ))}
  </Container>;
};
