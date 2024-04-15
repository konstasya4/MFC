import React, { useContext} from "react";
import { useLocation } from "react-router-dom";
import './NavbarStyle.css';
import { AuthContext, RoleContext } from "../../../context";
import AdminLeftNavbar from "./AdminLeftNavbar";
import UserServicesNavbar from "./UserServicesNavbar";
import UserLetfNavbar from "./UserLetfNavbar";
import ServicesNavbar from "./ServicesNavbar";

function NavbarLeft() {
const {isAuth} = useContext(AuthContext);
const {isRole} = useContext(RoleContext);
const location = useLocation();



return isAuth ? (
  isRole === "admin" ? (
    location.pathname ==='/mainAdmin'?(
      <UserServicesNavbar />
    ) :
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
  <ServicesNavbar/>
)
}
export default  NavbarLeft;
