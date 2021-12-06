import {Link} from 'react-router-dom';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';
import React, { useEffect, useState } from 'react';
import { listProductCategories } from '../actions/productActions';
import ChatBox from '../components/ChatBox';



function Homepage() {

    const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);

  return (
    <div className="main-wrapper">
    <div className="site-content-wrapper">




            
            <div className="site-content" id="top-nav">
                <nav>
                <div className="navbar magic-shadow">

                        <div className="flex homeNav homeNav1 float">
                            <a href="#AboutUs" className="cool-link">About us</a>
                            <Link to ="/" className="cool-link" className="active">Home</Link>
                        </div>

                        <div className="branding flex float ">
                            
                        </div>

                        <div className="flex homeNav homeNav2" >
                            
                            <Link to ="/productscreen" className="cool-link">Shop</Link>
                            <a href="#ContactUs" className="cool-link">Contact us</a>
                            </div>
                            <div className="flex homeNav navright">
                            <Link to="/cart" className="carticon"></Link> {cartItems.length > 0 && ( 
                            <span className="badge">{cartItems.length}</span>)}
                            {userInfo ? (
                            <div className="dropdown">
                                <Link to="#" className="dropdown1">
                                {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                                </Link>
                                <ul className="dropdown-content">
                                <li>
                                    <Link to="/profile">User Profile</Link>
                                </li>
                                <li>
                                    <Link to="/orderhistory">Order History</Link>
                                </li>
                                <li> <a onClick={signoutHandler}>
                                    Sign Out</a>
                                </li>
                                </ul>
                            </div>
                            ) : (
                                <Link to ="/signin"><button className="Signin" style={{color:"white"}}>Sign in</button></Link>
                            )}
                            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin" className="dropdown1">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                  <li>
                    <Link to="/support">Support</Link>
                  </li>
                </ul>
              </div>
            )}
                             
                        </div>
                       </div>
                    
                </nav>
                
                <header className="hero flex items-center">
                
                    <div className="container" id="welcome">
                        <div className="welcome flex items-center">
                            <h1>Welcome to <span id="The-Cakesmith">The Cakesmith</span></h1>
                        </div>
                        <h1>A World Class <span>Bakery</span> Website</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the
                            industry's standard dummy.</p>
                        <div>
                            <button className="btn btn-primary">Read More</button>
                            <Link to ="/productscreen"><button className="btn btn-secondary">Shop Now</button></Link>

                         

                        </div>
                        <div className="hero-image">
                            <img src="./images/straw.png" alt=""/>
                        </div>
                    </div>
                </header>
                
                
                <section className="about-meal justify-center" id="AboutUs">
                    <div className="container"  >
                        <h1 className="section-heading">About <span className="The-Cakesmith">The Cakesmith</span></h1>
                        <div className="about-meal-wrap flex">
                            <div className="flex-1">
                                <img src="./images/yogurt.png" alt=""/>
                            </div>
                            <div className="flex-1">
                                <h2>The CakeSmith is a long established fact that a reader will be distracted</h2>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                    piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard
                                    McClintock, a Latin professor at Hampden Sydney College in Virginia, The standard chunk of Lorem
                                    Ipsum used since the 1500s is reproduced below for those interested.</p>
                                <Link to="/about"><button className="btn btn-secondary">Read More</button></Link>
                            </div>
                        </div>
                    </div>
                </section>
    
                <section className="our-services">
                    <div className="container">
                        <h1 className="section-heading">Our services</h1>
                        <div className="card-wrapper flex">
                            <div className="service-card magic-shadow-sm">
                                <img className="icon" src="./icons/transport.svg" alt=""/>
                                <h2>Free Home delivery</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <button className="btn btn-secondary">Read More</button>
                            </div>
                            <div className="service-card magic-shadow-sm">
                                <img className="icon" src="./icons/bag.svg" alt=""/>
                                <h2 className="text-primary">30 Days ReturnServices</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <button className="btn btn-primary">Read More</button>
                            </div>
                            <div className="service-card magic-shadow-sm">
                                <img className="icon" src="./icons/usd.svg" alt=""/>
                                <h2>Money Back Guaranted</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <button className="btn btn-secondary">Read More</button>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="big-deal">
                    <div className="container">
                        <h1 className="section-heading text-pure">Big Deals of the Week</h1>
                        <div className="timer">
                            <div>
                                <span>02</span>
                                <span>Days</span>
                            </div>
                            <div>
                                <span>24</span>
                                <span>Hours</span>
                            </div>
                            <div>
                                <span>55</span>
                                <span>Minutes</span>
                            </div>
                            <div>
                                <span>58</span>
                                <span>Seconds</span>
                            </div>
                        </div>
                    </div>
                </section>
      
                <section className="latest-news">
                    <div className="container">
                        <h1 className="section-heading">Lastest News from Blog</h1>
                        <div className="article-wrapper"><article className="card magic-shadow-sm">
                                <div>
                                    <img src="./images/coffee.jpg" alt=""/>
                                </div>
                                <div className="card-content">
                                    <div className="post-meta flex items-center justify-between">
                                        <span>July 03, 2017</span>
                                        <div>
                                            <span>Posted by <span className="The-Cakesmith">The Cakesmith</span></span>
                                            <span className="comment-count">12 Comments</span>
                                        </div>
                                    </div>
      
                                    <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a
                                        page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                        more
                                        letters.</p>
                                </div>
                            </article><article className="card magic-shadow-sm">
                                <div>
                                    <img src="./images/donut.jpg" alt=""/>
                                </div>
                                <div className="card-content">
                                    <div className="post-meta flex items-center justify-between">
                                        <span>July 03, 2017</span>
                                        <div>
                                            <span>Posted by <span className="The-Cakesmith">The Cakesmith</span></span>
                                            <span className="comment-count">12 Comments</span>
                                        </div>
                                    </div>
      
                                    <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a
                                        page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                        more
                                        letters.</p>
                                </div>
                            </article>
                        </div>
                        <div className="text-center btn-wrapper">
                            <button className="btn btn-secondary">View All</button>
                        </div>
                    </div>
                </section>
      
                <section className="subscribe">
                    <div className="container flex items-center">
                        <div>
                            <img src="./images/rasberry.png" alt=""/>
                        </div>
                        <div>
                            <h1>Subscribe to your newsletter</h1>
                            <p>Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many
                                web sites
                                still in their infancy.</p>
                            <div className="input-wrap">
                                <input type="email" placeholder="TheCakeSmith@gmail.com"/>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </section>
      
                <section className="contact-us flex" id="ContactUs">
                    <div className="contact-info-wrapper">
                        <h1 className="section-heading" >Contact us</h1>
                        <div className="contact-info">
                            <div>
                                <div>
                                    <img src="./icons/phone-2.svg" alt=""/>
                                    <div>
                                        <span>Call us:</span>
                                        <span>(+92) 123 456 789</span>
                                    </div>
                                </div>
                                <div>
                                    <img src="./icons/bag-2.svg" alt=""/>
                                    <div>
                                        <span>E-mail ::</span>
                                        <span>support@CakeSmith.com</span>
                                    </div>
                                </div>
                                <div>
                                    <img src="./icons/clock-2.svg" alt=""/>
                                    <div>
                                        <span>Working Hours:</span>
                                        <span>Mon - Sat (8.00am - 12.00am)</span>
                                    </div>
                                </div>
                                <div className="ContactBtn justify-center">
                                <Link to="/contact"><button>Ask us a question</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="map">
                    <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11090.031620354222!2d73.02802772125249!3d33.657728053588166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1619283176572!5m2!1sen!2s" 
                            
                            width="100%" height="100%" frameBorder="0" style={{border:"0"}} allowFullScreen=""></iframe>
                    </div>
                </section>
      
                <footer>
                    <div className="container">
                        <div className="box">
                            <h3>About us</h3>
                            <p>It was popularised in the 1960 with the release of Latest sheets containing Lorem Ipsum
                                passage.</p>
                            <Link to="/about"><button className="btn btn-secondary">Read More</button></Link>
                        </div>
                        <div className="box">
                            <h3>Quick Links</h3>
                            <ul>
                              <li><a href="#top-nav">Home</a></li>
                              <li><Link to="/about" >About us</Link></li>
                              <li><Link to ="/productscreen">Products</Link></li>
                              <li><Link to="/contact">Contact us</Link></li>
                            </ul>
                        </div>
                        <div className="box">
                            <h3>Follow Us</h3>
                            <div>
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/codersgyan">
                                            <img src="./icons/facebook.svg" alt=""/>
                                            <span>Facebook</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/CoderGyan">
                                            <img src="./icons/twitter.svg" alt=""/>
                                            <span>Twitter</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="./icons/google.svg" alt=""/>
                                            <span>Google +</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/codersgyan/">
                                            <img src="./icons/instagram.svg" alt=""/>
                                            <span>Instagram</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="box instagram-api">
                            <h3>Instagram</h3>
                            <div className="post-wrap">
                                <div>
                                    <img src="./images/food-table.jpg" alt=""/>
                                </div>
                                <div>
                                    <img src="../images/food-table.jpg" alt=""/>
                                </div>
                                <div>
                                    <img src="./images/food-table.jpg" alt=""/>
                                </div>
                                <div>
                                    <img src="./images/food-table.jpg" alt=""/>
                                </div>
                                <div>
                                    <img src="./images/food-table.jpg" alt=""/>
                                </div>
                                <div>
                                    <img src="./images/food-table.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
               <Footer/>
            </div>
        </div>
      </div>
      
        )
  }
  
  export default Homepage;