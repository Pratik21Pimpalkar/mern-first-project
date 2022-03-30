import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Navbar from "./components/Navbar";
import { Global } from "./components/GlobalStyle";
import { Routes, Route} from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";
function App() {
  return (
    <div className="App">
      <Global />
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/contact"  element={<Contact/>} />
        <Route path="/about"  element={<About/>} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/signup"  element={<Signup/>} />
        <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
