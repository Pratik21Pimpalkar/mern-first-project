import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Contactform = () => {
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const userDetails = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData({...userdata,name: data.name,email: data.email});
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
  });

  const sendMessage = async (e) => {
    e.preventDefault();
    const { name, message, email } = userdata;
    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message, email }),
      });

      const data = await res.json();
      if (!data) {
        console.log("Message not send");
      } else {
        window.alert("message send successfully");
        setUserData({ ...userdata, message: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({...userdata,[name]:value})
  };

  return (
    <FormWrapper>
      <div className="formbox">
        <form action="" method="POST">
          <h1>Contact Here</h1>
          <div className="row">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Your Name Here"   onChange={handleInputs}/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Your Email Here" onChange={handleInputs}  />
            </div>
          </div>
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Your Message here"
            name="message"
            onChange={handleInputs}
          />
          <button onClick={sendMessage}>Send Message</button>
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
