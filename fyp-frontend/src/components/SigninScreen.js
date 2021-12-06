
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import Header from '../Pages/Header';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Footer from '../Pages/Footer';
import './SigninScreen.css';


export default function SigninScreen(props) {
    const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  

  return (
    <div>

           <Header/>

      <div className="LoginBody">
      <div className="bg-image-Login"></div>
          <div className="Loginwrap">
          <img alt="" class="avatar" src="https://i.postimg.cc/zDyt7KCv/a1.jpg"/>


            <div className="LoginForm">
              <form onSubmit={submitHandler}>
                
                  <h1>Sign In</h1>
                
                
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}

               
                  <p htmlFor="email">Email address</p>
                  <input  type="email" id="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)}></input>
                  <p htmlFor="password">Password</p>
                  <input type="password" id="password" placeholder="Enter password" required onChange={(e) => setPassword(e.target.value)}></input>
              


                  <button className="primary" type="submit">
                    Sign In
                  </button>


                <div className="botline">
                  <label />
                  <div className="makeAcc">
                    New customer?{' '}
                    <Link to={`/register?redirect=${redirect}`} >
                      Create your account
                    </Link>
                  </div>
                </div>

              </form>
              </div>
          </div>
    </div>

  <Footer/>

  </div>
  );
}
