import styled from  "styled-components"
import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from "../data";
import { Mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow:hidden;
  ${Mobile({display:"none"})}
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props=>props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const InfoContainer = styled.div`
  flex:1;   
  padding:50px;
  margin:0px 0px 0px 50px;
`;

const Image = styled.img`
height: 80%;
width: 100%;
padding: 10px 0px 0px 60px;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
transform: translateX(${props=>props.slideIndex*-100}vw);
`;

const Title = styled.h1`
  font-size:70px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-style: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const OpenBtn = styled.button`
  padding: 10px;
  font-style: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color:white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top:0;
  bottom: 0;
  left: ${props=>props.direction === "left" && "10px"};
  right: ${props=>props.direction === "right" && "10px"};
  margin: auto;
  z-index: 2;
`;

const Slider = () => {
  
  const [slideIndex,setSlideIndex]=useState(0)

  const handleClick=(direction)=>{
    if(direction==="left")
      setSlideIndex(slideIndex>0?slideIndex-1:2)
    else
      setSlideIndex(slideIndex<2?slideIndex+1:0)
  }

  return <div>
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined>
                    
                </ArrowLeftOutlined>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
              {sliderItems.map((item)=>(
            <Slide bg={item.bg}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <OpenBtn>Go Now</OpenBtn>
                    </InfoContainer>
            </Slide>
            ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined>

                </ArrowRightOutlined>
            </Arrow>
        </Container>
      </div>;
};

export default Slider;
