import React from "react";
import MainLayout from "../layouts/main.layout";
import "../styles/styles.css";

type HomeProps = {};

const HomePage: React.FC<HomeProps> = (props) => {
  return (
    <>
      <MainLayout>
        <div className="home-container">
          <div className="main-container">
            <img
              className="background-image"
              src="https://picsum.photos/1500/800"
              alt="background"
            />
            <h1 className="home-main-text">Home Page</h1>
          </div>
          
          <div className="col left-small"></div>
          <div className="col right-large"></div>
        </div>
      </MainLayout>
    </>
  );
};

export default HomePage;
