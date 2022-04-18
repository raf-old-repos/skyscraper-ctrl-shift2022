import React from "react";
import NavBar from "../components/NavBar";
import "../styles/styles.css"
type MainProps = {};

const MainLayout: React.FC<MainProps> = (props) => {
    return <>
        <div className="nav-container">
            <NavBar />
        </div>
        <div className="bi-column-body">
            {props.children}
        </div>
        <div className="footer-container">
            
        </div>

    </>;
};

export default MainLayout;
