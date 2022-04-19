
import React from "react";
import { NavBarItem } from "../types/components";
import { Link } from "wouter"
type NavBarProps = {
  navbarItems: NavBarItem[]
};

const NavBar: React.FC<NavBarProps> = (props) => {
  return (<>
    <div className="navbar-container">
      <ul className="navbar-list">
        {
          props.navbarItems.map((Item, idx) => {

            <li key={idx} className="nav-link">
              <Link to={Item.link}>
                <Item.icon className="nav-icon" />
                {Item.name}
              </Link>
            </li>
          })
        }
      </ul>
    </div>


  </>);
};

export default NavBar;

