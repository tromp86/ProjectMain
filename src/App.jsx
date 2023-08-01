import React from 'react'
import MiddleComponent from './stayProps/MiddleComponent'
import PortfolioEfect from './stayProps/PortfolioEfect'
import PortfolioEfectProj from './stayProps/PortfolioEfectProj'
import PortfolioEfectContent from './stayProps/PortfolioEfectContent'
import Rating from './stayProps/components/Rating'
import Product from './Product.jsx'
import Slideshow from './stayProps/Slideshow.jsx'
import Footer from './Footer.jsx'
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


import imageMarket0 from "./assets/project/market0.jpg";
import imageMarket1 from "./assets/project/market1.jpg";
import imageMarket2 from "./assets/project/market2.jpg";
import imageMarket3 from "./assets/project/market3.jpg";
import imageMarket4 from "./assets/project/market4.jpg";
import imageMarket5 from "./assets/project/market5.jpg";
import imageMarket6 from "./assets/project/market6.jpg";
import imageMarket7 from "./assets/project/market7.jpg";
import imageFilm0 from "./assets/project/film0.jpg";
import imageFilm1 from "./assets/project/film1.jpg";
import imageFilm2 from "./assets/project/film2.jpg";
import imageWaxom0 from "./assets/project/waxom0.jpg";
import imageWaxom1 from "./assets/project/waxom1.jpg";
import imageWaxom2 from "./assets/project/waxom2.jpg";
import imageWaxom3 from "./assets/project/waxom3.jpg";

function App() {
  const imagesMarket = [imageMarket0, imageMarket1, imageMarket2, imageMarket3,
    imageMarket4, imageMarket5, imageMarket6, imageMarket7];
  const imagesFilm = [imageFilm0, imageFilm1, imageFilm2];
  const imagesWaxom = [imageWaxom0, imageWaxom1, imageWaxom2, imageWaxom3];
  return (
    <div id='content' className='content'>
      
      <MiddleComponent />
      <PortfolioEfect id="h1" text="Skills."/>
      <PortfolioEfectContent/>
      
      <div id="skills">
      <div id="portfolio">  
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
          <Rating/>
          <div className='p-skills'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum tincidunt nulla, id semper mi cursus ac.</p>
          </div>
        </div>
      </div>
      <PortfolioEfectProj id="h2" text="Project." />
      <div id='work' className='flex'>
      <Product
        title="Socket market"
        icon={<Slideshow icon={imagesMarket} />} 
        blockIcons={
          <div>
            <img className='iconStek' src={image1} alt="angular" />
            <img className='iconStek' src={image3} alt="javascript" />
            <img className='iconStek' src={image4} alt="typescript" />
            <img className='iconStek' src={image5} alt="nodeJs" />
            <img className='iconStek' src={image7} alt="npm" />
            <img className='iconStek' src={image9} alt="mongoDB" />
            <img className='iconStek' src={image10} alt="git" />
          </div>
        }
        description=
          "Stek: angular, javaSkript, typeSkript, nodeJs, npm, mongoDB, git"
      
        descriptionMain="This project was generated with Angular CLI version 15.2.7."
        rating={9.8}
        recipeLink ="https://github.com/titaniym21/online-shop" 
      />
    <Product
        title="Hetflix"
        icon={<Slideshow icon={imagesFilm} />} 
        blockIcons={
          <div>
            <img className='iconStek' src={image3} alt="javascript" />
            <img className='iconStek' src={image4} alt="typescript" />
            <img className='iconStek' src={image5} alt="nodeJs" />
            <img className='iconStek' src={image7} alt="npm" />
            <img className='iconStek' src={image8} alt="webpack" />
            <img className='iconStek' src={image6} alt="electron" />
            <img className='iconStek' src={image10} alt="git" />
          </div>
        }
        description=
          "Stek: javaSkript, typeSkript, nodeJs, npm, webpack, electron, jest, git"
      
        descriptionMain="This project was generated with Angular CLI version 15.2.7."
        rating={8.5}
        recipeLink ="https://github.com/titaniym21/Film-app-js" 
      />
          <Product
        title="Wacson"
        icon={<Slideshow icon={imagesWaxom} />} 
        blockIcons={
          <div>
            <img className='iconStek' src={imagezero} alt="HTML" />
            <img className='iconStek' src={image0} alt="css" />
            <img className='iconStek' src={image10} alt="git" />
          </div>
        }
        description=
          "Stek: HTML, css, git"
      
        descriptionMain="Was generated with Angular CLI version 15.2.7."
        rating={9.5}
        recipeLink ="https://github.com/tromp86/waxom-tromp86-original" 
      />

    </div>
    <div id='contact'>
    <Footer />
    </div>
    </div>
  );
};

export default App
