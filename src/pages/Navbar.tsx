import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navbar = () => {
  return (
    <nav>
      <Menu color="black" inverted>
        <NavLink to="/">
          <Menu.Item name="Characters" />
        </NavLink>
        <NavLink to="quotes">
          <Menu.Item name="Quotes" />
        </NavLink>
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
