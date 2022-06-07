import React, { Components } from "react";
import Header from "../base/Header";
import Footer from "../base/Footer";
import Model from "../base/Model";


export default class Home extends Components {
    render() {
      return (
        <React.Fragment>

          <Header/>

          <div>
            Home
          </div>

          <Footer/>
          <Model/>
          
        </React.Fragment>
      );
    }
  }
  