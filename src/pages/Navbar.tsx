import Toggle from "components/Toggle/Toggle";
import { NavLink } from "react-router-dom";
import { Menu, MenuItem } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
const Navbar = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.darkMode);
  return (
    <nav>
      <Menu color={isDarkMode ? "black" : "red"} inverted>
        <NavLink to="/">
          <Menu.Item name="Characters" />
        </NavLink>
        <NavLink to="quotes">
          <Menu.Item name="Quotes" />
        </NavLink>
        <MenuItem>
          <Toggle />
        </MenuItem>
        
      </Menu>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
      <hr /> */}
    </nav>
  );
};

export default Navbar;
