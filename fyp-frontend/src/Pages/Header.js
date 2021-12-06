import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';


function Header(){
    const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
    return(
        
        
                <nav>
                <div className="navbar magic-shadow">

                        <div className="flex homeNav homeNav1 float">
                            <Link to="/about" className="cool-link">About us</Link>
                            <Link to ="/" className="cool-link" className="active">Home</Link>
                        </div>

                        <div className="branding flex float ">
                            
                        </div>

                        <div className="flex homeNav homeNav2" >

                            <Link to ="/productscreen" className="cool-link">Shop</Link>
                            <Link to="/contact" className="cool-link">Contact us</Link>
                            </div>
                            
                            <div className="flex homeNav navright">
                            <Link to="/cart" className="carticon"></Link> {cartItems.length > 0 && ( 
                            <span className="badge">{cartItems.length}</span>)}
                            {userInfo ? 

                            (
                            <div className="dropdown">
                                <Link to="#" className="dropdown1">{userInfo.name} <i className="fa fa-caret-down"></i>{' '}</Link>

                                <ul className="dropdown-content">
                                  <li> <Link to="/profile">User Profile</Link></li><li>
                                  <Link to="/orderhistory">Order History</Link></li>
                                  <li> <a onClick={signoutHandler}>Sign Out</a></li>
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
                              <li><Link to="/dashboard">Dashboard</Link></li>
                              <li><Link to="/productlist">Products</Link></li>
                              <li><Link to="/orderlist">Orders</Link></li>
                              <li><Link to="/userlist">Users</Link></li>
                              <li><Link to="/support">Support</Link></li>
                            </ul>
                          </div>
                        )}
                             
                        </div>
                    </div>
                </nav>
        
    );
}

export default Header;