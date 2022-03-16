import { Routes, Route } from "react-router-dom";

//? Pages
import NoMatch from "components/404/NoMatch";
import About from "components/About/About";
import Home from "components/Home/Home";
import CharacterDetail from "components/Detail/CharacterDetail";

const Dashboard = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<About />} />
        <Route path="/char/:char_id" element={<CharacterDetail />} />




        {/* 404 */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  )
}

export default Dashboard