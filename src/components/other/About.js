import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Header from "../base/Header";
import Footer from "../base/Footer";
import Model from "../base/Model";

export default class About extends Component {
  render() {
    return (
        <React.Fragment>

            <Header/>

      <div>
      <main className="main__content_wrapper">
        
        {/*<!-- Start breadcrumb section -->*/}
        <section className="breadcrumb__section breadcrumb__bg">
            <div className="container">
                <div className="row row-cols-1">
                    <div className="col">
                        <div className="breadcrumb__content text-center">
                            <h1 className="breadcrumb__content--title text-white mb-25">About Us</h1>
                            <ul className="breadcrumb__content--menu d-flex justify-content-center">
                                <li className="breadcrumb__content--menu__items"><Link className="text-white" to="index.html">Home</Link></li>
                                <li className="breadcrumb__content--menu__items"><span className="text-white">About Us</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/*<!-- Start about section -->*/}
        <section className="about__section section--padding mb-95">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about__thumb d-flex">
                            <div className="about__thumb--items">
                                <img className="about__thumb--img border-radius-5 display-block" src="assets/img/other/about-thumb-list1.png" alt="about-thumb"/>
                            </div>
                            <div className="about__thumb--items position__relative">
                                <img className="about__thumb--img border-radius-5 display-block" src="assets/img/other/about-thumb-list2.png" alt="about-thumb"/>
                                <div className="banner__bideo--play about__thumb--play">
                                    <Link className="banner__bideo--play__icon about__thumb--play__icon glightbox" to="https://vimeo.com/115041822" data-gallery="video">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 31 37">
                                            <path id="Polygon_1" data-name="Polygon 1" d="M16.783,2.878a2,2,0,0,1,3.435,0l14.977,25.1A2,2,0,0,1,33.477,31H3.523a2,2,0,0,1-1.717-3.025Z" transform="translate(31) rotate(90)" fill="currentColor"/>
                                        </svg> 
                                        <span className="visually-hidden">bideo play</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about__content">
                            <span className="about__content--subtitle text__secondary mb-20"> Why Choose us</span>
                            <h2 className="about__content--maintitle mb-25">We do not buy from the open market & traders.</h2>
                            <p className="about__content--desc mb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo, est repellendus are quia voluptate neque reiciendis ea placeat labore maiores cum, hic ducimus ad a dolorem soluta consectetur adipisci. Perspiciatis quas ab quibusdam is.</p>
                            <p className="about__content--desc mb-25">Itaque accusantium eveniet a laboriosam dolorem? Magni suscipit est corrupti explicabo non perspiciatis, excepturi ut asperiores assumenda rerum? Provident ab corrupti sequi, voluptates repudiandae eius odit aut.</p>
                            <div className="about__author position__relative">
                                <h3 className="about__author--name h4">Bruce Sutton</h3>
                                <span className="about__author--rank">Spa Manager</span>
                                <img className="about__author--signature" src="assets/img/icon/signature.png" alt="signature"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        
        {/*<!-- Start counterup banner section -->*/}
        <div className="counterup__banner--section counterup__banner__bg2" id="funfactId">
            <div className="container">
                <div className="row row-cols-1 align-items-center">
                    <div className="col">
                        <div className="counterup__banner--inner position__relative d-flex align-items-center justify-content-between">
                            <div className="counterup__banner--items text-center">
                                <h2 className="counterup__banner--items__text text-white">YEARS OF <br/>
                                    FOUNDATION</h2>
                                <span className="counterup__banner--items__number js-counter text-white" data-count="50">0</span>
                            </div>
                            <div className="counterup__banner--items text-center">
                                <h2 className="counterup__banner--items__text text-white">SKILLED TEAM <br/>
                                    MEMBERS </h2>
                                <span className="counterup__banner--items__number js-counter text-white" data-count="100">0</span>
                            </div>
                            <div className="counterup__banner--items text-center">
                                <h2 className="counterup__banner--items__text text-white">HAPPY <br/>
                                    CUSTOMERS</h2>
                                <span className="counterup__banner--items__number js-counter text-white" data-count="80">0</span>
                            </div>
                            <div className="counterup__banner--items text-center">
                                <h2 className="counterup__banner--items__text text-white">MONTHLY <br/>
                                    ORDERS</h2>
                                <span className="counterup__banner--items__number js-counter text-white" data-count="70">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       

     
        

       
       
        </main>



      </div>
      <Footer/>
      <Model/>
      </React.Fragment>
    )
  }
}
