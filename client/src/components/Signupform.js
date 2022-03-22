import React from "react";
import styled from "styled-components";

const SignupForm = () => {
  return (
    <FormWrapper>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" />
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" />
        <label htmlFor="work">Work</label>
        <input type="text" name="work" />
      </form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
display: flex;
align-items: center;
height: 100%;
justify-content: center;
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
        padding: 0.5rem;
        &:active,&:hover,&:focus{
            outline: none;
        }
    }
}`;

export default SignupForm;
