import React from "react";
import "./LearnPage.css";

type LearnProps = {};

const LearnPage: React.FC<LearnProps> = (props) => {
  return <>
  <head>
 
  </head>
  <ul>
      <li><a href="#intro">Introduction</a></li>
      <li><a href="#greenBuildings">Green buildings</a></li>
      <li><a href="#windPower">Wind power</a></li>
      <li><a href="#solarPower">Solar power technology</a></li>
      <li><a href="#algae">Unique renewable energy solutions</a></li>
      <li><a href="#passiveDesign">Passive design</a></li>
      <li><a href="#glossary">Glossary</a></li>
  </ul>
  <div >
    <article>
    <h1>Learn about Skyscrapers and Sustainable design</h1>
    <br></br>
    <p id="intro">Amid the changing climate, it is becoming more desirable to construct
         buildings and skyscrapers that have a reduced <a href="#carbonFootprint">carbon footprint</a>. Since 
         many cities still rely primarily on carbon-heavy energy, designers are focusing 
         on reducing the energy consumption of individual buildings. This includes passive 
         design strategies, which takes advantage of the surrounding environment without 
         using energy, and active design. Efficiency of building systems and using renewable 
         energy like solar power are parts of active design</p>
    </article>
    <br></br>
    <article>
        <h2 id="greenBuildings">Green Buildings</h2>
        <p>this is a descriptor of what green buildings are</p>
         <h3>
                This is where a React canvas will go to show the different green 
                buildings as 'flipcards' (see google slides). The background will 
                be white so it blends in with the rest of the page.
        </h3>
    </article>
    <article>
        <h2 id="windPower">Wind Power and Skyscrapers...A work in progress</h2>
        <p>a paragraph about the pros and cons of wind turbines in buildings 
            and why they haven't worked well when implemented.
        </p>
        <h3>
                A React canvas with flipcards about the Strata SE1 London Tower 
                the Bahrain world trade center, and the Houston Hess building.
        </h3>
    </article>
    <article>
        <h2 id="solarPower">Solar Power technology and its potential</h2>
        <iframe width="500" height="300"
        src="https://www.youtube.com/watch?v=fMh2HlFvq7o">
        </iframe>
        <p>An introduction to solar energy and summary of the video. </p>
        <h3>Maybe a picture gallery to links to more articles</h3>
    </article>
    <article>
        <h2 id="algae">Unique Renewable energy solutions for buildings</h2>
        <p>A picture will be displayed next to a paragraph describing the BIQ house 
            in Germany with youtube video player below.</p>
    </article>
    <article>
        <h2 id="passiveDesign">Passive Design for buildings</h2>
        <p>A diagram of a passive design house. Include a description of why it's important
             and how it's implemented in larger projects (buildings)
        </p>
    </article>
    <article>
        <h2 id="glossary">Glossary</h2>
        <ol>
            <li id="carbonFootprint">Carbon Footprint - "the amount of carbon dioxide and 
            other carbon compounds emitted due to the consumption of fossil fuels by a 
            particular person, group, etc."</li>
            <li>Active Design</li>
            <li>Passive Design</li>
            <li>Renewable Energy</li>
            <li>Photovoltaic</li>
            <li>Climate Change</li>
        </ol>
    </article>
    <footer>
         <p>look at this footer ;-)</p>
    </footer>
</div>

  </>; 
};

export default LearnPage;