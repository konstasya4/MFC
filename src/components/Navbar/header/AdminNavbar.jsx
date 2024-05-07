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
  localStorage.setItem("auth", false); // Преобразуем в строку
  localStorage.setItem("role", "");
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

