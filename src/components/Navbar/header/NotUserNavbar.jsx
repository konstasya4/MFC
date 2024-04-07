import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './NavbarStyle.css';
import { AuthContext, RoleContext } from "../../../context";
function NotUserNavbar() {
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
      <ul>
        <div className="left-text">
          <li className="text">
            <Link to="/main">МФЦ РУТ(МИИТ)</Link>
          </li>
        </div>
        <div className="right-text">
          <li className="text">
            <Link to="/services">Услуги</Link>
          </li>
          <li className="text">
            <Link to="/question">Q&A</Link>
          </li>
          <li >
            <Link to="/login"><button className=" btn">Войти</button></Link>
          </li>
        </div>
      </ul>
      {/* <button onClick={logout}>Выйти</button> */}
    </nav>
  </div>
);}
export default  NotUserNavbar;