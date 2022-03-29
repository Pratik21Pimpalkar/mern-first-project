import React from "react";
import styled from "styled-components";

const Contactform = () => {
  return (
    <FormWrapper>
      <div className="formbox">
        <form action="">
          <h1>Contact Here</h1>
          <div className="row">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Your Name Here" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Your Email Here" />
            </div>
          </div>
          <label htmlFor="password">Message</label>
          <textarea placeholder="Your Message here" />
          <button>Send Message</button>
        </form>
      </div>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 33rem;
  .formbox {
    width: 70%;
  }
  form {
    margin-left: 3rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    @media (min-width: 500px) {
    .row {
        display: flex;
        gap: 2rem;
        
    }      
    }
    div {
      flex: 1;
    }
    label {
      margin-bottom: 0.1rem;
    }
    input {
      width: 100%;
    }

    textarea {
      resize: none;
      width: 100%;
      border-radius: 0.3rem;
      border: 1px solid #78a7af;
      padding: 0.8rem;
      outline: none;
      height: 7rem;
      font-family: sans-serif;
      &::placeholder {
        font-family: sans-serif;
        color: grey;
      }
    }
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
      &:hover,
      :active,
      :focus {
        transform: translateY(-0.3rem);
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
export default Contactform;
