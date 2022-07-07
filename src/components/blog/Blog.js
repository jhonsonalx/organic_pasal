import React, { Component } from "react";
import Header from "../base/Header";
import Footer from "../base/Footer";
import Model from "../base/Model";
import { Link } from "react-router-dom";

export default class Blog extends Component {
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
                            <h1 className="breadcrumb__content--title text-white mb-25">Blog Details</h1>
                            <ul className="breadcrumb__content--menu d-flex justify-content-center">
                                <li className="breadcrumb__content--menu__items">< Link className="text-white"  to="index">Home </Link></li>
                                <li className="breadcrumb__content--menu__items"><span className="text-white">Blog Details</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       

        {/* <!-- Start blog details section --> */}
        <section className="blog__details--section section--padding">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xxl-9 col-xl-8 col-lg-8">
                        <div className="blog__details--wrapper">
                            <div className="entry__blog">
                                <div className="blog__post--header mb-30">
                                    <h2 className="post__header--title mb-15">Lorem ipsum dolor, sit amet consectetur elit saepe!</h2>
                                    <p className="blog__post--meta">Posted by : admin / On : February 14, 2022 / In : < Link className="blog__post--meta__link"  to="blog-details">Company, Image, Travel </Link></p>                                     
                                </div>
                                <div className="blog__thumbnail mb-30">
                                    <img className="blog__thumbnail--img border-radius-10" src="assets/img/blog/blog-page-big1.png" alt="blog-img"/>
                                </div>
                                <div className="blog__details--content">
                                    <h3 className="blog__details--content__subtitle mb-25">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non sint saepe rem eveniet sit ea esse praesentium!</h3>
                                    <p className="blog__details--content__desc mb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita in recusandae sit officia ipsa, natus ad voluptatem doloribus dolorum placeat, rem deleniti est accusamus ipsum corporis voluptates soluta totam maiores nostrum reprehenderit quasi? Laboriosam itaque ab odit harum sed aut voluptates, illum unde. Saepe enim ad ut pariatur doloremque quas harum sequi, excepturi tempore exercitationem suscipit quam recusandae corrupti quibusdam. Laboriosam sapiente provident repellat blanditiis ratione nostrum illum asperiores quo cumque in quisquam, non iste aut illo vel, alias debitis!</p>
                                    <p className="blog__details--content__desc mb-30"> Vel ipsa officiis nobis eveniet omnis consequuntur neque quasi, in, optio rerum suscipit totam odio. Alias necessitatibus nulla accusantium voluptatem ipsum voluptatum, vero in impedit nobis cupiditate ea, dicta eos facilis eaque optio laudantium non neque itaque? Possimus officia aut accusamus illum, adipisci, nihil numquam minus eum fugit, beatae minima facilis magni.</p>
                                    <blockquote className="blockquote__content bg__gray--color mb-30">
                                        <p className="blockquote__content--desc">Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. In venenatis elit ac ultrices convallis. Duis est nisi, tincidunt ac urna sed, cursus blandit lectus. In ullamcorper sit amet ligula ut eleifend. Proin dictum tempor ligula, ac feugiat metus. Sed finibus tortor eu scelerisque scelerisque.</p>
                                    </blockquote>
                                    <p className="blog__details--content__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sapiente omnis sunt labore mollitia, quaerat incidunt sequi, ut alias accusamus nostrum magni fugit facilis dignissimos illum repellendus et numquam adipisci quos. Eos omnis maiores beatae cum a consequatur magnam sequi neque, at numquam qui ipsam unde veritatis voluptates quam dicta! Ipsam, mollitia illo fuga vel culpa reprehenderit quisquam maxime nesciunt. Sunt quaerat inventore aspernatur quibusdam corrupti numquam mollitia exercitationem rem alias consectetur hic iusto dignissimos nostrum odio, cumque impedit.</p>
                                </div>
                            </div>
                            <div className="blog__tags--social__media d-flex align-items-center justify-content-between">
                                <div className="blog__tags--media d-flex align-items-center">
                                    <label className="blog__tags--media__title">Releted Tags :</label>
                                    <ul className="d-flex">
                                        <li className="blog__tags--media__list">< Link className="blog__tags--media__link"  to="blog">Popular </Link></li>
                                        <li className="blog__tags--media__list">< Link className="blog__tags--media__link"  to="blog">Business </Link></li>
                                        <li className="blog__tags--media__list">< Link className="blog__tags--media__link"  to="blog">desgin </Link></li>
                                        <li className="blog__tags--media__list">< Link className="blog__tags--media__link"  to="blog">Service </Link></li>
                                    </ul>
                                </div>
                                <div className="blog__social--media d-flex align-items-center">
                                    <label className="blog__social--media__title">Social Share :</label>
                                    <ul className="d-flex">
                                        <li className="blog__social--media__list">
                                            < Link className="blog__social--media__link" target="_blank"  to="https://www.facebook.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="7.667" height="16.524" viewBox="0 0 7.667 16.524">
                                                    <path data-name="Path 237" d="M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z" transform="translate(-960.13 -345.407)" fill="currentColor"></path>
                                                </svg>
                                                <span className="visually-hidden">Facebook</span>
                                             </Link>
                                        </li>
                                        <li className="blog__social--media__list">
                                            < Link className="blog__social--media__link" target="_blank"  to="https://twitter.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.489" height="13.384" viewBox="0 0 16.489 13.384">
                                                    <path data-name="Path 303" d="M966.025,1144.2v.433a9.783,9.783,0,0,1-.621,3.388,10.1,10.1,0,0,1-1.845,3.087,9.153,9.153,0,0,1-3.012,2.259,9.825,9.825,0,0,1-4.122.866,9.632,9.632,0,0,1-2.748-.4,9.346,9.346,0,0,1-2.447-1.11q.4.038.809.038a6.723,6.723,0,0,0,2.24-.376,7.022,7.022,0,0,0,1.958-1.054,3.379,3.379,0,0,1-1.958-.687,3.259,3.259,0,0,1-1.186-1.666,3.364,3.364,0,0,0,.621.056,3.488,3.488,0,0,0,.885-.113,3.267,3.267,0,0,1-1.374-.631,3.356,3.356,0,0,1-.969-1.186,3.524,3.524,0,0,1-.367-1.5v-.057a3.172,3.172,0,0,0,1.544.433,3.407,3.407,0,0,1-1.1-1.214,3.308,3.308,0,0,1-.4-1.609,3.362,3.362,0,0,1,.452-1.694,9.652,9.652,0,0,0,6.964,3.538,3.911,3.911,0,0,1-.075-.772,3.293,3.293,0,0,1,.452-1.694,3.409,3.409,0,0,1,1.233-1.233,3.257,3.257,0,0,1,1.685-.461,3.351,3.351,0,0,1,2.466,1.073,6.572,6.572,0,0,0,2.146-.828,3.272,3.272,0,0,1-.574,1.083,3.477,3.477,0,0,1-.913.8,6.869,6.869,0,0,0,1.958-.546A7.074,7.074,0,0,1,966.025,1144.2Z" transform="translate(-951.23 -1140.849)" fill="currentColor"></path>
                                                </svg>
                                                <span className="visually-hidden">Twitter</span>
                                             </Link>
                                        </li>
                                        <li className="blog__social--media__list">
                                            < Link className="blog__social--media__link" target="_blank"  to="https://www.instagram.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17.497" height="17.492" viewBox="0 0 19.497 19.492">
                                                    <path  data-name="Icon awesome-instagram" d="M9.747,6.24a5,5,0,1,0,5,5A4.99,4.99,0,0,0,9.747,6.24Zm0,8.247A3.249,3.249,0,1,1,13,11.238a3.255,3.255,0,0,1-3.249,3.249Zm6.368-8.451A1.166,1.166,0,1,1,14.949,4.87,1.163,1.163,0,0,1,16.115,6.036Zm3.31,1.183A5.769,5.769,0,0,0,17.85,3.135,5.807,5.807,0,0,0,13.766,1.56c-1.609-.091-6.433-.091-8.042,0A5.8,5.8,0,0,0,1.64,3.13,5.788,5.788,0,0,0,.065,7.215c-.091,1.609-.091,6.433,0,8.042A5.769,5.769,0,0,0,1.64,19.341a5.814,5.814,0,0,0,4.084,1.575c1.609.091,6.433.091,8.042,0a5.769,5.769,0,0,0,4.084-1.575,5.807,5.807,0,0,0,1.575-4.084c.091-1.609.091-6.429,0-8.038Zm-2.079,9.765a3.289,3.289,0,0,1-1.853,1.853c-1.283.509-4.328.391-5.746.391S5.28,19.341,4,18.837a3.289,3.289,0,0,1-1.853-1.853c-.509-1.283-.391-4.328-.391-5.746s-.113-4.467.391-5.746A3.289,3.289,0,0,1,4,3.639c1.283-.509,4.328-.391,5.746-.391s4.467-.113,5.746.391a3.289,3.289,0,0,1,1.853,1.853c.509,1.283.391,4.328.391,5.746S17.855,15.705,17.346,16.984Z" transform="translate(0.004 -1.492)" fill="currentColor"></path>
                                                </svg>
                                                <span className="visually-hidden">Instagram</span>
                                             </Link>
                                        </li>
                                        <li className="blog__social--media__list">
                                            < Link className="blog__social--media__link" target="_blank"  to="https://www.youtube.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.49" height="11.582" viewBox="0 0 16.49 11.582">
                                                    <path data-name="Path 321" d="M967.759,1365.592q0,1.377-.019,1.717-.076,1.114-.151,1.622a3.981,3.981,0,0,1-.245.925,1.847,1.847,0,0,1-.453.717,2.171,2.171,0,0,1-1.151.6q-3.585.265-7.641.189-2.377-.038-3.387-.085a11.337,11.337,0,0,1-1.5-.142,2.206,2.206,0,0,1-1.113-.585,2.562,2.562,0,0,1-.528-1.037,3.523,3.523,0,0,1-.141-.585c-.032-.2-.06-.5-.085-.906a38.894,38.894,0,0,1,0-4.867l.113-.925a4.382,4.382,0,0,1,.208-.906,2.069,2.069,0,0,1,.491-.755,2.409,2.409,0,0,1,1.113-.566,19.2,19.2,0,0,1,2.292-.151q1.82-.056,3.953-.056t3.952.066q1.821.067,2.311.142a2.3,2.3,0,0,1,.726.283,1.865,1.865,0,0,1,.557.49,3.425,3.425,0,0,1,.434,1.019,5.72,5.72,0,0,1,.189,1.075q0,.095.057,1C967.752,1364.1,967.759,1364.677,967.759,1365.592Zm-7.6.925q1.49-.754,2.113-1.094l-4.434-2.339v4.66Q958.609,1367.311,960.156,1366.517Z" transform="translate(-951.269 -1359.8)" fill="currentColor"></path>
                                                </svg>
                                                <span className="visually-hidden">Youtube</span>
                                             </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="related__post--area mb-50">
                                <div className="section__heading text-center mb-30">
                                    <span className="section__heading--subtitle">Recently added our store</span>
                                    <h2 className="section__heading--maintitle">Related Articles</h2>
                                </div>
                                <div className="row row-cols-md-2 row-cols-sm-2 row-cols-1 mb--n28">
                                    <div className="col mb-28">
                                        <div className="related__post--items">
                                            <div className="related__post--thumb border-radius-10 mb-20">
                                                < Link className="display-block"  to="blog-details"><img className="related__post--img display-block border-radius-10" src="assets/img/blog/related-post1.png" alt="related-post"/> </Link>
                                            </div>
                                            <div className="related__post--text">
                                                <h3 className="related__post--title mb-10">< Link className="related__post--title__link"  to="blog-details">Post With Gallery </Link></h3>
                                                <span className="related__post--deta">February 14, 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-28">
                                        <div className="related__post--items">
                                            <div className="related__post--thumb border-radius-10 mb-20">
                                                < Link className="display-block"  to="blog-details"><img className="related__post--img display-block border-radius-10" src="assets/img/blog/related-post2.png" alt="related-post"/> </Link>
                                            </div>
                                            <div className="related__post--text">
                                                <h3 className="related__post--title mb-10">< Link className="related__post--title__link"  to="blog-details">Post With Vedio </Link></h3>
                                                <span className="related__post--deta">February 14, 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="comment__box">
                                <div className="reviews__comment--area2 mb-50">
                                    <h2 className="reviews__comment--reply__title style2 h3 mb-25">Recent Comment</h2>
                                    <div className="reviews__comment--inner">
                                        <div className="reviews__comment--list d-flex">
                                            <div className="reviews__comment--thumb">
                                                <img src="assets/img/other/comment-thumb1.png" alt="comment-thumb"/>
                                            </div>
                                            <div className="reviews__comment--content ">
                                                <div className="reviews__comment--top d-flex justify-content-between">
                                                    <div className="reviews__comment--top__left">
                                                        <h3 className="reviews__comment--content__title2 h4">Jakes on</h3>
                                                        <span className="reviews__comment--content__date2">February 14, 2022</span>
                                                    </div>
                                                    <button className="comment__reply--btn btn">Reply</button>
                                                </div>
                                                <p className="reviews__comment--content__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex repellat officiis neque. Veniam, rem nesciunt. Assumenda distinctio, autem error repellat eveniet ratione dolor facilis accusantium amet pariatur, non eius!</p>
                                            </div>
                                        </div>
                                        <div className="reviews__comment--list margin__left d-flex">
                                            <div className="reviews__comment--thumb">
                                                <img src="assets/img/other/comment-thumb2.png" alt="comment-thumb"/>
                                            </div>
                                            <div className="reviews__comment--content ">
                                                <div className="reviews__comment--top d-flex justify-content-between">
                                                    <div className="reviews__comment--top__left">
                                                        <h3 className="reviews__comment--content__title2 h4">Laura Johnson</h3>
                                                        <span className="reviews__comment--content__date2">February 14, 2022</span>
                                                    </div>
                                                    <button className="comment__reply--btn btn">Reply</button>
                                                </div>
                                                <p className="reviews__comment--content__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex repellat officiis neque. Veniam, rem nesciunt. Assumenda distinctio, autem error repellat eveniet ratione dolor facilis accusantium amet pariatur, non eius!</p>
                                            </div>
                                        </div>
                                        <div className="reviews__comment--list d-flex">
                                            <div className="reviews__comment--thumb">
                                                <img src="assets/img/other/comment-thumb3.png" alt="comment-thumb"/>
                                            </div>
                                            <div className="reviews__comment--content ">
                                                <div className="reviews__comment--top d-flex justify-content-between">
                                                    <div className="reviews__comment--top__left">
                                                        <h3 className="reviews__comment--content__title2 h4">Richard Smith</h3>
                                                        <span className="reviews__comment--content__date2">February 14, 2022</span>
                                                    </div>
                                                    <button className="comment__reply--btn btn">Reply</button>
                                                </div>
                                                <p className="reviews__comment--content__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex repellat officiis neque. Veniam, rem nesciunt. Assumenda distinctio, autem error repellat eveniet ratione dolor facilis accusantium amet pariatur, non eius!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews__comment--reply__area">
                                    <form action="#">
                                        <h3 className="reviews__comment--reply__title mb-20">Leave A Comment</h3>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 mb-20">
                                                <label>
                                                    <input className="reviews__comment--reply__input" placeholder="Your Name...." type="text"/>
                                                </label>
                                            </div>  
                                            <div className="col-lg-4 col-md-6 mb-20">
                                                <label>
                                                    <input className="reviews__comment--reply__input" placeholder="Your Email...." type="email"/>
                                                </label>
                                            </div> 
                                            <div className="col-lg-4 col-md-6 mb-20">
                                                <label>
                                                    <input className="reviews__comment--reply__input" placeholder="Your Website...." type="text"/>
                                                </label>
                                            </div> 
                                            <div className="col-12 mb-15">
                                                <textarea className="reviews__comment--reply__textarea" placeholder="Your Comments...." ></textarea>
                                            </div> 
                                             
                                        </div>
                                        <button className="btn text-white" data-hover="Submit" type="submit">SUBMIT</button>
                                    </form>   
                                </div> 
                            </div> 
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-4">
                        <div className="blog__sidebar--widget left widget__area">
                            <div className="single__widget widget__search widget__bg">
                                <h2 className="widget__title h3">Search Objects</h2>
                                <form className="widget__search--form" action="#">
                                    <label>
                                        <input className="widget__search--form__input" placeholder="Search..." type="text"/>
                                    </label>
                                    <button className="widget__search--form__btn" aria-label="search button">
                                        <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"></path></svg>
                                    </button>
                                </form>
                            </div>
                            <div className="single__widget widget__bg">
                                <h2 className="widget__title h3">Categories</h2>
                                <ul className="widget__categories--menu">
                                    <li className="widget__categories--menu__list">
                                        <label className="widget__categories--menu__label d-flex align-items-center">
                                            <img className="widget__categories--menu__img" src="assets/img/product/categories11.png" alt="categories-img"/>
                                            <span className="widget__categories--menu__text">Fresh Vegetables</span>
                                            <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
                                                <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
                                            </svg>
                                        </label>
                                        <ul className="widget__categories--sub__menu">
                                            <li className="widget__categories--sub__menu--list">
                                                < Link className="widget__categories--sub__menu--link d-flex align-items-center"  to="blog-details">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/categories12.png" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Discount Weekly</span>
                                                 </Link>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                < Link className="widget__categories--sub__menu--link d-flex align-items-center"  to="blog-details">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/categories15.png" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Green dhaniya</span>
                                                 </Link>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                < Link className="widget__categories--sub__menu--link d-flex align-items-center"  to="blog-details">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/categories14.png" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">resh Nuts</span>
                                                 </Link>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                < Link className="widget__categories--sub__menu--link d-flex align-items-center"  to="blog-details">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/categories13.png" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Millk Cream</span>
                                                 </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="widget__categories--menu__list">
                                        <label className="widget__categories--menu__label d-flex align-items-center">
                                            <img className="widget__categories--menu__img" src="assets/img/product/categories12.png" alt="categories-img"/>
                                            <span className="widget__categories--menu__text">Fresh mushroom</span>
                                            <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394" >
                                                <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
                                            </svg>
                                        </label>
                                        <ul className="widget__categories--sub__menu">
                                            <li className="widget__categories--sub__menu--list">
                                                < Link className="widget__categories--sub__menu--link d-flex align-items-center"  to="blog-details">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/categories12.png" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Discount Weekly</span>
                                                 </Link>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                < Link className="widget__categories--sub__menu--link d-flex align-items-center"  to="blog-details">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/categories15.png" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Green dhaniya</span>
                                                 </Link>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                < Link className="widget__categories--sub__menu--link d-flex align-items-center"  to="blog-details">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/categories14.png" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">resh Nuts</span>
                                                 </Link>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                < Link className="widget__categories--sub__menu--link d-flex align-items-center"  to="blog-details">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/categories13.png" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Millk Cream</span>
                                                 </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="widget__categories--menu__list">
                                        <label className="widget__categories--menu__label d-flex align-items-center">
                                            <img className="widget__categories--menu__img" src="assets/img/product/categories13.png" alt="categories-img"/>
                                            <span className="widget__categories--menu__text">Dairy & chesse</span>
                                            <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
                                                <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
                                            </svg>
                                        </label>
                                        <ul className="widget__categories--sub__menu">
                                            <li className="widget__categories--sub__menu--list">
                                                < Link className="widget__categories--sub__menu--link d-flex align-items-center"  to="blog-details">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/categories16.png" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Discount Weekly</span>
                                                 </Link>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                < Link className="widget__categories--sub__menu--link d-flex align-items-center"  to="blog-details">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/categories15.png" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Green dhaniya</span>
                                                 </Link>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                < Link className="widget__categories--sub__menu--link d-flex align-items-center"  to="blog-details">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/categories14.png" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">resh Nuts</span>
                                                 </Link>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                < Link className="widget__categories--sub__menu--link d-flex align-items-center"  to="blog-details">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/categories13.png" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Millk Cream</span>
                                                 </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="widget__categories--menu__list">
                                        <label className="widget__categories--menu__label d-flex align-items-center">
                                            <img className="widget__categories--menu__img" src="assets/img/product/categories14.png" alt="categories-img"/>
                                            <span className="widget__categories--menu__text">Green dhaniya</span>
                                            <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
                                                <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
                                            </svg>
                                        </label>
                                        <ul className="widget__categories--sub__menu">
                                            <li className="widget__categories--sub__menu--list">
                                                < Link className="widget__categories--sub__menu--link d-flex align-items-center"  to="blog-details">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/categories12.png" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Discount Weekly</span>
                                                 </Link>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                < Link className="widget__categories--sub__menu--link d-flex align-items-center"  to="blog-details">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/categories15.png" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Green dhaniya</span>
                                                 </Link>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                < Link className="widget__categories--sub__menu--link d-flex align-items-center"  to="blog-details">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/categories14.png" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">resh Nuts</span>
                                                 </Link>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                < Link className="widget__categories--sub__menu--link d-flex align-items-center"  to="blog-details">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/categories13.png" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Millk Cream</span>
                                                 </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="widget__categories--menu__list">
                                        <label className="widget__categories--menu__label d-flex align-items-center">
                                            <img className="widget__categories--menu__img" src="assets/img/product/categories15.png" alt="categories-img"/>
                                            <span className="widget__categories--menu__text">Orange Juice</span>
                                            <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
                                                <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
                                            </svg>
                                        </label>
                                        <ul className="widget__categories--sub__menu">
                                            <li className="widget__categories--sub__menu--list">
                                                < Link className="widget__categories--sub__menu--link d-flex align-items-center"  to="blog-details">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/categories12.png" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Discount Weekly</span>
                                                 </Link>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                < Link className="widget__categories--sub__menu--link d-flex align-items-center"  to="blog-details">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/categories15.png" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Green dhaniya</span>
                                                 </Link>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                < Link className="widget__categories--sub__menu--link d-flex align-items-center"  to="blog-details">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/categories14.png" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">resh Nuts</span>
                                                 </Link>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                < Link className="widget__categories--sub__menu--link d-flex align-items-center"  to="blog-details">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/categories13.png" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Millk Cream</span>
                                                 </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="single__widget widget__bg">
                                <h2 className="widget__title h3">Post Article</h2>
                                <div className="product__grid--inner">
                                    <div className="product__grid--items d-flex align-items-center">
                                        <div className="product__grid--items--thumbnail">
                                            < Link className="product__items--link"  to="blog-details">
                                                <img className="product__grid--items__img product__primary--img" src="assets/img/product/small-product2.png" alt="product-img"/>
                                                <img className="product__grid--items__img product__secondary--img" src="assets/img/product/small-product3.png" alt="product-img"/>
                                             </Link>
                                        </div>
                                        <div className="product__grid--items--content">
                                            <h3 className="product__grid--items--content__title h4"><Link to="blog-details">Vegetables Green-surface </Link></h3>
                                            <span className="meta__deta">February 14, 2022</span>
                                        </div>
                                    </div>
                                    <div className="product__grid--items d-flex align-items-center">
                                        <div className="product__grid--items--thumbnail">
                                            < Link className="product__items--link"  to="blog-details">
                                                <img className="product__grid--items__img product__primary--img" src="assets/img/product/small-product7.png" alt="product-img"/>
                                                <img className="product__grid--items__img product__secondary--img" src="assets/img/product/small-product6.png" alt="product-img"/>
                                             </Link>
                                        </div>
                                        <div className="product__grid--items--content">
                                            <h3 className="product__grid--items--content__title h4"><Link to="blog-details">Green-Mango Drinks </Link></h3>
                                            <span className="meta__deta">February 14, 2022</span>
                                        </div>
                                    </div>
                                    <div className="product__grid--items d-flex align-items-center">
                                        <div className="product__grid--items--thumbnail">
                                            < Link className="product__items--link"  to="blog-details">
                                                <img className="product__grid--items__img product__primary--img" src="assets/img/product/small-product5.png" alt="product-img"/>
                                                <img className="product__grid--items__img product__secondary--img" src="assets/img/product/small-product4.png" alt="product-img"/>
                                             </Link>
                                        </div>
                                        <div className="product__grid--items--content">
                                            <h3 className="product__grid--items--content__title h4"><Link to="blog-details">Organic Fresh-Foods </Link></h3>
                                            <span className="meta__deta">February 14, 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single__widget widget__bg">
                                <h2 className="widget__title h3">Brands</h2>
                                <ul className="widget__tagcloud">
                                    <li className="widget__tagcloud--list">< Link className="widget__tagcloud--link"  to="blog-details">Organic </Link></li>
                                    <li className="widget__tagcloud--list">< Link className="widget__tagcloud--link"  to="blog-details">Vegetable </Link></li>
                                    <li className="widget__tagcloud--list">< Link className="widget__tagcloud--link"  to="blog-details">Giant </Link></li>
                                    <li className="widget__tagcloud--list">< Link className="widget__tagcloud--link"  to="blog-details">Grocery </Link></li>
                                    <li className="widget__tagcloud--list">< Link className="widget__tagcloud--link"  to="blog-details">Foods </Link></li>
                                    <li className="widget__tagcloud--list">< Link className="widget__tagcloud--link"  to="blog-details">Bakery </Link></li>
                                    <li className="widget__tagcloud--list">< Link className="widget__tagcloud--link"  to="blog-details">Dairies </Link></li>
                                    <li className="widget__tagcloud--list">< Link className="widget__tagcloud--link"  to="blog-details">Nature  </Link></li>
                                </ul>
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

