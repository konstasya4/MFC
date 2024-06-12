import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavbarStyle.css";
function NotUserNavbar() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="page_header page-header-no-auth">
      <nav className="nav">
        <ul className="header-ul">
          <div className="left-text">
            <li className="text" onClick={() => handleNavigate("/main")}>
              МФЦ РУТ(МИИТ)
            </li>
          </div>
          <div className="right-text right-text-no-auth">
            <li className="text">
              <div onClick={() => handleNavigate("/main")}>Услуги</div>
            </li>
            <li className="text">
              <div onClick={() => handleNavigate("/question")}>Q&A</div>
            </li>
            <li>
              <div onClick={() => handleNavigate("/login")}>
                <button className="btn-navbar">Войти</button>
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
export default NotUserNavbar;
