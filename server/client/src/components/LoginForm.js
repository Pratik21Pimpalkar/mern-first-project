import React, { useState } from "react";
import login from "../Assets/Images/login.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate=useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let key, value;
  const loginInput = (e) => {
    key = e.target.name;
    value = e.target.value;
    setUser({...user, [key]: value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      console.log("Invalid Credentials ⚠️. Try Again!!");
      window.alert("Invalid Credentials ⚠️. Try Again!!");
    } else {
      console.log("User Login Successfully");
      window.alert("User Login Successfully");
      navigate("/")
    }
  };

  return (
    <>
      <FormBox>
        <FormWrapper>
          <img src={login} alt="" />

          <form method="POST" action="">
            <h1>Login Here</h1>

            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={loginInput}
              placeholder="Your Email Here"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={loginInput}
              placeholder="Your Password Here"
            />

            <button onClick={loginUser}>Login</button>
          </form>
        </FormWrapper>
      </FormBox>
    </>
  );
};

const FormBox = styled.div`
  display: flex;
  height: fit-content;
  /* background: linear-gradient(to bottom, #e8eff9, #ffffff, #f2fff3); */
  justify-content: center;
  width: 100%;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  align-items: center;

  @media screen and (max-width: 500px) {
    align-items: initial;
    img {
      object-fit: contain;
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

export default LoginForm;
