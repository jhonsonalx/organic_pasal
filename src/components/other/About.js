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
       

        {/*<!-- Start team members section -->*/}
        <section className="team__section section--padding">
            <div className="container">
                <div className="section__heading text-center mb-40">
                    <span className="section__heading--subtitle">Skilled Our Team Members</span>
                    <h2 className="section__heading--maintitle">Our Team</h2>
                </div>
                <div className="team__container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="team__items text-center">
                                <div className="team__thumb">
                                    <img className="team__thumb--img display-block" src="assets/img/other/team1.png" alt="team img"/>
                                </div>
                                <div className="team__content ">
                                    <h3 className="team__content--title">Bruce Sutton</h3>
                                    <span className="team__content--subtitle">CEO - Founder</span>
                                    <ul className="team__social d-flex justify-content-center align-items-center">
                                        <li className="team__social--list">
                                            <Link className="team__social--icon" target="_blank" to="https://www.facebook.com/">
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="7.667" height="16.524" viewBox="0 0 7.667 16.524">
                                                    <path  data-name="Path 237" d="M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z" transform="translate(-960.13 -345.407)" fill="currentColor"/>
                                                </svg>
                                                <span className="visually-hidden">Facebook</span>
                                            </Link>
                                        </li>
                                        <li className="team__social--list">
                                            <Link className="team__social--icon" target="_blank" to="https://twitter.com/">
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="16.489" height="13.384" viewBox="0 0 16.489 13.384">
                                                    <path  data-name="Path 303" d="M966.025,1144.2v.433a9.783,9.783,0,0,1-.621,3.388,10.1,10.1,0,0,1-1.845,3.087,9.153,9.153,0,0,1-3.012,2.259,9.825,9.825,0,0,1-4.122.866,9.632,9.632,0,0,1-2.748-.4,9.346,9.346,0,0,1-2.447-1.11q.4.038.809.038a6.723,6.723,0,0,0,2.24-.376,7.022,7.022,0,0,0,1.958-1.054,3.379,3.379,0,0,1-1.958-.687,3.259,3.259,0,0,1-1.186-1.666,3.364,3.364,0,0,0,.621.056,3.488,3.488,0,0,0,.885-.113,3.267,3.267,0,0,1-1.374-.631,3.356,3.356,0,0,1-.969-1.186,3.524,3.524,0,0,1-.367-1.5v-.057a3.172,3.172,0,0,0,1.544.433,3.407,3.407,0,0,1-1.1-1.214,3.308,3.308,0,0,1-.4-1.609,3.362,3.362,0,0,1,.452-1.694,9.652,9.652,0,0,0,6.964,3.538,3.911,3.911,0,0,1-.075-.772,3.293,3.293,0,0,1,.452-1.694,3.409,3.409,0,0,1,1.233-1.233,3.257,3.257,0,0,1,1.685-.461,3.351,3.351,0,0,1,2.466,1.073,6.572,6.572,0,0,0,2.146-.828,3.272,3.272,0,0,1-.574,1.083,3.477,3.477,0,0,1-.913.8,6.869,6.869,0,0,0,1.958-.546A7.074,7.074,0,0,1,966.025,1144.2Z" transform="translate(-951.23 -1140.849)" fill="currentColor"/>
                                                </svg>
                                                <span className="visually-hidden">Twitter</span>
                                            </Link>
                                        </li>
                                        <li className="team__social--list">
                                            <Link className="team__social--icon" target="_blank" to="https://www.instagram.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.497" height="16.492" viewBox="0 0 19.497 19.492">
                                                    <path  data-name="Icon awesome-instagram" d="M9.747,6.24a5,5,0,1,0,5,5A4.99,4.99,0,0,0,9.747,6.24Zm0,8.247A3.249,3.249,0,1,1,13,11.238a3.255,3.255,0,0,1-3.249,3.249Zm6.368-8.451A1.166,1.166,0,1,1,14.949,4.87,1.163,1.163,0,0,1,16.115,6.036Zm3.31,1.183A5.769,5.769,0,0,0,17.85,3.135,5.807,5.807,0,0,0,13.766,1.56c-1.609-.091-6.433-.091-8.042,0A5.8,5.8,0,0,0,1.64,3.13,5.788,5.788,0,0,0,.065,7.215c-.091,1.609-.091,6.433,0,8.042A5.769,5.769,0,0,0,1.64,19.341a5.814,5.814,0,0,0,4.084,1.575c1.609.091,6.433.091,8.042,0a5.769,5.769,0,0,0,4.084-1.575,5.807,5.807,0,0,0,1.575-4.084c.091-1.609.091-6.429,0-8.038Zm-2.079,9.765a3.289,3.289,0,0,1-1.853,1.853c-1.283.509-4.328.391-5.746.391S5.28,19.341,4,18.837a3.289,3.289,0,0,1-1.853-1.853c-.509-1.283-.391-4.328-.391-5.746s-.113-4.467.391-5.746A3.289,3.289,0,0,1,4,3.639c1.283-.509,4.328-.391,5.746-.391s4.467-.113,5.746.391a3.289,3.289,0,0,1,1.853,1.853c.509,1.283.391,4.328.391,5.746S17.855,15.705,17.346,16.984Z" transform="translate(0.004 -1.492)" fill="currentColor"></path>
                                                </svg>
                                                <span className="visually-hidden">Instagram</span>
                                            </Link>
                                        </li>
                                        <li className="team__social--list">
                                            <Link className="team__social--icon" target="_blank" to="https://www.youtube.com/">
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="16.49" height="11.582" viewBox="0 0 16.49 11.582">
                                                    <path  data-name="Path 321" d="M967.759,1365.592q0,1.377-.019,1.717-.076,1.114-.151,1.622a3.981,3.981,0,0,1-.245.925,1.847,1.847,0,0,1-.453.717,2.171,2.171,0,0,1-1.151.6q-3.585.265-7.641.189-2.377-.038-3.387-.085a11.337,11.337,0,0,1-1.5-.142,2.206,2.206,0,0,1-1.113-.585,2.562,2.562,0,0,1-.528-1.037,3.523,3.523,0,0,1-.141-.585c-.032-.2-.06-.5-.085-.906a38.894,38.894,0,0,1,0-4.867l.113-.925a4.382,4.382,0,0,1,.208-.906,2.069,2.069,0,0,1,.491-.755,2.409,2.409,0,0,1,1.113-.566,19.2,19.2,0,0,1,2.292-.151q1.82-.056,3.953-.056t3.952.066q1.821.067,2.311.142a2.3,2.3,0,0,1,.726.283,1.865,1.865,0,0,1,.557.49,3.425,3.425,0,0,1,.434,1.019,5.72,5.72,0,0,1,.189,1.075q0,.095.057,1C967.752,1364.1,967.759,1364.677,967.759,1365.592Zm-7.6.925q1.49-.754,2.113-1.094l-4.434-2.339v4.66Q958.609,1367.311,960.156,1366.517Z" transform="translate(-951.269 -1359.8)" fill="currentColor"/>
                                                </svg>
                                                <span className="visually-hidden">Youtube</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="team__items text-center">
                                <div className="team__thumb">
                                    <img className="team__thumb--img display-block" src="assets/img/other/team2.png" alt="team img"/>
                                </div>
                                <div className="team__content">
                                    <h3 className="team__content--title">Ellen Thornton</h3>
                                    <span className="team__content--subtitle">Spa Manager</span>
                                    <ul className="team__social d-flex justify-content-center align-items-center">
                                        <li className="team__social--list">
                                            <Link className="team__social--icon" target="_blank" to="https://www.facebook.com/">
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="7.667" height="16.524" viewBox="0 0 7.667 16.524">
                                                    <path  data-name="Path 237" d="M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z" transform="translate(-960.13 -345.407)" fill="currentColor"/>
                                                </svg>
                                                <span className="visually-hidden">Facebook</span>
                                            </Link>
                                        </li>
                                        <li className="team__social--list">
                                            <Link className="team__social--icon" target="_blank" to="https://twitter.com/">
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="16.489" height="13.384" viewBox="0 0 16.489 13.384">
                                                    <path  data-name="Path 303" d="M966.025,1144.2v.433a9.783,9.783,0,0,1-.621,3.388,10.1,10.1,0,0,1-1.845,3.087,9.153,9.153,0,0,1-3.012,2.259,9.825,9.825,0,0,1-4.122.866,9.632,9.632,0,0,1-2.748-.4,9.346,9.346,0,0,1-2.447-1.11q.4.038.809.038a6.723,6.723,0,0,0,2.24-.376,7.022,7.022,0,0,0,1.958-1.054,3.379,3.379,0,0,1-1.958-.687,3.259,3.259,0,0,1-1.186-1.666,3.364,3.364,0,0,0,.621.056,3.488,3.488,0,0,0,.885-.113,3.267,3.267,0,0,1-1.374-.631,3.356,3.356,0,0,1-.969-1.186,3.524,3.524,0,0,1-.367-1.5v-.057a3.172,3.172,0,0,0,1.544.433,3.407,3.407,0,0,1-1.1-1.214,3.308,3.308,0,0,1-.4-1.609,3.362,3.362,0,0,1,.452-1.694,9.652,9.652,0,0,0,6.964,3.538,3.911,3.911,0,0,1-.075-.772,3.293,3.293,0,0,1,.452-1.694,3.409,3.409,0,0,1,1.233-1.233,3.257,3.257,0,0,1,1.685-.461,3.351,3.351,0,0,1,2.466,1.073,6.572,6.572,0,0,0,2.146-.828,3.272,3.272,0,0,1-.574,1.083,3.477,3.477,0,0,1-.913.8,6.869,6.869,0,0,0,1.958-.546A7.074,7.074,0,0,1,966.025,1144.2Z" transform="translate(-951.23 -1140.849)" fill="currentColor"/>
                                                </svg>
                                                <span className="visually-hidden">Twitter</span>
                                            </Link>
                                        </li>
                                        <li className="team__social--list">
                                            <Link className="team__social--icon" target="_blank" to="https://www.instagram.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.497" height="16.492" viewBox="0 0 19.497 19.492">
                                                    <path  data-name="Icon awesome-instagram" d="M9.747,6.24a5,5,0,1,0,5,5A4.99,4.99,0,0,0,9.747,6.24Zm0,8.247A3.249,3.249,0,1,1,13,11.238a3.255,3.255,0,0,1-3.249,3.249Zm6.368-8.451A1.166,1.166,0,1,1,14.949,4.87,1.163,1.163,0,0,1,16.115,6.036Zm3.31,1.183A5.769,5.769,0,0,0,17.85,3.135,5.807,5.807,0,0,0,13.766,1.56c-1.609-.091-6.433-.091-8.042,0A5.8,5.8,0,0,0,1.64,3.13,5.788,5.788,0,0,0,.065,7.215c-.091,1.609-.091,6.433,0,8.042A5.769,5.769,0,0,0,1.64,19.341a5.814,5.814,0,0,0,4.084,1.575c1.609.091,6.433.091,8.042,0a5.769,5.769,0,0,0,4.084-1.575,5.807,5.807,0,0,0,1.575-4.084c.091-1.609.091-6.429,0-8.038Zm-2.079,9.765a3.289,3.289,0,0,1-1.853,1.853c-1.283.509-4.328.391-5.746.391S5.28,19.341,4,18.837a3.289,3.289,0,0,1-1.853-1.853c-.509-1.283-.391-4.328-.391-5.746s-.113-4.467.391-5.746A3.289,3.289,0,0,1,4,3.639c1.283-.509,4.328-.391,5.746-.391s4.467-.113,5.746.391a3.289,3.289,0,0,1,1.853,1.853c.509,1.283.391,4.328.391,5.746S17.855,15.705,17.346,16.984Z" transform="translate(0.004 -1.492)" fill="currentColor"></path>
                                                </svg>
                                                <span className="visually-hidden">Instagram</span>
                                            </Link>
                                        </li>
                                        <li className="team__social--list">
                                            <Link className="team__social--icon" target="_blank" to="https://www.youtube.com/">
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="16.49" height="11.582" viewBox="0 0 16.49 11.582">
                                                    <path  data-name="Path 321" d="M967.759,1365.592q0,1.377-.019,1.717-.076,1.114-.151,1.622a3.981,3.981,0,0,1-.245.925,1.847,1.847,0,0,1-.453.717,2.171,2.171,0,0,1-1.151.6q-3.585.265-7.641.189-2.377-.038-3.387-.085a11.337,11.337,0,0,1-1.5-.142,2.206,2.206,0,0,1-1.113-.585,2.562,2.562,0,0,1-.528-1.037,3.523,3.523,0,0,1-.141-.585c-.032-.2-.06-.5-.085-.906a38.894,38.894,0,0,1,0-4.867l.113-.925a4.382,4.382,0,0,1,.208-.906,2.069,2.069,0,0,1,.491-.755,2.409,2.409,0,0,1,1.113-.566,19.2,19.2,0,0,1,2.292-.151q1.82-.056,3.953-.056t3.952.066q1.821.067,2.311.142a2.3,2.3,0,0,1,.726.283,1.865,1.865,0,0,1,.557.49,3.425,3.425,0,0,1,.434,1.019,5.72,5.72,0,0,1,.189,1.075q0,.095.057,1C967.752,1364.1,967.759,1364.677,967.759,1365.592Zm-7.6.925q1.49-.754,2.113-1.094l-4.434-2.339v4.66Q958.609,1367.311,960.156,1366.517Z" transform="translate(-951.269 -1359.8)" fill="currentColor"/>
                                                </svg>
                                                <span className="visually-hidden">Youtube</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="team__items text-center">
                                <div className="team__thumb">
                                    <img className="team__thumb--img display-block" src="assets/img/other/team3.png" alt="team img"/>
                                </div>
                                <div className="team__content">
                                    <h3 className="team__content--title">Milton Marsh</h3>
                                    <span className="team__content--subtitle">Products Manager</span>
                                    <ul className="team__social d-flex justify-content-center align-items-center">
                                        <li className="team__social--list">
                                            <Link className="team__social--icon" target="_blank" to="https://www.facebook.com/">
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="7.667" height="16.524" viewBox="0 0 7.667 16.524">
                                                    <path  data-name="Path 237" d="M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z" transform="translate(-960.13 -345.407)" fill="currentColor"/>
                                                </svg>
                                                <span className="visually-hidden">Facebook</span>
                                            </Link>
                                        </li>
                                        <li className="team__social--list">
                                            <Link className="team__social--icon" target="_blank" to="https://twitter.com/">
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="16.489" height="13.384" viewBox="0 0 16.489 13.384">
                                                    <path  data-name="Path 303" d="M966.025,1144.2v.433a9.783,9.783,0,0,1-.621,3.388,10.1,10.1,0,0,1-1.845,3.087,9.153,9.153,0,0,1-3.012,2.259,9.825,9.825,0,0,1-4.122.866,9.632,9.632,0,0,1-2.748-.4,9.346,9.346,0,0,1-2.447-1.11q.4.038.809.038a6.723,6.723,0,0,0,2.24-.376,7.022,7.022,0,0,0,1.958-1.054,3.379,3.379,0,0,1-1.958-.687,3.259,3.259,0,0,1-1.186-1.666,3.364,3.364,0,0,0,.621.056,3.488,3.488,0,0,0,.885-.113,3.267,3.267,0,0,1-1.374-.631,3.356,3.356,0,0,1-.969-1.186,3.524,3.524,0,0,1-.367-1.5v-.057a3.172,3.172,0,0,0,1.544.433,3.407,3.407,0,0,1-1.1-1.214,3.308,3.308,0,0,1-.4-1.609,3.362,3.362,0,0,1,.452-1.694,9.652,9.652,0,0,0,6.964,3.538,3.911,3.911,0,0,1-.075-.772,3.293,3.293,0,0,1,.452-1.694,3.409,3.409,0,0,1,1.233-1.233,3.257,3.257,0,0,1,1.685-.461,3.351,3.351,0,0,1,2.466,1.073,6.572,6.572,0,0,0,2.146-.828,3.272,3.272,0,0,1-.574,1.083,3.477,3.477,0,0,1-.913.8,6.869,6.869,0,0,0,1.958-.546A7.074,7.074,0,0,1,966.025,1144.2Z" transform="translate(-951.23 -1140.849)" fill="currentColor"/>
                                                </svg>
                                                <span className="visually-hidden">Twitter</span>
                                            </Link>
                                        </li>
                                        <li className="team__social--list">
                                            <Link className="team__social--icon" target="_blank" to="https://www.instagram.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.497" height="16.492" viewBox="0 0 19.497 19.492">
                                                    <path  data-name="Icon awesome-instagram" d="M9.747,6.24a5,5,0,1,0,5,5A4.99,4.99,0,0,0,9.747,6.24Zm0,8.247A3.249,3.249,0,1,1,13,11.238a3.255,3.255,0,0,1-3.249,3.249Zm6.368-8.451A1.166,1.166,0,1,1,14.949,4.87,1.163,1.163,0,0,1,16.115,6.036Zm3.31,1.183A5.769,5.769,0,0,0,17.85,3.135,5.807,5.807,0,0,0,13.766,1.56c-1.609-.091-6.433-.091-8.042,0A5.8,5.8,0,0,0,1.64,3.13,5.788,5.788,0,0,0,.065,7.215c-.091,1.609-.091,6.433,0,8.042A5.769,5.769,0,0,0,1.64,19.341a5.814,5.814,0,0,0,4.084,1.575c1.609.091,6.433.091,8.042,0a5.769,5.769,0,0,0,4.084-1.575,5.807,5.807,0,0,0,1.575-4.084c.091-1.609.091-6.429,0-8.038Zm-2.079,9.765a3.289,3.289,0,0,1-1.853,1.853c-1.283.509-4.328.391-5.746.391S5.28,19.341,4,18.837a3.289,3.289,0,0,1-1.853-1.853c-.509-1.283-.391-4.328-.391-5.746s-.113-4.467.391-5.746A3.289,3.289,0,0,1,4,3.639c1.283-.509,4.328-.391,5.746-.391s4.467-.113,5.746.391a3.289,3.289,0,0,1,1.853,1.853c.509,1.283.391,4.328.391,5.746S17.855,15.705,17.346,16.984Z" transform="translate(0.004 -1.492)" fill="currentColor"></path>
                                                </svg>
                                                <span className="visually-hidden">Instagram</span>
                                            </Link>
                                        </li>
                                        <li className="team__social--list">
                                            <Link className="team__social--icon" target="_blank" to="https://www.youtube.com/">
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="16.49" height="11.582" viewBox="0 0 16.49 11.582">
                                                    <path  data-name="Path 321" d="M967.759,1365.592q0,1.377-.019,1.717-.076,1.114-.151,1.622a3.981,3.981,0,0,1-.245.925,1.847,1.847,0,0,1-.453.717,2.171,2.171,0,0,1-1.151.6q-3.585.265-7.641.189-2.377-.038-3.387-.085a11.337,11.337,0,0,1-1.5-.142,2.206,2.206,0,0,1-1.113-.585,2.562,2.562,0,0,1-.528-1.037,3.523,3.523,0,0,1-.141-.585c-.032-.2-.06-.5-.085-.906a38.894,38.894,0,0,1,0-4.867l.113-.925a4.382,4.382,0,0,1,.208-.906,2.069,2.069,0,0,1,.491-.755,2.409,2.409,0,0,1,1.113-.566,19.2,19.2,0,0,1,2.292-.151q1.82-.056,3.953-.056t3.952.066q1.821.067,2.311.142a2.3,2.3,0,0,1,.726.283,1.865,1.865,0,0,1,.557.49,3.425,3.425,0,0,1,.434,1.019,5.72,5.72,0,0,1,.189,1.075q0,.095.057,1C967.752,1364.1,967.759,1364.677,967.759,1365.592Zm-7.6.925q1.49-.754,2.113-1.094l-4.434-2.339v4.66Q958.609,1367.311,960.156,1366.517Z" transform="translate(-951.269 -1359.8)" fill="currentColor"/>
                                                </svg>
                                                <span className="visually-hidden">Youtube</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="team__items text-center">
                                <div className="team__thumb">
                                    <img className="team__thumb--img display-block" src="assets/img/other/team1.png" alt="team img"/>
                                </div>
                                <div className="team__content">
                                    <h3 className="team__content--title">Jackly Smith</h3>
                                    <span className="team__content--subtitle">Senior Maneger</span>
                                    <ul className="team__social d-flex justify-content-center align-items-center">
                                        <li className="team__social--list">
                                            <Link className="team__social--icon" target="_blank" to="https://www.facebook.com/">
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="7.667" height="16.524" viewBox="0 0 7.667 16.524">
                                                    <path  data-name="Path 237" d="M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z" transform="translate(-960.13 -345.407)" fill="currentColor"/>
                                                </svg>
                                                <span className="visually-hidden">Facebook</span>
                                            </Link>
                                        </li>
                                        <li className="team__social--list">
                                            <Link className="team__social--icon" target="_blank" to="https://twitter.com/">
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="16.489" height="13.384" viewBox="0 0 16.489 13.384">
                                                    <path  data-name="Path 303" d="M966.025,1144.2v.433a9.783,9.783,0,0,1-.621,3.388,10.1,10.1,0,0,1-1.845,3.087,9.153,9.153,0,0,1-3.012,2.259,9.825,9.825,0,0,1-4.122.866,9.632,9.632,0,0,1-2.748-.4,9.346,9.346,0,0,1-2.447-1.11q.4.038.809.038a6.723,6.723,0,0,0,2.24-.376,7.022,7.022,0,0,0,1.958-1.054,3.379,3.379,0,0,1-1.958-.687,3.259,3.259,0,0,1-1.186-1.666,3.364,3.364,0,0,0,.621.056,3.488,3.488,0,0,0,.885-.113,3.267,3.267,0,0,1-1.374-.631,3.356,3.356,0,0,1-.969-1.186,3.524,3.524,0,0,1-.367-1.5v-.057a3.172,3.172,0,0,0,1.544.433,3.407,3.407,0,0,1-1.1-1.214,3.308,3.308,0,0,1-.4-1.609,3.362,3.362,0,0,1,.452-1.694,9.652,9.652,0,0,0,6.964,3.538,3.911,3.911,0,0,1-.075-.772,3.293,3.293,0,0,1,.452-1.694,3.409,3.409,0,0,1,1.233-1.233,3.257,3.257,0,0,1,1.685-.461,3.351,3.351,0,0,1,2.466,1.073,6.572,6.572,0,0,0,2.146-.828,3.272,3.272,0,0,1-.574,1.083,3.477,3.477,0,0,1-.913.8,6.869,6.869,0,0,0,1.958-.546A7.074,7.074,0,0,1,966.025,1144.2Z" transform="translate(-951.23 -1140.849)" fill="currentColor"/>
                                                </svg>
                                                <span className="visually-hidden">Twitter</span>
                                            </Link>
                                        </li>
                                        <li className="team__social--list">
                                            <Link className="team__social--icon" target="_blank" to="https://www.instagram.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.497" height="16.492" viewBox="0 0 19.497 19.492">
                                                    <path  data-name="Icon awesome-instagram" d="M9.747,6.24a5,5,0,1,0,5,5A4.99,4.99,0,0,0,9.747,6.24Zm0,8.247A3.249,3.249,0,1,1,13,11.238a3.255,3.255,0,0,1-3.249,3.249Zm6.368-8.451A1.166,1.166,0,1,1,14.949,4.87,1.163,1.163,0,0,1,16.115,6.036Zm3.31,1.183A5.769,5.769,0,0,0,17.85,3.135,5.807,5.807,0,0,0,13.766,1.56c-1.609-.091-6.433-.091-8.042,0A5.8,5.8,0,0,0,1.64,3.13,5.788,5.788,0,0,0,.065,7.215c-.091,1.609-.091,6.433,0,8.042A5.769,5.769,0,0,0,1.64,19.341a5.814,5.814,0,0,0,4.084,1.575c1.609.091,6.433.091,8.042,0a5.769,5.769,0,0,0,4.084-1.575,5.807,5.807,0,0,0,1.575-4.084c.091-1.609.091-6.429,0-8.038Zm-2.079,9.765a3.289,3.289,0,0,1-1.853,1.853c-1.283.509-4.328.391-5.746.391S5.28,19.341,4,18.837a3.289,3.289,0,0,1-1.853-1.853c-.509-1.283-.391-4.328-.391-5.746s-.113-4.467.391-5.746A3.289,3.289,0,0,1,4,3.639c1.283-.509,4.328-.391,5.746-.391s4.467-.113,5.746.391a3.289,3.289,0,0,1,1.853,1.853c.509,1.283.391,4.328.391,5.746S17.855,15.705,17.346,16.984Z" transform="translate(0.004 -1.492)" fill="currentColor"></path>
                                                </svg>
                                                <span className="visually-hidden">Instagram</span>
                                            </Link>
                                        </li>
                                        <li className="team__social--list">
                                            <Link className="team__social--icon" target="_blank" to="https://www.youtube.com/">
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="16.49" height="11.582" viewBox="0 0 16.49 11.582">
                                                    <path  data-name="Path 321" d="M967.759,1365.592q0,1.377-.019,1.717-.076,1.114-.151,1.622a3.981,3.981,0,0,1-.245.925,1.847,1.847,0,0,1-.453.717,2.171,2.171,0,0,1-1.151.6q-3.585.265-7.641.189-2.377-.038-3.387-.085a11.337,11.337,0,0,1-1.5-.142,2.206,2.206,0,0,1-1.113-.585,2.562,2.562,0,0,1-.528-1.037,3.523,3.523,0,0,1-.141-.585c-.032-.2-.06-.5-.085-.906a38.894,38.894,0,0,1,0-4.867l.113-.925a4.382,4.382,0,0,1,.208-.906,2.069,2.069,0,0,1,.491-.755,2.409,2.409,0,0,1,1.113-.566,19.2,19.2,0,0,1,2.292-.151q1.82-.056,3.953-.056t3.952.066q1.821.067,2.311.142a2.3,2.3,0,0,1,.726.283,1.865,1.865,0,0,1,.557.49,3.425,3.425,0,0,1,.434,1.019,5.72,5.72,0,0,1,.189,1.075q0,.095.057,1C967.752,1364.1,967.759,1364.677,967.759,1365.592Zm-7.6.925q1.49-.754,2.113-1.094l-4.434-2.339v4.66Q958.609,1367.311,960.156,1366.517Z" transform="translate(-951.269 -1359.8)" fill="currentColor"/>
                                                </svg>
                                                <span className="visually-hidden">Youtube</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        {/*<!-- Start testimonial section -->*/}
        <section className="testimonial__section testimonial__bg section--padding">
            <div className="container-fluid p-0">
                <div className="section__heading text-center mb-40">
                    <span className="section__heading--subtitle">Recently added our store</span>
                    <h2 className="section__heading--maintitle">Our Testimonial</h2>
                </div>
                <div className="testimonial__section--inner testimonial__swiper--activation swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="testimonial__items d-flex align-items-center">
                                <div className="testimonial__items--thumbnail">
                                    <img className="testimonial__items--thumbnail__img" src="assets/img/other/testimonial-thumb1.png" alt="testimonial-img"/>
                                </div>
                                <div className="testimonial__items--content">
                                    <h3 className="testimonial__items--title">JACKLY SMITH</h3>
                                    <span className="testimonial__items--subtitle">Senior Maneger</span>
                                    <p className="testimonial__items--desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  dolor sit amet, consectetur</p>
                                    <div className="ratting testimonial__ratting">
                                        <ul className="d-flex testimonial__ratting--inner">
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="testimonial__chat--icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="52.472" height="45.687" viewBox="0 0 52.472 45.687">
                                            <path  data-name="Chat icon" d="M105.2,149.979a16.71,16.71,0,0,0,3.8-15.4,18.87,18.87,0,0,0-8.881-11.694,25.79,25.79,0,0,0-17.343-3.676,23.55,23.55,0,0,0-15.238,7.706,16.673,16.673,0,0,0-4.108,15.7,40.137,40.137,0,0,1,1.547,7.124,15.559,15.559,0,0,1-1.727,8.677c-.228.414-.486.81-.744,1.229.1.036.15.066.192.06a26.1,26.1,0,0,0,11.034-3.862.865.865,0,0,1,.983-.132A26.582,26.582,0,0,0,91,157.853a23.243,23.243,0,0,0,14.194-7.874Zm9.5,13.924a8.286,8.286,0,0,1-.911-1.3,11.272,11.272,0,0,1-.354-9.049,12.317,12.317,0,0,0-.486-9.4c-.4-.846-.935-1.625-1.493-2.591-.108.408-.162.582-.2.762a18.517,18.517,0,0,1-2.968,7.076c-4.234,6.141-10.236,9.427-17.468,10.65-1.283.216-2.591.288-3.916.432a.579.579,0,0,0,.126.168c.33.216.648.438,1,.624a19.172,19.172,0,0,0,17.037.846,1.037,1.037,0,0,1,.8,0,18.573,18.573,0,0,0,6.033,2.291,11.879,11.879,0,0,0,2.519.246C115.079,164.647,115.115,164.419,114.7,163.9Z" transform="translate(-62.5 -118.975)" fill="currentColor" opacity="0.11"/>
                                            </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial__items d-flex align-items-center">
                                <div className="testimonial__items--thumbnail">
                                    <img className="testimonial__items--thumbnail__img" src="assets/img/other/testimonial-thumb2.png" alt="testimonial-img"/>
                                </div>
                                <div className="testimonial__items--content">
                                    <h3 className="testimonial__items--title">Laura Johnson</h3>
                                    <span className="testimonial__items--subtitle">Products Manager</span>
                                    <p className="testimonial__items--desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  dolor sit amet, consectetur</p>
                                    <div className="ratting testimonial__ratting">
                                        <ul className="d-flex testimonial__ratting--inner">
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="testimonial__chat--icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="52.472" height="45.687" viewBox="0 0 52.472 45.687">
                                            <path  data-name="Chat icon" d="M105.2,149.979a16.71,16.71,0,0,0,3.8-15.4,18.87,18.87,0,0,0-8.881-11.694,25.79,25.79,0,0,0-17.343-3.676,23.55,23.55,0,0,0-15.238,7.706,16.673,16.673,0,0,0-4.108,15.7,40.137,40.137,0,0,1,1.547,7.124,15.559,15.559,0,0,1-1.727,8.677c-.228.414-.486.81-.744,1.229.1.036.15.066.192.06a26.1,26.1,0,0,0,11.034-3.862.865.865,0,0,1,.983-.132A26.582,26.582,0,0,0,91,157.853a23.243,23.243,0,0,0,14.194-7.874Zm9.5,13.924a8.286,8.286,0,0,1-.911-1.3,11.272,11.272,0,0,1-.354-9.049,12.317,12.317,0,0,0-.486-9.4c-.4-.846-.935-1.625-1.493-2.591-.108.408-.162.582-.2.762a18.517,18.517,0,0,1-2.968,7.076c-4.234,6.141-10.236,9.427-17.468,10.65-1.283.216-2.591.288-3.916.432a.579.579,0,0,0,.126.168c.33.216.648.438,1,.624a19.172,19.172,0,0,0,17.037.846,1.037,1.037,0,0,1,.8,0,18.573,18.573,0,0,0,6.033,2.291,11.879,11.879,0,0,0,2.519.246C115.079,164.647,115.115,164.419,114.7,163.9Z" transform="translate(-62.5 -118.975)" fill="currentColor" opacity="0.11"/>
                                            </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial__items d-flex align-items-center">
                                <div className="testimonial__items--thumbnail">
                                    <img className="testimonial__items--thumbnail__img" src="assets/img/other/testimonial-thumb3.png" alt="testimonial-img"/>
                                </div>
                                <div className="testimonial__items--content">
                                    <h3 className="testimonial__items--title">Richard Smith</h3>
                                    <span className="testimonial__items--subtitle">CEO - Founder</span>
                                    <p className="testimonial__items--desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  dolor sit amet, consectetur</p>
                                    <div className="ratting testimonial__ratting">
                                        <ul className="d-flex testimonial__ratting--inner">
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="testimonial__chat--icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="52.472" height="45.687" viewBox="0 0 52.472 45.687">
                                            <path  data-name="Chat icon" d="M105.2,149.979a16.71,16.71,0,0,0,3.8-15.4,18.87,18.87,0,0,0-8.881-11.694,25.79,25.79,0,0,0-17.343-3.676,23.55,23.55,0,0,0-15.238,7.706,16.673,16.673,0,0,0-4.108,15.7,40.137,40.137,0,0,1,1.547,7.124,15.559,15.559,0,0,1-1.727,8.677c-.228.414-.486.81-.744,1.229.1.036.15.066.192.06a26.1,26.1,0,0,0,11.034-3.862.865.865,0,0,1,.983-.132A26.582,26.582,0,0,0,91,157.853a23.243,23.243,0,0,0,14.194-7.874Zm9.5,13.924a8.286,8.286,0,0,1-.911-1.3,11.272,11.272,0,0,1-.354-9.049,12.317,12.317,0,0,0-.486-9.4c-.4-.846-.935-1.625-1.493-2.591-.108.408-.162.582-.2.762a18.517,18.517,0,0,1-2.968,7.076c-4.234,6.141-10.236,9.427-17.468,10.65-1.283.216-2.591.288-3.916.432a.579.579,0,0,0,.126.168c.33.216.648.438,1,.624a19.172,19.172,0,0,0,17.037.846,1.037,1.037,0,0,1,.8,0,18.573,18.573,0,0,0,6.033,2.291,11.879,11.879,0,0,0,2.519.246C115.079,164.647,115.115,164.419,114.7,163.9Z" transform="translate(-62.5 -118.975)" fill="currentColor" opacity="0.11"/>
                                            </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial__items d-flex align-items-center">
                                <div className="testimonial__items--thumbnail">
                                    <img className="testimonial__items--thumbnail__img" src="assets/img/other/testimonial-thumb1.png" alt="testimonial-img"/>
                                </div>
                                <div className="testimonial__items--content">
                                    <h3 className="testimonial__items--title">JACKLY SMITH</h3>
                                    <span className="testimonial__items--subtitle">Senior Maneger</span>
                                    <p className="testimonial__items--desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  dolor sit amet, consectetur</p>
                                    <div className="ratting testimonial__ratting">
                                        <ul className="d-flex testimonial__ratting--inner">
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="testimonial__chat--icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="52.472" height="45.687" viewBox="0 0 52.472 45.687">
                                            <path  data-name="Chat icon" d="M105.2,149.979a16.71,16.71,0,0,0,3.8-15.4,18.87,18.87,0,0,0-8.881-11.694,25.79,25.79,0,0,0-17.343-3.676,23.55,23.55,0,0,0-15.238,7.706,16.673,16.673,0,0,0-4.108,15.7,40.137,40.137,0,0,1,1.547,7.124,15.559,15.559,0,0,1-1.727,8.677c-.228.414-.486.81-.744,1.229.1.036.15.066.192.06a26.1,26.1,0,0,0,11.034-3.862.865.865,0,0,1,.983-.132A26.582,26.582,0,0,0,91,157.853a23.243,23.243,0,0,0,14.194-7.874Zm9.5,13.924a8.286,8.286,0,0,1-.911-1.3,11.272,11.272,0,0,1-.354-9.049,12.317,12.317,0,0,0-.486-9.4c-.4-.846-.935-1.625-1.493-2.591-.108.408-.162.582-.2.762a18.517,18.517,0,0,1-2.968,7.076c-4.234,6.141-10.236,9.427-17.468,10.65-1.283.216-2.591.288-3.916.432a.579.579,0,0,0,.126.168c.33.216.648.438,1,.624a19.172,19.172,0,0,0,17.037.846,1.037,1.037,0,0,1,.8,0,18.573,18.573,0,0,0,6.033,2.291,11.879,11.879,0,0,0,2.519.246C115.079,164.647,115.115,164.419,114.7,163.9Z" transform="translate(-62.5 -118.975)" fill="currentColor" opacity="0.11"/>
                                            </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial__items d-flex align-items-center">
                                <div className="testimonial__items--thumbnail">
                                    <img className="testimonial__items--thumbnail__img" src="assets/img/other/testimonial-thumb2.png" alt="testimonial-img"/>
                                </div>
                                <div className="testimonial__items--content">
                                    <h3 className="testimonial__items--title">Laura Johnson</h3>
                                    <span className="testimonial__items--subtitle">Products Manager</span>
                                    <p className="testimonial__items--desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  dolor sit amet, consectetur</p>
                                    <div className="ratting testimonial__ratting">
                                        <ul className="d-flex testimonial__ratting--inner">
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                            <li className="testimonial__ratting--list">
                                                <span className="testimonial__ratting--icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.54" height="15.555" viewBox="0 0 20.54 19.555">
                                                        <path  d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z" transform="translate(0.015 -24.025)" fill="currentColor"/>
                                                    </svg>  
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="testimonial__chat--icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="52.472" height="45.687" viewBox="0 0 52.472 45.687">
                                            <path  data-name="Chat icon" d="M105.2,149.979a16.71,16.71,0,0,0,3.8-15.4,18.87,18.87,0,0,0-8.881-11.694,25.79,25.79,0,0,0-17.343-3.676,23.55,23.55,0,0,0-15.238,7.706,16.673,16.673,0,0,0-4.108,15.7,40.137,40.137,0,0,1,1.547,7.124,15.559,15.559,0,0,1-1.727,8.677c-.228.414-.486.81-.744,1.229.1.036.15.066.192.06a26.1,26.1,0,0,0,11.034-3.862.865.865,0,0,1,.983-.132A26.582,26.582,0,0,0,91,157.853a23.243,23.243,0,0,0,14.194-7.874Zm9.5,13.924a8.286,8.286,0,0,1-.911-1.3,11.272,11.272,0,0,1-.354-9.049,12.317,12.317,0,0,0-.486-9.4c-.4-.846-.935-1.625-1.493-2.591-.108.408-.162.582-.2.762a18.517,18.517,0,0,1-2.968,7.076c-4.234,6.141-10.236,9.427-17.468,10.65-1.283.216-2.591.288-3.916.432a.579.579,0,0,0,.126.168c.33.216.648.438,1,.624a19.172,19.172,0,0,0,17.037.846,1.037,1.037,0,0,1,.8,0,18.573,18.573,0,0,0,6.033,2.291,11.879,11.879,0,0,0,2.519.246C115.079,164.647,115.115,164.419,114.7,163.9Z" transform="translate(-62.5 -118.975)" fill="currentColor" opacity="0.11"/>
                                            </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper__nav--btn swiper-button-next"></div>
                    <div className="swiper__nav--btn swiper-button-prev"></div>
                </div>
            </div>
        </section>
        

        {/*<!-- Start brand logo section -->*/}
        <div className="brand__logo--section section--padding">
            <div className="container">
                <div className="row row-cols-1">
                    <div className="col">
                        <div className="brand__logo--section__inner d-flex justify-content-between align-items-center">
                            <div className="brand__logo--items">
                                <img className="brand__logo--items__thumbnail--img display-block" src="assets/img/logo/brand-logo1.png" alt="brand img"/>
                            </div>
                            <div className="brand__logo--items">
                                <img className="brand__logo--items__thumbnail--img display-block" src="assets/img/logo/brand-logo2.png" alt="brand img"/>
                            </div>
                            <div className="brand__logo--items">
                                <img className="brand__logo--items__thumbnail--img display-block" src="assets/img/logo/brand-logo3.png" alt="brand img"/>
                            </div>
                            <div className="brand__logo--items">
                                <img className="brand__logo--items__thumbnail--img display-block" src="assets/img/logo/brand-logo4.png" alt="brand img"/>
                            </div>
                            <div className="brand__logo--items">
                                <img className="brand__logo--items__thumbnail--img display-block" src="assets/img/logo/brand-logo5.png" alt="brand img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/*<!-- Start shipping section -->*/}
        <section className="shipping__section2 shipping__style3">
            <div className="container">
                <div className="shipping__section2--inner shipping__style3--inner d-flex justify-content-between">
                    <div className="shipping__items2 d-flex align-items-center">
                        <div className="shipping__items2--icon">
                            <img className="display-block" src="assets/img/other/shipping1.png" alt="shipping img"/>
                        </div>
                        <div className="shipping__items2--content">
                            <h2 className="shipping__items2--content__title h3">Shipping</h2>
                            <p className="shipping__items2--content__desc">From handpicked sellers</p>
                        </div>
                    </div>
                    <div className="shipping__items2 d-flex align-items-center">
                        <div className="shipping__items2--icon">
                            <img className="display-block" src="assets/img/other/shipping2.png" alt="shipping img"/>
                        </div>
                        <div className="shipping__items2--content">
                            <h2 className="shipping__items2--content__title h3">Payment</h2>
                            <p className="shipping__items2--content__desc">Visa, Paypal, Master</p>
                        </div>
                    </div>
                    <div className="shipping__items2 d-flex align-items-center">
                        <div className="shipping__items2--icon">
                            <img className="display-block" src="assets/img/other/shipping3.png" alt="shipping img"/>
                        </div>
                        <div className="shipping__items2--content">
                            <h2 className="shipping__items2--content__title h3">Return</h2>
                            <p className="shipping__items2--content__desc">30 day guarantee</p>
                        </div>
                    </div>
                    <div className="shipping__items2 d-flex align-items-center">
                        <div className="shipping__items2--icon">
                            <img className="display-block" src="assets/img/other/shipping4.png" alt="shipping img"/>
                        </div>
                        <div className="shipping__items2--content">
                            <h2 className="shipping__items2--content__title h3">Support</h2>
                            <p className="shipping__items2--content__desc">Support every time</p>
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
