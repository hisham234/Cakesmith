import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { detailsUser, updateUserProfile } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';
import Footer from '../Pages/Footer';
import Header from '../Pages/Header';
import './ProfileScreen.css';


export default function ProfileScreen() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;

  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(detailsUser(userInfo._id));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }, [dispatch, userInfo._id, user]);
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    if (password !== confirmPassword) {
        alert('Password and Confirm Password Are Not Matched');
      } else {
        dispatch(updateUserProfile({ userId: user._id, name, email, password }));
      }
  };
  return (
    <div>
        <Header/>
        
        <div className="ProfileViewBody">
        <div className="bg-image-Login"></div>
          <div className="ProfileViewwrap">

          <div className="ProfileViewForm">
          <form className="form" onSubmit={submitHandler}>
            
              <h1>User Profile</h1>
            
            {loading ? (
              <LoadingBox></LoadingBox>
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <>
              {loadingUpdate && <LoadingBox></LoadingBox>}
                {errorUpdate && (
                  <MessageBox variant="danger">{errorUpdate}</MessageBox>
                )}
                {successUpdate && (
                  <MessageBox variant="success">
                    Profile Updated Successfully
                  </MessageBox>
                )}
                
                  <p htmlFor="name">Name</p>
                  <input id="name" type="text" placeholder="Enter name" pattern="[a-zA-Z]+" title="Name can't contain letters" maxLength="14" minLength="6"  value={name} onChange={(e) => setName(e.target.value)}></input>
                
                
                  <p htmlFor="email">Email</p>
                  <input id="email" type="email" placeholder="Enter email"  maxLength="30" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Incorrect email format" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            
                
                  <p htmlFor="password">Password</p>
                  <input id="password" type="password" placeholder="Enter password" pattern=".{8,}" title="Eight or more characters required" onChange={(e) => setPassword(e.target.value)}></input>
                
                
                  <p htmlFor="confirmPassword">confirm Password</p>
                  <input id="confirmPassword" type="password" placeholder="Re-enter password" onChange={(e) => setConfirmPassword(e.target.value)}></input>
               
                
                  <button className="primary" type="submit">
                    Update
                  </button>
                
              </>
            )}
          </form>
      </div>


      </div>
      </div>
      <Footer/>
    </div>
  );
}