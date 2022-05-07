import React from "react";
import "../styles/styles.css";
import { useLocation } from "wouter";
type NavBarProps = {
  mainLogo: string;
};

const NavBar: React.FC<NavBarProps> = (props) => {

  const [location, setLocation] = useLocation()


  const onSubmit = (e: any) => {
    e.preventDefault()

    setLocation("/")
  }
  return (
    <>
      <button className="btn-nav" onClick={onSubmit}>
        Navigator
      </button>
      <img
        className="nav-img"
        src={props.mainLogo}
        alt="Logo"
        height={50}
        width={50}
      />
    </>
  );
};

export default NavBar;
