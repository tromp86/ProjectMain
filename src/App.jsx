import React from 'react'
import MiddleComponent from './stayProps/MiddleComponent'
// import PrintText from './stayProps/PrintText'
import Product from './Product.jsx'
import './index.css'

import imagezero from "./assets/ico/html.png";
import image0 from "./assets/ico/css.png";
import image1 from "./assets/ico/angular.png";
import image2 from "./assets/ico/react.png";
import image3 from "./assets/ico/js.png";
import image4 from "./assets/ico/typescript.png";
import image5 from "./assets/ico/node.png";
import image6 from "./assets/ico/electron.png";
import image7 from "./assets/ico/npm.png";
import image8 from "./assets/ico/webpack.png";
import image9 from "./assets/ico/mongo.png";
import image10 from "./assets/ico/git.png";

import imageProj1 from "./assets/project/Leonardo0.jpg";

function App() {
  return (
    <div>
      <MiddleComponent />
      <div id="portfolio">
        <div id="skills">
          <h1>Skills.</h1>
          <div className="skills-block">
            <ul className="skills-list">
              <li><img src={imagezero} alt="HTML" />html</li>
              <li><img src={image0} alt="HTML" />css</li>
              <li><img src={image1} alt="HTML" />angular</li>
              <li><img src={image2}alt="HTML" />react</li>
              <li><img src={image3} alt="HTML" />javascript</li>
              <li><img src={image4} alt="HTML" />typescript</li>
              <li><img src={image5} alt="HTML" />nodeJs</li>
              <li><img src={image6} alt="HTML" />electron</li>
              <li><img src={image7} alt="HTML" />npm</li>
              <li><img src={image8} alt="HTML" />webpack</li>
              <li><img src={image9} alt="HTML" />mongoDB</li>
              <li><img src={image10} alt="HTML" />git</li>
            </ul>
          </div>
          <div className='p-skills'>
              {/* <PrintText sampleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum tincidunt nulla, id semper mi cursus ac." style="font-size: 30px;"/> */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum tincidunt nulla, id semper mi cursus ac.</p>
          </div>
        </div>
      </div>

      <div id='work' className='flex'>
    <Product
        title="Socket market"
        icon={<img className='image' src={imageProj1} alt="Product 1 Icon" />} 
        description="Ready project of the online store"
        descriptionMain="This project was generated with Angular CLI version 15.2.7."
        rating={4.5}
        recipeLink ="https://github.com/tromp86/online-shop-master" 
      />
          <Product
        title="Wacson"
        icon={<img className='image' src={imageProj1} alt="Product 1 Icon" />} 
        description="Ready project of the online store"
        descriptionMain="Was generated with Angular CLI version 15.2.7."
        rating={6.5}
        recipeLink ="https://github.com/tromp86/online-shop-master" 
      />
    </div>

    </div>
  );
};

export default App
