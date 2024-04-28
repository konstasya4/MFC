import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../../../styles/NavbarStyle.css';
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
  <div className="page_header page-header-no-auth">
    <nav className="nav">
      <ul className="header-ul">
        <div className="left-text">
          <li className="text">
            МФЦ РУТ(МИИТ)
          </li>
        </div>
        <div className="right-text right-text-no-auth">
          <li className="text">
            <Link to="/main">Услуги</Link>
          </li>
          <li className="text">
            <Link to="/question">Q&A</Link>
          </li>
          <li >
            <Link to="/login"><button className="btn-navbar">Войти</button></Link>
          </li>
        </div>
      </ul>
      {/* <button onClick={logout}>Выйти</button> */}
    </nav>
  </div>
);}
export default  NotUserNavbar;