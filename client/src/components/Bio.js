import React from "react";
import styled from "styled-components";
import male from "../Assets/Images/male.png";

const Bio = () => {
  return (
    <>
      <ProfileWrapper>
        <Card>
          <img src={male} alt="" />
          <div>
            <h1>Your Name</h1>
            <p id="tag">Your Work</p>
            <hr />

            <p>
              <span>Age:</span> 26 Years
            </p>
            <p>
              <span>Email:</span> xyz@gmail.com
            </p>
            <p>
              <span>Work: </span> Web Developer
            </p>
            <p>
              <span>Hobbies: </span> Music
            </p>
          </div>
        </Card>
      </ProfileWrapper>
    </>
  );
};

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
`;

const Card = styled.div`
  width: 70%;
  display: flex;
  box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #fff;
  border-radius: 2rem;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  height: max-content;
  flex-wrap: wrap;
  img {
    height: 20rem;
    width: 20rem;
    object-fit: cover;
  }
  div {
    flex-basis: 25rem;
    padding: 1rem;
    #tag {
      font-family: cursive;
        font-style: italic;
      font-size: 1.1rem;
    }
    h1 {
      font-family: "Satisfy", "Poppins", cursive;
      color: #002070;
      letter-spacing: 0.3rem;
    }
    p {
      span {
        font-style: italic;
        font-weight: 500;
      }
      margin: 2rem 0;
    }
  }
`;
export default Bio;
