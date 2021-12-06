import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import Header from '../Pages/Header';
import MessageBox from '../components/MessageBox';
import Footer from '../Pages/Footer';
import './RegisterScreen.css';

export default function RegisterScreen(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords dont match');
    } else {
      dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
       <Header/>

       <div className="RegisterBody">
       <div className="bg-image-Login"></div>
          <div className="Registerwrap">
          
          <div className="RegisterForm">
          <form onSubmit={submitHandler}>
            
              <h1>Create Account</h1>
            
            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
            
              <p htmlFor="name">Name</p>
              <input type="text" id="name" placeholder="Enter name" pattern="[a-zA-Z ]+" title="Name can't contain letters" maxLength="14" minLength="6" required onChange={(e) => setName(e.target.value)}></input>
              
              <p htmlFor="email">Email address</p>
              <input type="email" id="email" placeholder="Enter email"  maxLength="30" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Incorrect email format" required onChange={(e) => setEmail(e.target.value)}></input>
             
              <p htmlFor="password">Password</p>
              <input type="password" id="password" placeholder="Enter password" pattern=".{8,}" title="Eight or more characters required" required onChange={(e) => setPassword(e.target.value)}></input>
             
              <p htmlFor="confirmPassword">Confirm Password</p>
              <input type="password" id="confirmPassword" placeholder="Re-Enter password" required onChange={(e) => setConfirmPassword(e.target.value)}></input>
 
            
              
              <button className="primary" type="submit">
                Register
              </button>
            
            <div className="botline">
              <label />
              <div className="makeAcc">
                Already have an account?{' '}
                <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
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