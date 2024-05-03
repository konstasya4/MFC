import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context";
import { RoleContext } from "../../../context";
import OutButton from "../../../images/OutButton.png";
import "../../../styles/LeftNavbarStyle.css";
import { Link } from "react-router-dom";
import CreateService from "../../../images/Administrator/CreateService.png";
import CreateHelpTemplate from "../../../images/Administrator/CreateHelpTemplate.png";
import Employees from "../../../images/Administrator/Employees.png";
import Students from "../../../images/Administrator/Students.png";
import Done from "../../../images/Done.png";
import PersonalData from "../../../images/PersonalData.png";
import NotCompleted from "../../../images/Administrator/NotСompleted.png";
import Arhive from "../../../images/Administrator/TheArchive.png";

const AdminLeftNavbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const { isRole, setIsRole } = useContext(RoleContext);
  const logout = () => {
    setIsAuth(false);
    setIsRole("");
    localStorage.removeItem("auth");
    localStorage.removeItem("role");
  };
  return (
    <div className="nav-left">
      <ul className="ul-left">
        <li className="li-left">
          <div>
            <img className="img-nav" src={CreateService} />
            <Link to="">Создать услугу</Link>
          </div>
        </li>
        <li className="li-left">
          <div>
            <img className="img-nav" src={CreateHelpTemplate} />
            <Link to="">Создать шаблон справки</Link>
          </div>
        </li>
        <li className="li-left">
          <div>
            <img className="img-nav" src={Employees} />
            <Link to="/listOfTeachers">Работники</Link>
          </div>
        </li>
        <li className="li-left">
          <div>
            <img className="img-nav" src={Students} />
            <Link to="/listOfStudents">Студенты</Link>
          </div>
        </li>
        <li className="li-left">
          <div>
            <img className="img-nav" src={Done} />
            <Link to="">Готово</Link>
          </div>
        </li>
        {/* <li className="li-left">
          <div className="div-left">
            <div className="img-div">
              <img className="img-nav" src={PersonalData} />
            </div>
            <div className="link-div">
              <Link to="">Личные данные</Link>
            </div>
          </div>
        </li> */}
        <li className="li-left">
        <div className="div-left">
            <div className="img-div">
            <img className="img-nav" src={NotCompleted} />
            </div>
            <div className="link-div">
            <Link to="">Не готово</Link>
          </div>
          </div>
        </li>
        <li className="li-left">
          <div>
            <img className="img-nav" src={Arhive} />
            <Link to="">Архив</Link>
          </div>
        </li>
        <li className="li-left">
            <div className="btn-div-left">
            <Link to="/main">
            <button onClick={logout} className="btn-left">
              <img src={OutButton} />
              Выйти из аккаунта
            </button>
          </Link>
            </div>
          
        </li>
      </ul>
    </div>
  );
};
export default AdminLeftNavbar;
