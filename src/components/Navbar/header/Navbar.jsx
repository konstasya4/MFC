import React, { useContext} from "react";
import { useLocation } from "react-router-dom";
import '../../../styles/NavbarStyle.css';
import { AuthContext, RoleContext } from "../../../context";
import AdminNavbar from "./AdminNavbar";
import UserNavbar from "./UserNavbar";
import NotUserNavbar from "./NotUserNavbar";
import ServicesUserNavbar from "./ServicesUserNavbar";
import ServicesNavbar from "./ServicesNotUserNavbar";

function Navbar() {
const {isAuth} = useContext(AuthContext);
const {isRole} = useContext(RoleContext);
const location = useLocation();



return isAuth ? (
  isRole === "admin" ? (
    <AdminNavbar />
  ) : location.pathname === "/mainUser" ? (
    <ServicesUserNavbar />
  ) : (
    <UserNavbar />
  )
) : location.pathname === "/main" ? (
  <ServicesNavbar />
) : (
  <NotUserNavbar />
);
}
export default  Navbar;
