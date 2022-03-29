import React from "react";
import register from "../Assets/Images/register.webp";
import styled from "styled-components";

const SignupForm = () => {
  return (
    <>
      <FormBox>
        <FormWrapper>
          <form action="">
            <h1>Register Here</h1>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Your Name Here" />
            <label htmlFor="email">Email</label>
            <input type="text" name="email"  placeholder="Your Email Here" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password"  placeholder="Your Password Here" />
            <label htmlFor="cfpassword">Confirm Password</label>
            <input type="password" name="cfassword"  placeholder="Your Confirm Password Here" />
            <label htmlFor="work">Work</label>
            <input type="text" name="work"  placeholder="Your Work Here"/>
            <button>Register</button>
          </form>

          <img src={register} alt="" />
        </FormWrapper>
      </FormBox>
    </>
  );
};

const FormBox = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(to bottom, #e8eff9, #ffffff, #f2fff3);
  justify-content: center;
  width: 100%;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  width: 80%;
  align-items: center;

  img {
      /* object-fit: contain; */
      width: 58%;
    }
  @media screen and (max-width: 700px){
    align-items: initial;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
  form {
    margin-left: 3rem;
    display: flex;
    flex: 1;
    flex-direction: column;

    h1 {
      font-family: "Montserrat";
      font-size: 2.5rem;
      color: #00344d;
    }

    button {
      width: fit-content;
      margin-top: 1.7rem;
      padding: 0.6rem 0.8rem;
      font-weight: 500;
      color: indigo;
      font-family: "Montserrat";
      cursor: pointer;
      background: linear-gradient(to right, #acb6e5, #86fde8);
      border-radius: 0.7rem;
      border: 1px solid #b195ff;
      font-size: 1.1rem;
      transition: 0.5s ease-in-out all;
      &:hover,:active,:focus{
      transform:  translateY(-0.3rem);
      background: linear-gradient(to left, #acb6e5, #86fde8);

      }
    }

    label {
      padding: 0.31rem 0;
    }
    input {
      border: 1px solid #78a7af;
      border-radius: 0.3rem;
      padding: 0.8rem;
      &:active,
      &:hover,
      &:focus {
        outline: none;
      }
    }
  }
`;

export default SignupForm;
