import js from './js/app';
require('slick-carousel');

function App() {
    return (
    <div className="main-wrapper">
    <div className="site-content-wrapper">
        <div className="site-content">
            <nav>
                <div className="navbar magic-shadow div2">
                        <div className="branding flex ">
                            <img src="./images/The Cakesmith500.png" alt=""/>
                            <h1><span className="The-Cakesmith logoText">The Cakesmith</span></h1>
                        </div>
                        
                    <div className="flex homeNav" >
                        <a href="#" className="cool-link" className="active">Home</a>
                        <a href="#second" className="cool-link">About us</a>
                        <a href="#" className="cool-link">Products</a>
                        <a href="#" className="cool-link">Blog</a>
                        <a href="#" className="cool-link">Shop</a>
                        <a href="#" className="cool-link">Services</a>
                        <a href="#" className="cool-link">Gallery</a>
                        <a href="#ContactUs" className="cool-link">Contact us</a>
                        <button className="orderBtn" style={{color:"white"}}>Order Now</button>
                    </div>
                </div>
            </nav>
  
            <header className="hero flex items-center">
                <div className="container" id="welcome">
                    <div className="welcome flex items-center">
                        <h1>Welcome to <span id="The-Cakesmith">The Cakesmith</span></h1>
                    </div>
                    <h1>The World Best <span>Bakery</span> Website</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the
                        industry's standard dummy.</p>
                    <div>
                        <button className="btn btn-primary">Read More</button>
                        <button className="btn btn-secondary">Shop Now</button>
                    </div>
                    <div className="hero-image">
                        <img src="./images/straw.png" alt=""/>
                    </div>
                </div>
            </header>
  

            <section className="top-products">
                    <div className="container">
                        <h1 className="section-heading">Top products</h1>
                        <div className="slider">
                            <button className="slider-btn prev-btn"><img src="./icons/pre.svg" alt=""/></button>
                            <button className="slider-btn next-btn"><img src="./icons/next.svg" alt=""/></button>
                            <div className="food-slider">
                                <div className="food-card magic-shadow-sm">
                                    <div className="product-image flex items-center justify-center">
                                        <img src="./images/blackforest-cake.jpg" alt=""/>
                                    </div>
                                    <hr/>
                                    <div>
                                        <h2 className="text-center">Blackforest Cake</h2>
                                        <div className="stars flex justify-center items-center">
                                            <img src="./icons/start-filled.svg" alt=""/>
                                            <img src="./icons/start-filled.svg" alt=""/>
                                            <img src="./icons/start-filled.svg" alt=""/>
                                            <img src="./icons/star-grey.svg" alt=""/>
                                            <img src="./icons/star-grey.svg" alt=""/>
                                        </div>
                                        <div className="price text-center">
                                            $ 1.25
                                        </div>
                                        <div className="flex justify-center">
                                            <button>
                                                <img src="./icons/cart-2.svg" alt=""/>
                                                <span>Add to cart</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="food-card magic-shadow-sm">
                                    <div className="product-image flex items-center justify-center">
                                        <img src="./images/chocolate-lava.jpg" alt=""/>
                                    </div>
                                    <hr/>
                                    <div>
                                        <h2 className="text-center">Chocolate Lava Cake</h2>
                                        <div className="stars flex justify-center items-center">
                                            <img src="./icons/start-filled.svg" alt=""/>
                                            <img src="./icons/start-filled.svg" alt=""/>
                                            <img src="./icons/start-filled.svg" alt=""/>
                                            <img src="./icons/star-grey.svg" alt=""/>
                                            <img src="./icons/star-grey.svg" alt=""/>
                                        </div>
                                        <div className="price text-center">
                                            $ 1.25
                                        </div>
                                        <div className="flex justify-center">
                                            <button>
                                                <img src="./icons/cart-2.svg" alt=""/>
                                                <span>Add to cart</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="food-card magic-shadow-sm">
                                    <div className="product-image flex items-center justify-center">
                                        <img src="./images/strawberry-cake.jpg" alt=""/>
                                    </div>
                                    <hr/>
                                    <div>
                                        <h2 className="text-center">Strawberry Cake</h2>
                                        <div className="stars flex justify-center items-center">
                                            <img src="./icons/start-filled.svg" alt=""/>
                                            <img src="./icons/start-filled.svg" alt=""/>
                                            <img src="./icons/start-filled.svg" alt=""/>
                                            <img src="./icons/star-grey.svg" alt=""/>
                                            <img src="./icons/star-grey.svg" alt=""/>
                                        </div>
                                        <div className="price text-center">
                                            $ 1.25
                                        </div>
                                        <div className="flex justify-center">
                                            <button>
                                                <img src="./icons/cart-2.svg" alt=""/>
                                                <span>Add to cart</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="food-card magic-shadow-sm">
                                    <div className="product-image flex items-center justify-center">
                                        <img src="./images/cup-cake.jpg" alt=""/>
                                    </div>
                                    <hr/>
                                    <div>
                                        <h2 className="text-center">Cup Cakes</h2>
                                        <div className="stars flex justify-center items-center">
                                            <img src="./icons/start-filled.svg" alt=""/>
                                            <img src="./icons/start-filled.svg" alt=""/>
                                            <img src="./icons/start-filled.svg" alt=""/>
                                            <img src="./icons/star-grey.svg" alt=""/>
                                            <img src="./icons/star-grey.svg" alt=""/>
                                        </div>
                                        <div className="price text-center">
                                            $ 1.25
                                        </div>
                                        <div className="flex justify-center">
                                            <button>
                                                <img src="./icons/cart-2.svg" alt=""/>
                                                <span>Add to cart</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center btn-wrapper">
                            <button className="btn btn-secondary">View More</button>
                        </div>
                    </div>
                </section>
            
            
            <section className="about-meal" id="second">
                <div className="container second"  >
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
                            <button className="btn btn-secondary">Read More</button>
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
                    <div className="article-wrapper">
                        <article className="card magic-shadow-sm">
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
                        </article>
                        <article className="card magic-shadow-sm">
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
                                    <span>(+84) 123 456 789</span>
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
                        <button className="btn btn-secondary">Read More</button>
                    </div>
                    <div className="box">
                        <h3>Quik Links</h3>
                        <ul>
                          <li><a href="#">Home</a></li>
                          <li><a href="#">About us</a></li>
                          <li><a href="#">Products</a></li>
                          <li><a href="#">Blog</a></li>
                          <li><a href="#">Services</a></li>
                          <li><a href="#">Gallery</a></li>
                          <li><a href="#">Contact us</a></li>
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
                            <div>
                                <img src="./images/food-table.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="copyright">
                <div>
                    Copyright © 2020 .All rights reserved by <a className="The-Cakesmith">The Cakesmith</a>.
                </div>
            </footer>
        </div>
    </div>
  </div>
  
    )
  }
  
  export default App;