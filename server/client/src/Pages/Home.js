import React, { useEffect, useState } from "react";
import male from "../Assets/Images/male.png";
import styled from "styled-components";

const Home = () => {
  const [userdata, setUserData] = useState("");

  const userDetails = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setUserData({ name: data.name });
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userDetails();
  }, []);
  return (
    <HomeWrap>
      {userdata.name == null ? (
        <div>
          <h1>Please Login</h1>
          <h1>
            <span></span>
            <br />
            <p>This is the MERN Project</p>
          </h1>
        </div>
      ) : (
        <div>
          <ImgDiv>
            <img src={male} alt="" srcSet="" />
          </ImgDiv>
          <h1>Hello There!!</h1>
          <h1>
            <span>{userdata.name}</span>
            <br />
            <p>Pleased to you again!!</p>
          </h1>
        </div>
      )}
    </HomeWrap>
  );
};

const ImgDiv = styled.div`
  height: 17rem;
  margin: 2rem;
  width: 17rem;

  border-radius: 50%;
  img {
    /* box-shadow: 5px 5px 15px #3c5b8f, -5px -5px 15px #6b73e3; */
    width: 100%;
    filter: drop-shadow(5px 5px 15px #373d99);
  }
`;

const HomeWrap = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  h1 {
    color: #00005a;
    font-family: "Poppins";
    text-align: center;
    span {
      font-family: "Satisfy", cursive;
      color: #fff;
      font-weight: 700;
      font-size: 4.2rem;
      letter-spacing: 0.4rem;
    }
    p {
      font-family: cursive;
      color: #d9fbff;
      font-size: 1.4rem;
    }
  }
`;

export default Home;
