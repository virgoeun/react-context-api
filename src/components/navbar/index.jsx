import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/"> home </NavLink>
        </li>
        <li>
          <NavLink to="/user"> user </NavLink>
        </li>
      </ul>
    </nav>
  );
};
