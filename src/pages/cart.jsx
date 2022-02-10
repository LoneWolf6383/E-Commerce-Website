import styled from 'styled-components';
import React from 'react'
import Navbar from '../components/navbar';
import Announcements from '../components/announcements';
import { Footer } from '../components/footer';
import { Add, Remove } from '@material-ui/icons';
import { Mobile } from '../responsive';

const Container = styled.div`
  
`;

const Wrapper = styled.div`
  padding: 20px;
  ${Mobile({padding:"10px"})}

`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  margin: 0px 20px;
  border: ${props=>props.type==="filled" && "none"};
  background-color: ${props=>props.type==="filled" ? "black":"transparent"};
  color: ${props=>props.type==="filled" && "white"};
`;

const TopTexts = styled.div`
  ${Mobile({display:"none"})}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${Mobile({flexDirection:"column"})}
`;

const Info = styled.div`
  margin-left: 20px;
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${Mobile({flexDirection:"column"})}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  `;

const Image = styled.img`
  width: 200px;
  `;
const Details= styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  `;
const ProductName = styled.span`
  
  `;
const ProductId = styled.span`
  
  `;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color:${props=>props.color};
  `;
const ProductSize = styled.span`
  
  `;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px; 
  `;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${Mobile({margin:"5px 15px"})}
  `;
const ProductPrice = styled.div`
  font-size: 30px;
  border: none;
  height: 1px;
  margin-bottom:20px;
  ${Mobile({marginBottom:"40px",marginTop:"-20px"})}
  `;

const Hr = styled.hr`
  background-color: white;
  
  `;

  const Summary = styled.div`
    flex: 1;
    border-radius: 10px;
    border: 0.5px solid lightgray;
    padding: 20px;
    height: auto;
  `;

const  SummaryTitle= styled.h1`
    font-weight: 200;
`;
const  SummaryItem= styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type==="total" && "500"};
    font-size: ${props=>props.type==="total" && "24px"};
`;

const  SummaryItemText= styled.span``;
const  SummaryItemPrice= styled.span``;

const  SummaryButton= styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

export const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
            <Wrapper>
                <Title>Your Cart</Title>
                <Top>
                    <TopButton>Continue Shopping...</TopButton>
                    <TopTexts>
                        <TopText>Shopping Cart (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>CheckOut Now!</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src=""></Image>
                                <Details>
                                    <ProductName><b>Product:</b>Shirt</ProductName>
                                    <ProductId><b>Id:</b> 123454 </ProductId>
                                    <ProductColor color='black'></ProductColor>
                                    <ProductSize><b>Size:</b> 40 inches
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>Rs.800</ProductPrice>
                        </PriceDetail>
                        </Product>
                        <Hr></Hr>
                        <Product>
                            <ProductDetail>
                                <Image src=""></Image>
                                <Details>
                                    <ProductName><b>Product:</b>Shirt</ProductName>
                                    <ProductId><b>Id:</b> 123454 </ProductId>
                                    <ProductColor color='black'></ProductColor>
                                    <ProductSize><b>Size:</b> 40 inches
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>Rs.800</ProductPrice>
                        </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>Rs.9000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>Rs.-900</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Discount</SummaryItemText>
                            <SummaryItemPrice>Rs.-100</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem  type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>Rs.8000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>Check Out</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
        <Footer/>
    </Container>
  )
}
