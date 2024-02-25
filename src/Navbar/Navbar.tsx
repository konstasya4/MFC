import React from "react";
import './NavbarStyle.css';
function Navbar() {
    return(
        <div className="page_header">
            <div className="inner">
                <nav className="nav">
                    <ul>
                        <div className="left-text">
                        <li className="text"><a href="#">О нас</a></li>
                        <li className="text"><a href="#">Услуги</a></li>
                        <li className="text"><a href="#">Часто задаваемые вопросы</a></li>
                        </div>
                        <li className="text-end"><a href="#">Войти в личный кабинет</a></li>
                    </ul>
                </nav>
            </div>
        </div>
);
}
export default  Navbar;
