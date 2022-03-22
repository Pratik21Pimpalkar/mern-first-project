import React from "react";
import female from "../Assets/Images/female.png"
import male from "../Assets/Images/male.png"
import styled from "styled-components";

const Home = () => {
  return (
    <HomeWrap>
      <ImgDiv >
      <img src={male} alt="" srcset="" />
      </ImgDiv>
      <h1>
        Hello There!! <br />
        <span>Your Good Name Here!</span>
      </h1>
    </HomeWrap>
  );
};

const ImgDiv = styled.div`
  height: 17rem;
  margin: 2rem;
  width: 17rem;
  border-radius: 50%;
  img{
    width: 100%;
  }
 
  
`;

const HomeWrap = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: #00005a;
    font-family: "Poppins";
    text-align: center;
    span {
      font-family: "Satisfy", cursive;
      color: #0c00dc;
      font-size: 3rem;
      font-weight: 400;
      letter-spacing: 0.4rem;
    }
  }
`;

export default Home;
