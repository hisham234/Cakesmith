import React, { useState } from 'react';
import SearchScreen from './SearchScreen';
import  {useEffect}  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, useParams } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
import Footer from '../Pages/Footer';
import Header from '../Pages/Header';
import Rating from '../components/Rating';
import { prices, ratings } from '../utils';

export default function SearchBox(props) {
  const [names, setName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${names}`);
  };




  const {
    name = 'all',
    category = 'all',
    min = 0,
    max = 0,
    rating = 0,
    order = 'newest',
  } = useParams();

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(
      listProducts({
        name: name !== 'all' ? name : '',
        category: category !== 'all' ? category : '',
        min,
        max,
        rating,
        order,
      })
    );
  }, [category, dispatch, max, min, name, order, rating]);

  const getFilterUrl = (filter) => {
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    const filterRating = filter.rating || rating;
    const sortOrder = filter.order || order;
    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
    return `/search/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}`;
  };

  

  return (


   


    <form className="search" onSubmit={submitHandler}>


      <div className=" ProdListViewSearch">

        <div className="SearchBarA">


          <div>
            {loading ? (
              <LoadingBox></LoadingBox>
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <div id="SearchResults">{products.length} Results</div>
            )}
            <div id="hhhh"> Sort by: &nbsp;
              <select className="minimal"
                value={order}
                onChange={(e) => {
                  props.history.push(getFilterUrl({ order: e.target.value }));
                }}
              > <option value="" selected disabled>Choose here</option>
                <option value="newest">Newest Arrivals</option>
                <option value="lowest">Price: Low to High</option>
                <option value="highest">Price: High to Low</option>
                <option value="toprated">Reviews</option>
              </select>
            </div>
          </div>




        </div>

        <div className="SearchBarB">
          <button id="ProdListViewSearchButton" type="submit">
            <i className="fa fa-search"></i>
          </button>
          <input style={{fontSize:"16px"}} type="text" name="q" id="ProdListViewSearchInput" placeholder="Search" onChange={(e) => setName(e.target.value)}></input>
        </div>

      </div>
    </form>
  );
}