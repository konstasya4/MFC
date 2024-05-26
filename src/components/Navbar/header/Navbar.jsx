import { useLocation } from "react-router-dom";
import './NavbarStyle.css';
import { useSelector } from 'react-redux';
import AdminNavbar from "./AdminNavbar";
import UserNavbar from "./UserNavbar";
import NotUserNavbar from "./NotUserNavbar";
import ServicesUserNavbar from "./ServicesUserNavbar";
import ServicesNavbar from "./ServicesNotUserNavbar";

function Navbar() {
const { isAuth, isRole } = useSelector(state => state.auth);
const location = useLocation();
console.log(isAuth, isRole)


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
