import React from "react";
import { useDispatch } from "react-redux";
import OutButton from "../images/OutButton.png";
import "./LeftNavbarStyle.css";
import { useNavigate } from "react-router-dom";
import StudentOrderedServices from "../images/StudentOrderedServices.png";
import PersonalData from "../images/PersonalData.png";
import logoutUser from "../../../utils/logoutUserAsync";

const UserLeftNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="nav-left">
      <ul className="ul-left">
        <li className="li-left">
          <img className="img-nav" src={StudentOrderedServices} />
          <div onClick={() => handleNavigate("/status")}>Заказанные услуги</div>
        </li>
        <li className="li-left">
          <img className="img-nav" src={PersonalData} />
          <div onClick={() => handleNavigate("/account")}>Личные данные</div>
        </li>
        <li className="li-btn-left">
          <div onClick={() => handleNavigate("/main")}>
            <button onClick={handleLogout} className="btn-left">
              <img src={OutButton} />
              Выйти из аккаунта
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default UserLeftNavbar;
