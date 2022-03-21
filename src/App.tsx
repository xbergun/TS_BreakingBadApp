import Dashboard from "pages/Dashboard";
import Navbar from "pages/Navbar";
import "./App.css";
import {useSelector} from "react-redux";
import { RootState } from "store/store";
function App() {
  const { isDarkMode } = useSelector((state: RootState) => state.darkMode);
  
  return (
    <div  >
      <div>
      <Navbar />
      </div>
      <Dashboard />
    </div>
  );
}

export default App;
