import React from "react";
import OutButton from "../images/OutButton.png";
import "./LeftNavbarStyle.css";
import CreateService from "../images/CreateService.png";
import Employees from "../images/Employees.png";
import Students from "../images/Students.png";
import NotCompleted from "../images/NotСompleted.png";
import Arhive from "../images/TheArchive.png";
import { useDispatch } from "react-redux";
import logoutUser from "../../../utils/logoutUserAsync";
import { useNavigate } from "react-router-dom";

const AdminLeftNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          <div>
            <img className="img-nav" src={CreateService} alt="" />
            <div onClick={() => handleNavigate("/createService")}>
              Создать услугу
            </div>
          </div>
        </li>
        <li className="li-left">
          <div>
            <img className="img-nav" src={Employees} alt="" />
            <div onClick={() => handleNavigate("/listOfEmploeeys")}>
              Работники
            </div>
          </div>
        </li>
        <li className="li-left">
          <div>
            <img className="img-nav" src={Students} alt="" />
            <div onClick={() => handleNavigate("/listOfStudents")}>
              Студенты
            </div>
          </div>
        </li>
        <li className="li-left">
          <div className="div-left">
            <div className="img-div">
              <img className="img-nav" src={NotCompleted} alt="" />
            </div>
            <div className="div-div">
              <div onClick={() => handleNavigate("/notDoneService")}>
                Заказанные услуги
              </div>
            </div>
          </div>
        </li>
        <li className="li-left">
          <div>
            <img className="img-nav" src={Arhive} alt="" />
            <div onClick={() => handleNavigate("/arhiveServices")}>Архив</div>
          </div>
        </li>
        <li className="li-left">
          <div className="btn-div-left">
            <div onClick={() => handleNavigate("/main")}>
              <button onClick={handleLogout} className="btn-left">
                <img src={OutButton} alt="" />
                Выйти из аккаунта
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default AdminLeftNavbar;
