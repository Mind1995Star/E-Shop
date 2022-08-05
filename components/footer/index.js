import Logo from '../../assets/icons/logo';

const Footer = () => {
  
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> <span>R /</span> D</h6>
            <p>Stickers are also used for embellishing scrapbooking pages. 
              Kinds of stickers sold for this purpose include acrylic, 3D, 
              cardstock, epoxy, fabric, flocked, sparkly, paper, puffy, and vellum.</p>
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Shopping online</li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Shipping and Delivery</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Payment options</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <ul>
              <li>Information</li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Find a store</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Bacome a member</a></li>
              <li><a href="#">Site feedback</a></li>
            </ul>
            <ul>
              <li>Contact</li>
              <li><a href="mailto:deedirozen@gmail.com">deedirozen@gmail.com</a></li>
              <li><a href="#">Hotline: +91 xxx xxx xxxx</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN & CODED BY Rozen_2007 - © 2021. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer