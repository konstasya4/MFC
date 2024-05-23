import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './NavbarStyle.css';
function NotUserNavbar() {
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
    </nav>
  </div>
);}
export default  NotUserNavbar;