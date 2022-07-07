import React, { Component } from 'react'
import Header from "../base/Header";
import Footer from "../base/Footer";
import Model from "../base/Model";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
      <Header/>
         <main className="main__content_wrapper">
        
        {/* <!-- Start breadcrumb section --> */}
        <section className="breadcrumb__section breadcrumb__bg">
            <div className="container">
                <div className="row row-cols-1">
                    <div className="col">
                        <div className="breadcrumb__content text-center">
                            <h1 className="breadcrumb__content--title text-white mb-25">Account Page</h1>
                            <ul className="breadcrumb__content--menu d-flex justify-content-center">
                                <li className="breadcrumb__content--menu__items"><Link className="text-white" to="index">Home</Link></li>
                                <li className="breadcrumb__content--menu__items"><span className="text-white">Account Page</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      

        {/* <!-- Start login section  --> */}
        <div className="login__section section--padding mb-80">
            <div className="container">
                <form action="#">
                    <div className="login__section--inner">
                        <div className="row row-cols-md-2 row-cols-1">
                            <div className="col">
                                <div className="account__login">
                                    <div className="account__login--header mb-25">
                                        <h2 className="account__login--header__title h3 mb-10">Login</h2>
                                        <p className="account__login--header__desc">Login if you area a returning customer.</p>
                                    </div>
                                    <div className="account__login--inner">
                                        <label>
                                            <input className="account__login--input" placeholder="Email Addres" type="email"/>
                                        </label>
                                        <label>
                                            <input className="account__login--input" placeholder="Password" type="password"/>
                                        </label>
                                        <div className="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
                                            <div className="account__login--remember position__relative">
                                                <input className="checkout__checkbox--input" id="check1" type="checkbox"/>
                                                <span className="checkout__checkbox--checkmark"></span>
                                                <label className="checkout__checkbox--label login__remember--label" for="check1">
                                                    Remember me</label>
                                            </div>
                                            <button className="account__login--forgot"  type="submit">Forgot Your Password?</button>
                                        </div>
                                        <button className="account__login--btn btn" type="submit">Login</button>
                                        <div className="account__login--divide">
                                            <span className="account__login--divide__text">OR</span>
                                        </div>
                                        <div className="account__social d-flex justify-content-center mb-15">
                                            <Link className="account__social--link facebook" target="_blank" to="https://www.facebook.com/">Facebook</Link>
                                            <Link className="account__social--link google" target="_blank" to="https://www.google.com/">Google</Link>
                                            <Link className="account__social--link twitter" target="_blank" to="https://twitter.com/">Twitter</Link>
                                        </div>
                                        <p className="account__login--signup__text">Don,t Have an Account? <button type="submit">Sign up now</button></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="account__login register">
                                    <div className="account__login--header mb-25">
                                        <h2 className="account__login--header__title h3 mb-10">Create an Account</h2>
                                        <p className="account__login--header__desc">Register here if you are a new customer</p>
                                    </div>
                                    <div className="account__login--inner">
                                        <label>
                                            <input className="account__login--input" placeholder="Username" type="text"/>
                                        </label>
                                        <label>
                                            <input className="account__login--input" placeholder="Email Addres" type="email"/>
                                        </label>
                                        <label>
                                            <input className="account__login--input" placeholder="Password" type="password"/>
                                        </label>
                                        <label>
                                            <input className="account__login--input" placeholder="Confirm Password" type="password"/>
                                        </label>
                                        <button className="account__login--btn btn mb-10" type="submit">Submit & Register</button>
                                        <div className="account__login--remember position__relative">
                                            <input className="checkout__checkbox--input" id="check2" type="checkbox"/>
                                            <span className="checkout__checkbox--checkmark"></span>
                                            <label className="checkout__checkbox--label login__remember--label" for="check2">
                                                I have read and agree to the terms & conditions</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>     
        </div>
      

        
       

    </main>
    <Footer/>
    <Model/>

        </React.Fragment>
    )
  }
}

