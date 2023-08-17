import React from "react";
import "./footer.css";
import FooterLogoEfect from "./stayProps/FooterLogoEfect.jsx";

function Footer() {
  return (
    <div className="footer">
      <ul className="social-icons">
        <p>contact me:</p>
        <li>
          <a
            className="facebook"
            href="https://www.facebook.com/profile.php?id=100015819224264"
            target="blank"
          >
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2-%D1%82%D0%BA%D0%B0%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-07b125164/"
            target="blank"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a className="telegram" href="https://t.me/tromp86" target="blank">
            <i className="fa fa-telegram"></i>
          </a>
        </li>
        <li>
          <a
            className="whatsapp"
            href="https://wa.me/qr/Y4XGVQKNZ5NAH1"
            target="blank"
          >
            <i className="fa fa-whatsapp"></i>
          </a>
        </li>
        <li>
          <a
            className="gmail"
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=tromp1000@gmail.com"
            target="blank"
          >
            <i className="fa fa-google"></i>
          </a>
        </li>
      </ul>
      <div className="row">
        <h3>About</h3>
        <p>
          <i>CODE WANTS TO BE SIMPLE</i>
        </p>
        <p className="copyright-text">
          React &copy; 2023 All Rights Reserved by
          <a href="https://github.com/tromp86">GitHub</a>
        </p>
      </div>
      {/* <img className='img-logo' src={imageTromp86}></img> */}
      <FooterLogoEfect />
    </div>
  );
}

export default Footer;
