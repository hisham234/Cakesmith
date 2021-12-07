import { Route, Link } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import ProductScreen from './components/ProductScreen';
import ProductDetails from './components/ProductDetails';
import CartScreen from './components/CartScreen';
import SigninScreen from './components/SigninScreen';
import RegisterScreen from './components/RegisterScreen';
import ShippingAddressScreen from './components/ShippingAddressScreen';
import PaymentMethodScreen from './components/PaymentMethodScreen';
import PlaceOrderScreen from './components/PlaceOrderScreen';
import OrderScreen from './components/OrderScreen';
import OrderHistoryScreen from './components/OrderHistoryScreen';
import ProfileScreen from './components/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './components/ProductListScreen';
import ProductEditScreen from './components/ProductEditScreen';
import OrderListScreen from './components/OrderListScreen';
import UserListScreen from './components/UserListScreen';
import UserEditScreen from './components/UserEditScreen';
import SearchScreen from './components/SearchScreen';
import DashboardScreen from './components/DashboardScreen';
import SupportScreen from './components/SupportScreen';
import ChatBox from './components/ChatBox';
import React from 'react';

require('slick-carousel');


function App() {
  return <div className="App">

    <Route exact path="/" component={Homepage} />
    <Route exact path="/about" component={AboutUs} />
    <Route exact path="/contact" component={ContactUs} />
    <Route exact path="/productscreen" component={ProductScreen} />
    <Route path="/product/:id" component={ProductDetails} exact></Route>
    <Route exact path="/signin" component={SigninScreen}></Route>
    <Route path="/register" component={RegisterScreen}></Route>
    <Route path="/cart/:id?" component={CartScreen}></Route>
    <Route path="/shipping" component={ShippingAddressScreen}></Route>
    <Route path="/payment" component={PaymentMethodScreen}></Route>
    <Route path="/placeorder" component={PlaceOrderScreen}></Route>
    <Route path="/order/:id" component={OrderScreen}></Route>
    <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
    <Route path="/cart" component={CartScreen}></Route>
    <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
    <PrivateRoute
      path="/profile"
      component={ProfileScreen}
    ></PrivateRoute>
    <AdminRoute
      path="/productlist"
      component={ProductListScreen}
    ></AdminRoute>
    <Route
      path="/product/:id/edit"
      component={ProductEditScreen}
      exact
    ></Route>
    <AdminRoute
      path="/orderlist"
      component={OrderListScreen}
    ></AdminRoute>
    <AdminRoute
      path="/user/:id/edit"
      component={UserEditScreen}
    ></AdminRoute>
    <AdminRoute
      path="/dashboard"
      component={DashboardScreen}
    ></AdminRoute>
    <AdminRoute path="/support" component={SupportScreen}></AdminRoute>
    <Route
      path="/search/name/:name?"
      component={SearchScreen}
      exact
    ></Route>
    <Route
      path="/search/category/:category"
      component={SearchScreen}
      exact
    ></Route>
    <Route
      path="/search/category/:category/name/:name"
      component={SearchScreen}
      exact
    ></Route>
    <Route
      path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order"
      component={SearchScreen}
      exact
    ></Route>
  </div>
}

export default App;