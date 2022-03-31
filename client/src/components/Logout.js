import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        // credentials: "include",s
      });
      
        window.alert("User Logout Successfully ✅");
        navigate("/", { replace: true });
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <>
      <LogoutWrapper>User Logout Successfully</LogoutWrapper>
    </>
  );
};

const LogoutWrapper = styled.div`
  text-align: center;
  font-size: 2rem;
`;

export default Logout;
