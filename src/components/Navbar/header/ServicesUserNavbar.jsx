import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NavbarStyle.css";
import PersonalDataActive from "../images/PersonalDataActive.png";
function ServicesUserNavbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentHour = currentDate.getHours();
  console.log(currentDate, currentDay, currentHour);
  useEffect(() => {
    const checkShopStatus = () => {
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
    const interval = setInterval(checkShopStatus, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="page_header">
      <nav className="nav">
        <ul className="header-ul">
          <div className="left-text left-text-auth">
            <li className="text" onClick={() => handleNavigate("/mainUser")}>
              МФЦ РУТ(МИИТ)
            </li>
          </div>
          <div className="center-text">
            <li className="operating-mode text">
              Работаем в Пн-Пт с 08:00-20:00
            </li>
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
              <div onClick={() => handleNavigate("/questionUser")}>
                Где получить услуги
              </div>
            </li>
          </div>
          <div className="right-text right-text-auth">
            <li className="text">
              <div onClick={() => handleNavigate("/mainUser")}>Услуги</div>
            </li>
            <li className="text">
              <div onClick={() => handleNavigate("/questionUser")}>Q&A</div>
            </li>
            <li>
              <div onClick={() => handleNavigate("/account")}>
                <div class="avatar">
                  <img src={PersonalDataActive} alt="Your Name" />
                </div>
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
export default ServicesUserNavbar;
