import { Routes, Route, Outlet, Link } from "react-router-dom";
import NoMatch from "../components/404/NoMatch";
import About from "../components/About/About";
import Home from "../components/Home/Home";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div>
   
    
    <Routes>
      <Route  path="/"  element={<Home />}/>
        <Route   path="/about" element={<About />} />
        <Route  path="*" element={<NoMatch />} />
    </Routes>
  </div>
  )
}

export default Dashboard