import { Routes, Route } from "react-router-dom";

//? Pages
import NoMatch from "components/404/NoMatch";
import About from "components/About/About";
import Home from "components/Home/Home";
import CharacterDetail from "components/Detail/CharacterDetail";
import Quotes from "components/Quotes/Quotes";
import QuotesDetail from "components/Detail/QuotesDetail";

const Dashboard = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/char/:char_id" element={<CharacterDetail />} />
        <Route path="/quotes/:quote_id" element={<QuotesDetail />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  )
}

export default Dashboard