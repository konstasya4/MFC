import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../../styles/NavbarStyle.css';
import PersonalDataActive from "../../../images/PersonalDataActive.png";
function ServicesUserNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentHour = currentDate.getHours();
  console.log(currentDate, currentDay, currentHour)
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
  return (
    <div className="page_header">
      <nav className="nav">
        <ul className="header-ul">
          <div className="left-text left-text-auth">
            <li className="text">МФЦ РУТ(МИИТ)</li>
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
              <Link to="/questionUser">Где получить услуги</Link>
            </li>
          </div>
          <div className="right-text right-text-auth">
            <li className="text">
              <Link to="/mainUser">Услуги</Link>
            </li>
            <li className="text">
              <Link to="/questionUser">Q&A</Link>
            </li>
            <li>
              <Link to="/account">
                <div class="avatar">
                  <img src={PersonalDataActive} alt="Your Name" />
                </div>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
export default ServicesUserNavbar;
