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
import image11 from "./assets/ico/bootstrap.png";
import image12 from "./assets/ico/tailwind.png";
import image13 from "./assets/ico/material.png";
import image14 from "./assets/ico/canvas.png";
import image15 from "./assets/ico/figma.png";

import imageMarket0 from "./assets/project/market0.jpg";
import imageMarket1 from "./assets/project/market1.jpg";
import imageMarket2 from "./assets/project/market2.jpg";
import imageMarket3 from "./assets/project/market3.jpg";
import imageMarket4 from "./assets/project/market4.jpg";
import imageMarket5 from "./assets/project/market5.jpg";
import imageMarket6 from "./assets/project/market6.jpg";
import imageMarket7 from "./assets/project/market7.jpg";
import imageMarket8 from "./assets/project/market0.gif";
import imageMarket9 from "./assets/project/market1.gif";
import imageMarket10 from "./assets/project/market2.gif";
import imageFilm0 from "./assets/project/film0.jpg";
import imageFilm3 from "./assets/project/film3.jpg";
import imageFilm4 from "./assets/project/film4.jpg";
import imageFilm1 from "./assets/project/film1.jpg";
import imageFilm2 from "./assets/project/film2.jpg";
import imageFilm5 from "./assets/project/film5.jpg";
import imageFilm6 from "./assets/project/film6.jpg";
import imageFilm7 from "./assets/project/film7.jpg";
import imageWaxom0 from "./assets/project/waxom0.jpg";
import imageWaxom1 from "./assets/project/waxom1.jpg";
import imageWaxom2 from "./assets/project/waxom2.jpg";
import imageWaxom3 from "./assets/project/waxom3.jpg";
import imageSWC0 from "./assets/project/swc0.jpg";
import imageSWC1 from "./assets/project/swc1.jpg";
import imageSWC2 from "./assets/project/swc2.jpg";
import imageSWC3 from "./assets/project/swc3.jpg";
import imageSWC4 from "./assets/project/swc4.jpg";
import imageSWC5 from "./assets/project/swc5.jpg";
import imageSWC6 from "./assets/project/swc6.jpg";
import imageBombGif from "./assets/project/bomb.gif";
import imageBomb0 from "./assets/project/bomb0.jpg";
import imageAngularClick0 from "./assets/project/angularClick0.jpg";
import imageAngularClick from "./assets/project/angularClick.gif";

function App() {
  const imagesMarket = [imageMarket0, imageMarket1, imageMarket2, imageMarket3,
    imageMarket4, imageMarket5, imageMarket6, imageMarket7, imageMarket8, imageMarket9, imageMarket10];
  const imagesFilm = [imageFilm0, imageFilm3, imageFilm4, imageFilm5, imageFilm1, imageFilm2, imageFilm6, imageFilm7];
  const imagesWaxom = [imageWaxom0, imageWaxom1, imageWaxom2, imageWaxom3];
  const imagesSW = [imageSWC0, imageSWC1, imageSWC2, imageSWC3, imageSWC4, imageSWC5, imageSWC6];
  const imageBomb = [imageBomb0, imageBombGif];
  const imageAngular = [imageAngularClick0, imageAngularClick];
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
              <li><img src={image2} alt="HTML" />react</li>
              <li><img src={image3} alt="HTML" />javascript</li>
              <li><img src={image4} alt="HTML" />typescript</li>
              <li><img src={image5} alt="HTML" />nodeJs</li>
              <li><img src={image6} alt="HTML" />electron</li>
              <li><img src={image7} alt="HTML" />npm</li>
              <li><img src={image8} alt="HTML" />webpack</li>
              <li><img src={image9} alt="HTML" />mongoDB</li>
              <li><img src={image10} alt="HTML" />git</li>
              <li><img src={image15} alt="HTML" />figma</li>
              <li><img src={image11} alt="HTML" />bootstrap</li>
              <li><img src={image12} alt="HTML" />tailwind</li>
              <li><img src={image13} alt="HTML" />material</li>
              <li><img src={image14} alt="HTML" />canvas</li>
            </ul>
          </div>
          <Rating/>
          <div className='p-skills'>
              <p><b style={{ color: "#ff416c", fontSize: "2rem" }}>Hello!</b> My name is Vladyslav and I am a web developer with a strong passion for creativity and innovation. My passion for web technologies and desire to always improve helps me to create responsive and effective solutions. I have many small works-projects on various topics, I know how to work in a team, my biggest projects are written in teamwork</p>
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
            <img className='iconStek' src={image15} alt="figma" />
            <img className='iconStek' src={image5} alt="nodeJs" />
            <img className='iconStek' src={image7} alt="npm" />
            <img className='iconStek' src={image9} alt="mongoDB" />
            <img className='iconStek' src={image10} alt="git" />
          </div>
        }
        description=
          "Stek: angular, javaSkript, typeSkript, nodeJs, npm, mongoDB, git"
      
        descriptionMain="This diploma project of an online grocery store. connected to Mongo DB built on Angular CLI version 15.2.7. and Express server. In the administrator's field, we can add and remove products from the database. Built-in Telegram bot. Very good project"
        rating={9.7}
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
      
        descriptionMain="The Hatflix project is a copy of the original portal made in JavaScript. Part of the code is made in TypeScript. User registration is available. The site is connected to a well-known IP, so new movies are guaranteed) good project"
        rating={9.4}
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
        descriptionMain="Wacson is a landing page made on clean html and css, very good work + clean code"
        rating={9.9}
        recipeLink ="https://github.com/tromp86/waxom-tromp86-original" 
      />
      <Product
        title="Click Events"
        icon={<Slideshow icon={imageAngular} />} 
        blockIcons={
          <div>
            <img className='iconStek' src={image1} alt="angular" />
            <img className='iconStek' src={image4} alt="typescript" />
            <img className='iconStek' src={image7} alt="npm" />
            <img className='iconStek' src={image10} alt="git" />
          </div>
        }
        description=
          "Stek: angular, typeSkript, npm, git"
      
        descriptionMain="An interesting clicker game on Angular sharpened for speed, there are many levels. There is room to scale"
        rating={7.5}
        recipeLink ="https://github.com/tromp86?tab=repositories" 
      />

<Product
        title="Star Wars Clicker"
        icon={<Slideshow icon={imagesSW} />} 
        blockIcons={
          <div>
            <img className='iconStek' src={imagezero} alt="HTML" />
            <img className='iconStek' src={image0} alt="css" />
            <img className='iconStek' src={image3} alt="javascript" />
            <img className='iconStek' src={image10} alt="git" />
          </div>
        }
        description=
          "Stek: HTML, css, git, javaSkript"
        descriptionMain="Atmospheric game about star wars. My favorite! built on JavaScript, you have to play it"
        rating={8.8}
        recipeLink ="https://tromp86.github.io/GameSW/" 
      />
      <Product
        title="Bomb Game"
        icon={<Slideshow icon={imageBomb} />} 
        blockIcons={
          <div>
            <img className='iconStek' src={imagezero} alt="HTML" />
            <img className='iconStek' src={image0} alt="css" />
            <img className='iconStek' src={image3} alt="javascript" />
            <img className='iconStek' src={image10} alt="git" />
            <img className='iconStek' src={image14} alt="canvas" />
          </div>
        }
        description=
          "Stek: HTML, css, git, javaSkript, canvas"
        descriptionMain="Bomber game you need to detonate bombs by clicking the mouse on the field. flying bombs as in reality. Written on canvas"
        rating={7.6}
        recipeLink ="https://github.com/tromp86/BombGame" 
      />

    </div>
    <div id='contact'>
    <Footer />
    </div>
    </div>
  );
};

export default App
