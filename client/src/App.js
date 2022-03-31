import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Navbar from "./components/Navbar";
import { Global } from "./components/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import styled from "styled-components";
import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";import Logout from "./components/Logout";
import Svg from "./Assets/stacked-waves-haikei.svg";

function App() {
  return (
    <div className="App" style={{}}>
      <Background src={Svg} alt="" style={{}} />
      <Global />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

const Background = styled.img`
  position: absolute;
  width: 100%;
  z-index: -1;
  height: 120%;
  object-fit: cover;
  opacity: 70%;
`;
export default App;
