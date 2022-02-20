import styled from 'styled-components';
import React from 'react'
import Navbar from '../components/navbar';
import Announcements from '../components/announcements';
import { Products } from '../components/products';
import { Newsletter } from '../components/newsletter';
import { Footer } from '../components/footer';
import { Mobile } from '../responsive';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`
`;

const Title = styled.h1`
  bg
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${Mobile({margin:"0px 20px",display:"flex",flexDirection:"column"})}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
  ${Mobile({margin:"0px"})}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
  ${Mobile({margin:"10px 0px"})}

`;

const Option  = styled.option`
  
`;

export const ProductList = () => {
  
  const location = useLocation()
  const cat = location.pathname.split("/")[2] 
  const[ filters , setFilters] = useState({})

  const [sort , setsort] = useState("newest")



  const handleFilters = (e) =>{
    const value = e.target.value
    setFilters({
      ...filters,
      [e.target.name]:value
    })
  }
  console.log(filters)

  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Fitler Products:</FilterText>
                    <Select name='color' onChange={handleFilters}>
                        <Option>Color</Option>
                        <Option>white</Option>
                        <Option>red</Option>
                        <Option>green</Option>
                        <Option>blue</Option>
                    </Select>
                    <Select name='size' onChange={handleFilters}>
                        <Option>Size</Option>
                        <Option>small</Option>
                        <Option>medium</Option>
                        <Option>large</Option>
                    </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products: </FilterText>
                    <Select onChange={e=>setsort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
            </Filter>   
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
