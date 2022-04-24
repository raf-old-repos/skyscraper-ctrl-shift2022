import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/styles.css";
import { AiFillHome } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsBuilding } from "react-icons/bs";

import { FooterItem, NavBarItem } from "../types/components";
type MainProps = {};

const MainLayout: React.FC<MainProps> = (props) => {
  const navbarItems: Array<NavBarItem> = [
    {
      name: "Home",
      link: "/",
      icon: AiFillHome,
    },
    {
      name: "Learn",
      link: "/learn",
      icon: BiBookBookmark,
    },
    {
      name: "About",
      link: "/about",
      icon: CgProfile,
    },
    {
      name: "Build",
      link: "/build",
      icon: BsBuilding,
    },
  ];

  const footerItems: Array<FooterItem> = [
    //   ! Footer Items are not yet implemented
    ];
  return (
    <>
      <div className="nav-container-layout">
        <NavBar navbarItems={navbarItems} mainLogo="" />
      </div>
      <div className="main-body">{props.children}</div>
      <div className="footer-container">
        <Footer items={footerItems} />
      </div>
    </>
  );
};

export default MainLayout;
