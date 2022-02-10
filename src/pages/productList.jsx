import styled from 'styled-components';
import React from 'react'
import Navbar from '../components/navbar';
import Announcements from '../components/announcements';
import { Products } from '../components/products';
import { Newsletter } from '../components/newsletter';
import { Footer } from '../components/footer';

const Container = styled.div`
  
`;

const Title = styled.h1`
  
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option  = styled.option`
  
`;

export const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Fitler Products:</FilterText>
                    <Select>
                        <Option>Color</Option>
                        <Option>White</Option>
                        <Option>Red</Option>
                        <Option>Green</Option>
                        <Option>Blue</Option>
                    </Select>
                    <Select>
                        <Option>Size</Option>
                        <Option>small</Option>
                        <Option>medium</Option>
                        <Option>large</Option>
                    </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products: </FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
            </Filter>   
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
