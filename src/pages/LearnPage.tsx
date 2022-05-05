import React from "react";
import "../styles/styles.css";
import "../styles/LearnStyle.css";
import "../styles/flipcardstylesheet.css";

type LearnProps = {};

const LearnPage: React.FC<LearnProps> = (props) => {
    return <>
        <head>

        </head>
   
    <div className="parallax background">
    
         <div className="parallaxLayer backgroundImages ">
                <h1>pp</h1>
            </div>
    <div className="parallaxLayer main">
        <ul className="learn-sidebar">
            <li className="learn-link"><a href="#intro">Introduction</a></li>
            <li className="learn-link"><a href="#greenBuildings">Green buildings</a></li>
            <li className="learn-link"><a href="#windPower">Wind power</a></li>
            <li className="learn-link"><a href="#solarPower">Solar power technology</a></li>
            <li className="learn-link"><a href="#algae">Unique renewable energy solutions</a></li>
            <li className="learn-link"><a href="#passiveDesign">Passive design</a></li>
        </ul> 
            <div>
            <article className="learn-article">
                <h1 className="learn-main-text">Learn about Skyscrapers and Sustainable design</h1>
                <br></br>
                <p className="learn-paragraph" id="intro">Amid the changing climate, it is becoming more desirable to construct
                    buildings and skyscrapers that have a reduced carbon footprint. Since
                    many cities still rely primarily on carbon-heavy energy, designers are focusing
                    on reducing the energy consumption of individual buildings. This includes passive
                    design strategies, which takes advantage of the surrounding environment without
                    using energy, and active design. Efficiency of building systems and using renewable
                    energy like solar power are parts of active design</p>
            </article>
            
        </div>
            <div>
            <br></br>
                <article className="learn-article">
                 <h2 id="greenBuildings">Green Buildings</h2>
                  <p>this is a descriptor of what green buildings are</p>
                  <h3 className="learn-descriptor">
                    This is where a React canvas will go to show the different green
                    buildings as 'flipcards' (see google slides). The background will
                    be white so it blends in with the rest of the page.
                  </h3>
                </article>
            <div className="learn-flipCardContainer">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="flip-card-img" src="https://www.stefanoboeriarchitetti.net/wp-content/uploads/2018/10/cBoeri-Studio_Vertical-Forest_ph.Dimitar-Harizanov_DHSDM_bassa.jpg">

                            </img>
                        </div>
                        <div className="flip-card-back">
                            <h1 className="flip-h1">Bosco Verticale</h1>
                            <h2 className="flip-h2"><i>"The vertical forest"</i></h2>
                            <p className="flip-p">This pair of residential building towers, constructed 
                                in Milan in 2014, is now an iconic example for green 
                                buildings around the world.
                                 The plants and trees on the facade absorbs pollution, 
                                 reduces the temperature in and around the building, 
                                 and harbours numerous species of birds and insects.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="flip-card-img" src="https://www.stefanoboeriarchitetti.net/wp-content/uploads/2018/10/cBoeri-Studio_Vertical-Forest_ph.Dimitar-Harizanov_DHSDM_bassa.jpg">

                            </img>
                        </div>
                        <div className="flip-card-back">
                            <h1 className="flip-h1">Bosco Verticale</h1>
                            <h2 className="flip-h2"><i>"The vertical forest"</i></h2>
                            <p className="flip-p">This pair of residential building towers, constructed 
                                in Milan in 2014, is now an iconic example for green 
                                buildings around the world.
                                 The plants and trees on the facade absorbs pollution, 
                                 reduces the temperature in and around the building, 
                                 and harbours numerous species of birds and insects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
             </div>
             
             <div>
            <article className="learn-article">
                <h2 id="windPower">Wind Power and Skyscrapers...A work in progress</h2>
                <p>a paragraph about the pros and cons of wind turbines in buildings
                    and why they haven't worked well when implemented.
                </p>
                <h3 className="learn-descriptor">
                    A React canvas with flipcards about the Strata SE1 London Tower
                    the Bahrain world trade center, and the Houston Hess building.
                </h3>
            </article>
            <article className="learn-article">
                <h2 id="solarPower">Solar Power technology and its potential</h2>
                
                <p>An introduction to solar energy and summary of the video. </p>
                <h3 className="learn-descriptor">Maybe a picture gallery to links to more articles</h3>
            </article>
                <article className="learn-article">
                    <h2 id="algae">Unique Renewable energy solutions for buildings</h2>
                     <p>A picture will be displayed next to a paragraph describing the BIQ house
                     in Germany with youtube video player below.</p>
                </article>
                <article className="learn-article">
                     <h2 id="passiveDesign">Passive Design for buildings</h2>
                      <p>A diagram of a passive design house. Include a description of why it's important
                     and how it's implemented in larger projects (buildings)
                     </p>
                </article>
                </div>
            </div>

        </div>
            <footer>
                <p>look at this footer ;-)</p>
            </footer>

    </>;
};

export default LearnPage;