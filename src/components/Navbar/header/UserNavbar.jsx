import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './NavbarStyle.css';
import { AuthContext, RoleContext } from "../../../context";
function UserNavbar() {
const {isAuth, setIsAuth} = useContext(AuthContext);
const {isRole, setIsRole} = useContext(RoleContext);
const logout= ()=>{
    setIsAuth(false)
    setIsRole('')
    localStorage.removeItem('auth')
    localStorage.removeItem('role')
}
return (
  <div className="page_header">
    <nav className="nav">
      <ul className="header-ul">
        <div className="left-text">
          <li className="text">
            <Link to="/mainUser">МФЦ РУТ(МИИТ)</Link>
          </li>
        </div>
        <div className="right-text">
          <li className="text">
            <Link to="/servicesUser">Услуги</Link>
          </li>
          <li className="text">
            <Link to="/questionUser">Q&A</Link>
          </li>
          <li><Link to="/main"> <button onClick={logout} className="btn">Выйти</button></Link></li>
        </div>
      </ul>
    </nav>
  </div>
);}
export default  UserNavbar;