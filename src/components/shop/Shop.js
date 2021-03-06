import React, { Component } from 'react'
import Header from "../base/Header";
import Footer from "../base/Footer";
import Model from "../base/Model";
import { Link } from "react-router-dom";

export default class Shop extends Component {
  render() {
    return (
      <React.Fragment>

        <Header/>

          <div>
         <main className="main__content_wrapper">
        
        {/* <!-- Start breadcrumb section --> */}
        <section className="breadcrumb__section breadcrumb__bg">
            <div className="container">
                <div className="row row-cols-1">
                    <div className="col">
                        <div className="breadcrumb__content text-center">
                            <h1 className="breadcrumb__content--title text-white mb-25">Shop Grid</h1>
                            <ul className="breadcrumb__content--menu d-flex justify-content-center">
                                <li className="breadcrumb__content--menu__items"><Link className="text-white" to="index">Home</Link></li>
                                <li className="breadcrumb__content--menu__items"><span className="text-white">Shop Grid</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* <!-- Start shop section --> */}
        <section className="shop__section section--padding">
            <div className="container">

                <div className="shop__header bg__gray--color d-flex align-items-center justify-content-between mb-30">
                    <button className="widget__filter--btn d-flex align-items-center" data-offcanvas>
                        <svg  className="widget__filter--btn__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="28" d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80"/><circle cx="336" cy="128" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="28"/><circle cx="176" cy="256" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="28"/><circle cx="336" cy="384" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="28"/></svg> 
                        <span className="widget__filter--btn__text">Filter</span>
                    </button>
                    <div className="product__view--mode d-flex align-items-center">
                        <div className="product__view--mode__list product__short--by align-items-center d-none d-lg-flex">
                            <label className="product__view--label">Prev Page :</label>
                            <div className="select shop__header--select">
                                <select className="product__view--select">
                                    <option selected value="1">65</option>
                                    <option value="2">40</option>
                                    <option value="3">42</option>
                                    <option value="4">57 </option>
                                    <option value="5">60 </option>
                                </select>
                            </div>
                        </div>
                        <div className="product__view--mode__list product__short--by align-items-center d-none d-lg-flex">
                            <label className="product__view--label">Sort By :</label>
                            <div className="select shop__header--select">
                                <select className="product__view--select">
                                    <option selected value="1">Sort by latest</option>
                                    <option value="2">Sort by popularity</option>
                                    <option value="3">Sort by newness</option>
                                    <option value="4">Sort by  rating </option>
                                </select>
                            </div>
                        </div>
                        <div className="product__view--mode__list">
                            <div className="product__tab--one product__grid--column__buttons d-flex justify-content-center">
                                <button className="product__grid--column__buttons--icons active" aria-label="grid btn" data-toggle="tab" data-target="#product_grid">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 9 9">
                                        <g  transform="translate(-1360 -479)">
                                          <rect id="Rectangle_5725" data-name="Rectangle 5725" width="4" height="4" transform="translate(1360 479)" fill="currentColor"/>
                                          <rect id="Rectangle_5727" data-name="Rectangle 5727" width="4" height="4" transform="translate(1360 484)" fill="currentColor"/>
                                          <rect id="Rectangle_5726" data-name="Rectangle 5726" width="4" height="4" transform="translate(1365 479)" fill="currentColor"/>
                                          <rect id="Rectangle_5728" data-name="Rectangle 5728" width="4" height="4" transform="translate(1365 484)" fill="currentColor"/>
                                        </g>
                                    </svg>
                                </button>
                                <button className="product__grid--column__buttons--icons" aria-label="list btn" data-toggle="tab" data-target="#product_list">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 13 8">
                                        <g id="Group_14700" data-name="Group 14700" transform="translate(-1376 -478)">
                                          <g  transform="translate(12 -2)">
                                            <g id="Group_1326" data-name="Group 1326">
                                              <rect id="Rectangle_5729" data-name="Rectangle 5729" width="3" height="2" transform="translate(1364 483)" fill="currentColor"/>
                                              <rect id="Rectangle_5730" data-name="Rectangle 5730" width="9" height="2" transform="translate(1368 483)" fill="currentColor"/>
                                            </g>
                                            <g id="Group_1328" data-name="Group 1328" transform="translate(0 -3)">
                                              <rect id="Rectangle_5729-2" data-name="Rectangle 5729" width="3" height="2" transform="translate(1364 483)" fill="currentColor"/>
                                              <rect id="Rectangle_5730-2" data-name="Rectangle 5730" width="9" height="2" transform="translate(1368 483)" fill="currentColor"/>
                                            </g>
                                            <g id="Group_1327" data-name="Group 1327" transform="translate(0 -1)">
                                              <rect id="Rectangle_5731" data-name="Rectangle 5731" width="3" height="2" transform="translate(1364 487)" fill="currentColor"/>
                                              <rect id="Rectangle_5732" data-name="Rectangle 5732" width="9" height="2" transform="translate(1368 487)" fill="currentColor"/>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className="product__showing--count">Showing 1???9 of 21 results</p>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="shop__product--wrapper">
                            <div className="tab_content">
                                <div id="product_grid" className="tab_pane active show">
                                    <div className="product__section--inner product__section--style3__inner">
                                        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 mb--n30">
                                            <div className="col mb-30">
                                                <div className="product__items product__items2">
                                                    <div className="product__items--thumbnail">
                                                        <Link className="product__items--link" to="product-details">
                                                            <img className="product__items--img product__primary--img" src="assets/img/product/bhindi.jpg" alt="product-img"/>
                                                        </Link>
                                                        <div className="product__badge">
                                                            <span className="product__badge--items sale">Sale</span>
                                                        </div>
                                                        <ul className="product__items--action">
                                                            <li className="product__items--action__list">
                                                                <Link className="product__items--action__btn" to="wishlist">
                                                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                                                                    <span className="visually-hidden">Wishlist</span>
                                                                </Link>
                                                            </li>
                                                            <li className="product__items--action__list">
                                                                <Link className="product__items--action__btn" data-open="modal1" to="javascript:void(0)">
                                                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/></svg>
                                                                    <span className="visually-hidden">Quick View</span>  
                                                                </Link>
                                                            </li>
                                                            <li className="product__items--action__list">
                                                                <Link className="product__items--action__btn" to="compare">
                                                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h85.19a80 80 0 0066.56-35.62L256 256"/><path d="M64 160h85.19a80 80 0 0166.56 35.62l80.5 120.76A80 80 0 00362.81 352H416M416 160h-53.19a80 80 0 00-66.56 35.62L288 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                                                                    <span className="visually-hidden">Compare</span>    
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__items--content product__items2--content text-center">
                                                        <Link className="add__to--cart__btn" to="cart">+ Add to cart</Link>
                                                        <h3 className="product__items--content__title h4"><Link to="product-details">Vegetable-healthy</Link></h3>
                                                        <div className="product__items--price">
                                                            <span className="current__price">RS39.00</span>
                                                            <span className="old__price">RS59.00</span>
                                                        </div>
                                                        <div className="product__items--rating d-flex justify-content-center align-items-center">
                                                            <ul className="d-flex">
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                        <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                                        </svg>
                                                                    </span>
                                                                </li>
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                        <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                                        </svg>
                                                                    </span>
                                                                </li>
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                        <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                                        </svg>
                                                                    </span>
                                                                </li>
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                        <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                                        </svg>
                                                                    </span>
                                                                </li>
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                            <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="#c7c5c2"/>
                                                                        </svg> 
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                            <span className="product__items--rating__count--number">(24)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items product__items2">
                                                    <div className="product__items--thumbnail">
                                                        <Link className="product__items--link" to="product-details">
                                                            <img className="product__items--img product__primary--img" src="assets/img/product/bhindi.jpg" alt="product-img"/>
                                                            
                                                        </Link>
                                                        <div className="product__badge">
                                                            <span className="product__badge--items sale">Sale</span>
                                                        </div>
                                                        <ul className="product__items--action">
                                                            <li className="product__items--action__list">
                                                                <Link className="product__items--action__btn" to="wishlist">
                                                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                                                                    <span className="visually-hidden">Wishlist</span>
                                                                </Link>
                                                            </li>
                                                            <li className="product__items--action__list">
                                                                <Link className="product__items--action__btn" data-open="modal1" to="javascript:void(0)">
                                                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/></svg>
                                                                    <span className="visually-hidden">Quick View</span>  
                                                                </Link>
                                                            </li>
                                                            <li className="product__items--action__list">
                                                                <Link className="product__items--action__btn" to="compare">
                                                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h85.19a80 80 0 0066.56-35.62L256 256"/><path d="M64 160h85.19a80 80 0 0166.56 35.62l80.5 120.76A80 80 0 00362.81 352H416M416 160h-53.19a80 80 0 00-66.56 35.62L288 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                                                                    <span className="visually-hidden">Compare</span>    
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__items--content product__items2--content text-center">
                                                        <Link className="add__to--cart__btn" to="cart">+ Add to cart</Link>
                                                        <h3 className="product__items--content__title h4"><Link to="product-details">BHINDI</Link></h3>
                                                        <div className="product__items--price">
                                                            <span className="current__price">RS42.00</span>
                                                            <span className="old__price">RS48.00</span>
                                                        </div>
                                                        <div className="product__items--rating d-flex justify-content-center align-items-center">
                                                            <ul className="d-flex">
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                        <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                                        </svg>
                                                                    </span>
                                                                </li>
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                        <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                                        </svg>
                                                                    </span>
                                                                </li>
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                        <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                                        </svg>
                                                                    </span>
                                                                </li>
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                        <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                                        </svg>
                                                                    </span>
                                                                </li>
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                            <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="#c7c5c2"/>
                                                                        </svg> 
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                            <span className="product__items--rating__count--number">(24)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items product__items2">
                                                    <div className="product__items--thumbnail">
                                                        <Link className="product__items--link" to="product-details">
                                                            <img className="product__items--img product__primary--img" src="assets/img/product/cauli.jpg" alt="product-img"/>
                                                            
                                                        </Link>
                                                        <div className="product__badge">
                                                            <span className="product__badge--items sale">Sale</span>
                                                        </div>
                                                        <ul className="product__items--action">
                                                            <li className="product__items--action__list">
                                                                <Link className="product__items--action__btn" to="wishlist">
                                                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                                                                    <span className="visually-hidden">Wishlist</span>
                                                                </Link>
                                                            </li>
                                                            <li className="product__items--action__list">
                                                                <Link className="product__items--action__btn" data-open="modal1" to="javascript:void(0)">
                                                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/></svg>
                                                                    <span className="visually-hidden">Quick View</span>  
                                                                </Link>
                                                            </li>
                                                            <li className="product__items--action__list">
                                                                <Link className="product__items--action__btn" to="compare">
                                                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h85.19a80 80 0 0066.56-35.62L256 256"/><path d="M64 160h85.19a80 80 0 0166.56 35.62l80.5 120.76A80 80 0 00362.81 352H416M416 160h-53.19a80 80 0 00-66.56 35.62L288 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                                                                    <span className="visually-hidden">Compare</span>    
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__items--content product__items2--content text-center">
                                                        <Link className="add__to--cart__btn" to="cart">+ Add to cart</Link>
                                                        <h3 className="product__items--content__title h4"><Link to="product-details">CAULIFLOWER</Link></h3>
                                                        <div className="product__items--price">
                                                            <span className="current__price">RS38.00</span>
                                                            <span className="old__price">RS44.00</span>
                                                        </div>
                                                        <div className="product__items--rating d-flex justify-content-center align-items-center">
                                                            <ul className="d-flex">
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                        <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                                        </svg>
                                                                    </span>
                                                                </li>
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                        <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                                        </svg>
                                                                    </span>
                                                                </li>
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                        <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                                        </svg>
                                                                    </span>
                                                                </li>
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                        <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                                        </svg>
                                                                    </span>
                                                                </li>
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                            <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="#c7c5c2"/>
                                                                        </svg> 
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                            <span className="product__items--rating__count--number">(24)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items product__items2">
                                                    <div className="product__items--thumbnail">
                                                        <Link className="product__items--link" to="product-details">
                                                            <img className="product__items--img product__primary--img" src="assets/img/product/product7.png" alt="product-img"/>
                                                            <img className="product__items--img product__secondary--img" src="assets/img/product/product8.png" alt="product-img"/>
                                                        </Link>
                                                        <div className="product__badge">
                                                            <span className="product__badge--items sale">Sale</span>
                                                        </div>
                                                        <ul className="product__items--action">
                                                            <li className="product__items--action__list">
                                                                <Link className="product__items--action__btn" to="wishlist">
                                                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                                                                    <span className="visually-hidden">Wishlist</span>
                                                                </Link>
                                                            </li>
                                                            <li className="product__items--action__list">
                                                                <Link className="product__items--action__btn" data-open="modal1" to="javascript:void(0)">
                                                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/></svg>
                                                                    <span className="visually-hidden">Quick View</span>  
                                                                </Link>
                                                            </li>
                                                            <li className="product__items--action__list">
                                                                <Link className="product__items--action__btn" to="compare">
                                                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h85.19a80 80 0 0066.56-35.62L256 256"/><path d="M64 160h85.19a80 80 0 0166.56 35.62l80.5 120.76A80 80 0 00362.81 352H416M416 160h-53.19a80 80 0 00-66.56 35.62L288 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                                                                    <span className="visually-hidden">Compare</span>    
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__items--content product__items2--content text-center">
                                                        <Link className="add__to--cart__btn" to="cart">+ Add to cart</Link>
                                                        <h3 className="product__items--content__title h4"><Link to="product-details">Green-surface</Link></h3>
                                                        <div className="product__items--price">
                                                            <span className="current__price">RS38.00</span>
                                                            <span className="old__price">RS40.00</span>
                                                        </div>
                                                        <div className="product__items--rating d-flex justify-content-center align-items-center">
                                                            <ul className="d-flex">
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                        <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                                        </svg>
                                                                    </span>
                                                                </li>
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                        <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                                        </svg>
                                                                    </span>
                                                                </li>
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                        <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                                        </svg>
                                                                    </span>
                                                                </li>
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                        <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                                        </svg>
                                                                    </span>
                                                                </li>
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                            <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="#c7c5c2"/>
                                                                        </svg> 
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                            <span className="product__items--rating__count--number">(24)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination__area bg__gray--color">
                                <nav className="pagination justify-content-center">
                                    <ul className="pagination__wrapper d-flex align-items-center justify-content-center">
                                        <li className="pagination__list">
                                            <Link to="shop" className="pagination__item--arrow  link ">
                                                <svg xmlns="http://www.w3.org/2000/svg"  width="22.51" height="20.443" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"/></svg>
                                                <span className="visually-hidden">page left arrow</span>
                                            </Link>
                                        </li>
                                        <li className="pagination__list"><span className="pagination__item pagination__item--current">1</span></li>
                                        <li className="pagination__list"><Link to="shop" className="pagination__item link">2</Link></li>
                                        <li className="pagination__list"><Link to="shop" className="pagination__item link">3</Link></li>
                                        <li className="pagination__list"><Link to="shop" className="pagination__item link">4</Link></li>
                                        <li className="pagination__list">
                                            <Link to="shop" className="pagination__item--arrow  link ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"/></svg>
                                                <span className="visually-hidden">page right arrow</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
       

      
        
    </main>
    </div>

    <Footer/>
    <Model/>


    
      
      </React.Fragment>
    )
  }
}
