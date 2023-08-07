import React from 'react'
import './footer.css'

import imageTromp86 from './assets/ico/tromp86.png';
function Footer() {
    return (
      <div className='footer'>
    
    <ul className="social-icons">
    <p>contact me:</p>
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
              <li><a className="telegram" href="#"><i className="fa fa-telegram"></i></a></li>     
            </ul>
            <div className="row">
            <h3>About</h3>
            <p><i>CODE WANTS TO BE SIMPLE</i></p>
            <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
         <a href="#">GitHub</a>
            </p>
          </div>
<img className='img-logo' src={imageTromp86}></img>
      </div>
    )
}

export default Footer