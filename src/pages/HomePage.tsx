import React from "react";
import MainLayout from "../layouts/main.layout";
import "../styles/styles.css";

type HomeProps = {};

const HomePage: React.FC<HomeProps> = (props) => {
  return (
    <>
      <MainLayout>
        <div>
          <div className="background-image-container">
            <img
              className="background-image"
              src=""
              alt="background"
            />
          </div>
          <h1 className="home-main-text">Home Page</h1>
          <div className="col left-small"></div>
          <div className="col right-large"></div>
        </div>
      </MainLayout>
    </>
  );
};

export default HomePage;
