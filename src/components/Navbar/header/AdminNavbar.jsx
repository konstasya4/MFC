import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../../../styles/NavbarStyle.css';
import { AuthContext, RoleContext } from "../../../context";
import PersonalDataActive from '../../../images/PersonalDataActive.png';
import { useDispatch, useSelector  } from 'react-redux';
import AuthService from '../../../services/AuthService';
import { loginUser, logoutUser } from '../../../actions/actions';
function AdminNavbar() {
  const dispatch = useDispatch();
  const { isAuth, isRole } = useSelector(state => state.auth);
const logout = async () => {
  await AuthService.logout();
  dispatch(logoutUser());
  localStorage.removeItem('token');
  console.log("Выход", isAuth, isRole)
};
return (
  <div className="page_header">
  <nav className="nav">
    <ul className="header-ul">
      <div className="left-text left-text-auth">
        <li className="text">
          МФЦ РУТ(МИИТ)
        </li>
      </div>
      <div className="right-text right-text-no-auth">
        <li className="text">
          <Link to="/mainAdmin">Услуги</Link>
        </li>
        <li className="text">
          <Link to="/listOfTeachers">Q&A</Link>
        </li>
        <li><Link to="/main"> <button onClick={logout} className="btn-navbar">Выйти</button></Link></li>
      </div>
    </ul>
  </nav>
</div>
/* <div className="page_header">
    <nav className="nav">
      <ul className="header-ul">
        <div className="left-text left-text-auth">
          <li className="text">
            МФЦ РУТ(МИИТ)
          </li>
        </div>
        <div className="right-text right-text-auth">
          <li className="text">
            <Link to="/mainAdmin">Услуги</Link>
          </li>
          <li className="text">
            <Link to="/questionUser">Q&A</Link>
          </li>
          <li><Link to="/accountAdmin">
                <div class="avatar">
                  <img src={PersonalDataActive} alt="Your Name" />
                </div>
              </Link></li>
        </div>
      </ul>
    </nav>
  </div>*/
);}
export default  AdminNavbar;


import React, { useState, useEffect } from "react";
import NavbarLeft from "../../components/Navbar/leftNavbar/NavbarLeft";
import UserService from "../../services/UserService";
import "../../styles/PersonalAccountStyle.css";

const PersonalAccount = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await UserService.fetchCurrentUser();
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
      {userData && (
        <div className="user-info">
          <h2>Личные данные пользователя</h2>
          <p>Имя: {userData.Name.first}</p>
          <p>Фамилия: {userData.Name.second}</p>
          <p>Отчество: {userData.Name.middle}</p>
          <p>Email: {userData.Email}</p>
          <p>Телефон: {userData.PhoneNumber || "Нет данных"}</p>
          <p>Пол: {userData.Gender}</p>
          <p>ИНН: {userData.INN}</p>
          <p>СНИЛС: {userData.SNILS}</p>
          <p>Серия и номер паспорта: {userData.Passport.series} {userData.Passport.number}</p>
          <p>Код подразделения: {userData.Passport.unitCode}</p>
          <p>Место рождения: {userData.Passport.placeOfBrith}</p>
          <p>Дата рождения: {userData.Passport.dateOfBrith}</p>
          <p>Дата выдачи паспорта: {userData.Passport.dateOfIssue}</p>
          <p>Гражданство: {userData.Passport.citizenship}</p>
          <p>Роль: {userData.Role}</p>
        </div>
      )}
    </div>
  );
};

export default PersonalAccount;