import React, {useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import './NavbarStyle.css';
function ServicesNotUserNavbar() {
  const [isOpen, setIsOpen] = useState();
  const navigate=useNavigate()
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
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="page_header">
      <nav className="nav">
        <ul className="header-ul">
          <div className="left-text left-text-no-auth">
            <li className="text" onClick={() => handleNavigate("/main")}>
              МФЦ РУТ(МИИТ)
            </li>
          </div>
          <div className="center-text">
            <li className="operating-mode text">Работаем в Пн-Пт с 08:00-20:00</li>
            <div className="time-indicator" >
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
              <div onClick={() => handleNavigate("/question")} >Где получить услуги</div>
            </li>
          </div>
          <div className="right-text right-text-no-auth">
            <li className="text">
              <div onClick={() => handleNavigate("/main")} >Услуги</div>
            </li>
            <li className="text">
              <div onClick={() => handleNavigate("/question")} >Q&A</div>
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
export default ServicesNotUserNavbar;
