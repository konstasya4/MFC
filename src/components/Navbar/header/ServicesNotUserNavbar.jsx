import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import { AuthContext, RoleContext } from "../../../context";
function ServicesNotUserNavbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const { isRole, setIsRole } = useContext(RoleContext);
  const [isOpen, setIsOpen] = useState();
  useEffect(() => {
    const checkShopStatus = () => {
      const currentDate = new Date();
      const currentDay = currentDate.getDay();
      const currentHour = currentDate.getHours();
      if (
        currentDay >= 1 &&
        currentDay <= 5 &&
        currentHour >= 8 &&
        currentHour < 20
      ) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    const interval = setInterval(checkShopStatus, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page_header">
      <nav className="nav">
        <ul>
          <div className="left-text">
            <li className="text">
              <a href="#this">МФЦ РУТ(МИИТ)</a>
            </li>
          </div>
          <div className="center-text">
            <li className="operating-mode text">Работаем в Пн-Пт с 08:00-20:00</li>
            <div className="time-indicator">
              {isOpen ? (
                <div className="open-indicator"> </div>
              ) : (
                <div className="close-indicator"> </div>
              )}
              {isOpen ? (
                <li className="time-open">Открыто</li>
              ) : (
                <li className="time-close">Закрыто</li>
              )}
            </div>
            <li className="quest">
              <Link to="/question">Где получить услуги</Link>
            </li>
          </div>
          <div className="right-text">
            <li className="text">
              <Link to="/services">Услуги</Link>
            </li>
            <li className="text">
              <Link to="/question">Q&A</Link>
            </li>
            <li>
              <Link to="/login">
                <button className=" btn">Войти</button>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
export default ServicesNotUserNavbar;
