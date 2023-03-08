import React from 'react';
import './style.scss';
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from 'store/actions/counter';

const Footer = () => {
    const counter = useSelector((state:any) => state.counter);
    const dispatch = useDispatch();
   

 
        
  return (
    <div>
        {/* <!--footer area start--> */}
    <footer className="footer_widgets">


    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement(5))}>Decrement</button>
    </div>

        <div className="footer_top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                        <div className="widgets_container">
                            <h3>Information</h3>
                            <div className="footer_menu">
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="#">Delivery Information</a></li>
                                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><a href="#">Returns</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                        <div className="widgets_container">
                            <h3>Extras</h3>
                            <div className="footer_menu">
                                <ul>
                                    <li><a href="#">Brands</a></li>
                                    <li><a href="#">Gift Certificates</a></li>
                                    <li><a href="#">Affiliate</a></li>
                                    <li><a href="#">Specials</a></li>
                                    <li><a href="contact.html">Site Map</a></li>
                                    <li><a href="my-account.html">My Account</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="widgets_container contact_us">
                            <h3>Contact Us</h3>
                            <div className="footer_contact">
                                <p>Address: 6688 Princess Road, London, Greater London BAS 23JK, UK</p>
                                <p>Phone: <a href="tel:+(+012)800456789-987">(+012) 800 456 789 - 987</a> </p>
                                <p>Email: demo@example.com</p>
                                <ul>
                                    <li><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#" title="google-plus"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#" title="facebook"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#" title="youtube"><i className="fa fa-youtube"></i></a></li>
                                </ul>
                              
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="widgets_container newsletter">
                            <h3>Join Our Newsletter Now</h3>
                            <div className="newleter-content">
                                <p>Exceptional quality. Ethical factories. Sign up to enjoy free U.S. shipping and returns on your first order.</p>
                                 <div className="subscribe_form">
                                    <form id="mc-form" className="mc-form footer-newsletter" >
                                        <input id="mc-email" type="email"  placeholder="Enter you email address here..." />
                                        <button id="mc-submit">Subscribe !</button>
                                    </form>
                                    {/* <!-- mailchimp-alerts Start --> */}
                                    <div className="mailchimp-alerts text-centre">
                                        <div className="mailchimp-submitting"></div>
                                        {/* <!-- mailchimp-submitting end --> */}
                                        <div className="mailchimp-success"></div>
                                        {/* <!-- mailchimp-success end --> */}
                                        <div className="mailchimp-error"></div>
                                        {/* <!-- mailchimp-error end --> */}
                                    {/* </div><!-- mailchimp-alerts end --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="footer_bottom">
            <div className="container">
               <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="copyright_area">
                            <p> &copy; 2021 <strong> </strong> Mede with ❤️ by <a href="https://hasthemes.com/"><strong>HasThemes</strong></a></p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="footer_custom_links">
                            <ul>
                                <li><a href="#">Order History</a></li>
                                <li><a href="wishlist.html">Wish List</a></li>
                                <li><a href="#">Newsletter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
         
        </div>
        </div>
    </footer>
    {/* <!--footer area end-->
    */}
    </div>
  )
}

export default Footer;


