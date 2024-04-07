import React from "react";
import './MainStyle.css';
import InputComponent from "../components/InputComponent";
import AdminLeftNavbar from "../components/Navbar/leftNavbar/AdminLeftNavbar"
import CertificatePostponement from "../images/Services/CertificatePostponement.png"
 const Main=()=>{
    console.log(window.location.pathname);
    return (
      <div className="main-navbar">
        <div>
          <AdminLeftNavbar />
        </div>
        <div className="main-services">
          <div className="input-main">
            <InputComponent placeholder="Поиск услуг" />
          </div>
          <div>Популярные услуги</div>
          <div>
            <ul><li><button><img src={CertificatePostponement} alt="" /></button></li>
            <li></li>
            <li></li></ul>
            <ul><li></li>
            <li></li>
            <li></li></ul>
          </div>
        </div>
      </div>
    );
 }
 export default Main