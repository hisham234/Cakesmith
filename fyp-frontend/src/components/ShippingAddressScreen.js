import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import Footer from '../Pages/Footer';
import Header from '../Pages/Header';
import './ShippingAddressScreen.css';

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!userInfo) {
    props.history.push('/signin');
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    props.history.push('/payment');
  };
  return (
    <div>
       <Header/>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="LoginBody">
      <div className='Shippingwrap'>

        <div className='ShippingForm'>
          <form onSubmit={submitHandler}>
            <h1>Shipping Address</h1>
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                pattern="[a-z A-Z]+" title="Name can't contain letters" maxLength="20" minLength="6"
                placeholder="Enter full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Enter address"
                maxLength="100" minLength="15"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                pattern="[a-zA-Z]+"
                title="City can't contain letters"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label htmlFor="postalCode">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                pattern="[0-9]+"
                maxLength="6" minLength="5"
                placeholder="Enter postal code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                pattern="[a-zA-Z]+"
                title="Country can't contain letters"
                placeholder="Enter country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label />
              <button className="primary" type="submit">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}