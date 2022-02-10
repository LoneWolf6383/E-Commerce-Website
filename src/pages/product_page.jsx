import styled from 'styled-components';
import React from 'react'
import Navbar from '../components/navbar';
import Announcements from '../components/announcements';
import { Newsletter } from '../components/newsletter';
import { Footer } from '../components/footer';
import { Remove , Add } from '@material-ui/icons'

const Container= styled.div`
  
`;
const Wrapper= styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex:1;
`;
const Image= styled.img`
`;
const InfoContainer = styled.div`
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 30px 0px;
  justify-content: space-between;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option`
  
`;

const AddContainer = styled.div`
  display: flex;
  align-content: center;
  width: 50%;
  justify-content: space-between;
  cursor:pointer;
`;
const AmountContainer = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border:2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
    cursor:pointer ;
    background-color: #7cecec;
  }
`;

export const Productpage = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <ImageContainer>
                <Image src="https://tinyurl.com/yc3u5ww4"/>
            </ImageContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Description>A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments.</Description>
                <Price>Rs.200</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="blue"/>
                            <FilterColor color="red"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>xXL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                      <AmountContainer>
                        <Remove/>
                          <Amount>1</Amount>
                        <Add></Add>
                      </AmountContainer>
                    <Button>Add to Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
