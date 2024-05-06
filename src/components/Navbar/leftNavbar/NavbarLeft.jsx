import React, { useContext} from "react";
import { useLocation } from "react-router-dom";
import "../../../styles/LeftNavbarStyle.css";
import { useSelector } from 'react-redux';
import AdminLeftNavbar from "./AdminLeftNavbar";
import UserServicesNavbar from "./UserServicesNavbar";
import UserLetfNavbar from "./UserLeftNavbar";
import ServicesNavbar from "./ServicesNavbar";

function NavbarLeft() {
const { isAuth, isRole } = useSelector(state => state.auth);
const location = useLocation();
console.log("left navbar", isAuth, isRole)


return isAuth ? (
  isRole === "admin" ? (
    <AdminLeftNavbar />
  ) :
  ( location.pathname === "/mainUser" ? (
    <UserServicesNavbar />
  ) : (
    <UserLetfNavbar />
  )))
 : location.pathname === "/main" ? (
  <ServicesNavbar />
) : (
  null
)
}
export default  NavbarLeft;
