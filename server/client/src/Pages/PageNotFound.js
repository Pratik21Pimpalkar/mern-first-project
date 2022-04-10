import React from "react";
import { Link } from "react-router-dom";
import  styled from 'styled-components'

const PageNotFound = () => {
  return (
    <Error>
      <h1>#404 Page Not Found ⚠️</h1>
      <Link to="/" style={{textAlign:"center"}}><h3>Back to Homepage</h3> </Link>
    </Error>
  );
};

const Error =styled.div`
position: relative;
padding: 10rem;
h1{
    color: #000047;
    font-size: 5rem;
    text-align: center;
}

`

export default PageNotFound;
