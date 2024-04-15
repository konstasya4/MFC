import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context";
import { RoleContext } from "../../../context";
import OutButton from '../../../images/OutButton.png'
import './LeftNavbarStyle.css'
import { Link } from "react-router-dom";
import StudentOrderedServices from '../../../images/StudentOrderedServices.png';
import PersonalData from '../../../images/PersonalData.png';
import Done from '../../../images/Done.png';

const UserLeftNavbar=()=>{
    const {isAuth, setIsAuth} = useContext(AuthContext);
const {isRole, setIsRole} = useContext(RoleContext);
    const logout= ()=>{
        setIsAuth(false)
        setIsRole('')
        localStorage.removeItem('auth')
        localStorage.removeItem('role')
    }
        return (
          <div className="nav-left">
            <ul className="ul-left">
              <li className="li-left">
              <img className="img-nav" src={StudentOrderedServices} />
                <a href="#issuanceOfCertificates">Заказанные услуги</a>
              </li>
              <li className="li-left">
              <img className="img-nav" src={PersonalData} />
                <a href="#formsForEmployees">Личные данные</a>
              </li>
              <li className="li-left">
              <img className="img-nav" src={Done} />
                <a href="#formsForStudents">Готовые услуги</a>
              </li>
              <li className="li-left">
              <Link to="/main"><button onClick={logout} className="btn-left"><img src={OutButton}/>Выйти из аккаунта</button></Link>
              </li>
            </ul>
          </div>
        );
}
export default UserLeftNavbar;