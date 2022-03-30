import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import male from "../Assets/Images/male.png";

const Bio = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const pageAuthenticate = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setData(data);
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  useEffect(() => {
    pageAuthenticate();
  });
  return (
    <>
      <ProfileWrapper>
        <Card>
          <img src={male} alt="" />
          <div>
            <h1>{data.name}</h1>
            <p id="tag">{data.work}</p>
            <hr />

            {/* <p>
              <span>Unique ID:</span> {data._id}
            </p>
            <p>
              <span>Age:</span> 26 Years
            </p>
            <p>
              <span>Email:</span>{ data.email}
            </p>
            <p>
              <span>Work: </span> {data.work}
            </p>
            <p>
              <span>Hobbies: </span> Music
            </p> */}
            <Table>
              <tbody>
                <tr>
                  <th scope="row">ID</th>
                  <td> {data._id}</td>
                </tr>
                <tr>
                  <th>Age</th>
                  <td>26</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{data.email}</td>
                </tr>
                <tr>
                  <th>Occupation</th>
                  <td>{data.work}</td>
                </tr>
                <tr>
                  <th>Hobbies</th>
                  <td>Music</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Card>
      </ProfileWrapper>
    </>
  );
};
const Table = styled.table`
  text-align: left;
  td {
    color: #6c6c6c;
    font-weight: 500;
  }

  td,
  th {
    padding: 0.5rem 0.2rem;
  }
  th {
    width: 80%;
  }
`;
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
