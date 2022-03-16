import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navbar = () => {
  return (
    <nav>
      <Menu>
        <Menu.Item  as={NavLink} to='/'  name="Characters" />
        

        <Menu.Item as={NavLink} to='episodes' name="Episodes" />

        <Menu.Item name="upcomingEvents">Upcoming Events</Menu.Item>
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
