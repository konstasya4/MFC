import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import StudentAccountComponent from "../../../components/personal-account-components/StudentAccountComponent";
import EmploeeyAccountComponent from "../../../components/personal-account-components/EmploeeyAccountComponent";
import NavbarLeft from "../../../components/Navbar/leftNavbar/NavbarLeft";

const PersonalAccount = () => {
  const {  isRole } = useSelector(state => state.auth);

  return (
    <div>
      <div className="head-container">
    <div className="head-personal-data">Личные данные</div>
  </div>
  <div className="account-personal-conteiner horiz-line">
    <NavbarLeft />
      {isRole==="employee" ? <EmploeeyAccountComponent/> : <StudentAccountComponent/>}
      </div>
    </div>
  );
};

export default PersonalAccount;