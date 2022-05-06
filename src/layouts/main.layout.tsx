import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/styles.css";
import { AiFillHome } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsBuilding } from "react-icons/bs";

import { FooterItem, NavBarItem } from "../types/components";
import { Scroll } from "@react-three/drei";
import { useLocation } from "wouter";
type MainProps = {};

const MainLayout: React.FC<MainProps> = (props) => {
  const [location, setLocation] = useLocation()

  const footerItems: Array<FooterItem> = [
    //   ! Footer Items are not yet implemented
  ];

  const onSubmit = (e: any) => {
    e.preventDefault()

    setLocation("/")
  }
  return (
    <>
      <Scroll html>
        <button onClick={onSubmit}>
          Navigator
        </button>

      </Scroll>
      {props.children}
      {/*  ! FIGURE OUT FOOTER */}
      {/* <Scroll html>
      <div style={{bottom: "100%"}}>New footer here</div>
     </Scroll> */}
    </>
  );
};

export default MainLayout;
