import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navBarElement">
      <h3>Weekend Escapes</h3>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive === true ? "active-link" : "default-link"
            }
          >
            Home
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive === true ? "active-link" : "default-link"
            }
          >
            Zoekpagina
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            to="/result"
            className={({ isActive }) =>
              isActive === true ? "active-link" : "default-link"
            }
          >
            Resultaatpagina
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            to="/donations"
            className={({ isActive }) =>
              isActive === true ? "active-link" : "default-link"
            }
          >
            Donatiepagina
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive === true ? "active-link" : "default-link"
            }
          >
            Profielpagina
          </NavLink>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
