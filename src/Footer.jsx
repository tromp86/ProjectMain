import React from 'react'
import './footer.css'
function Footer() {
    return (
      <div className='footer'>
    {/* <p>contact me:</p>
    <ul>
      <li><a href="https://t.me/your_telegram_username" target="_blank">Telegram</a></li>
      <li><a href="viber://chat?number=your_viber_number" target="_blank">Viber</a></li>
      <li><a href="https://api.whatsapp.com/send?phone=your_whatsapp_number" target="_blank">WhatsApp</a></li>
    </ul> */}
      <div className="container">
        <div className="row">
            <h6>About</h6>
            <p>Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>

      </div>
      <div className="container">
        <div className="row">
          <div>
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">Scanfcode</a>
            </p>
          </div>

          <div className="col-md-4">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
      </div>
    )
}

export default Footer