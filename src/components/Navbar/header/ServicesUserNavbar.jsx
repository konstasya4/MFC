import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './NavbarStyle.css';
import { AuthContext, RoleContext } from "../../../context";
function ServicesUserNavbar() {
const {isAuth, setIsAuth} = useContext(AuthContext);
const {isRole, setIsRole} = useContext(RoleContext);
const [isOpen, setIsOpen] = useState(false);
useEffect(() => {
  const checkShopStatus = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();
    console.log(currentDate, currentDay, currentHour)
    if (currentDay >= 1 && currentDay <= 5 && currentHour >= 8 && currentHour < 20) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  const interval = setInterval(checkShopStatus, 5 * 60 * 1000);

  return () => clearInterval(interval);
}, []);
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
        <li className="quest"><Link to="/questionUser">Где получить услуги</Link></li>

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
export default  ServicesUserNavbar;