import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context";
import { RoleContext } from "../../../context";
import OutButton from '../../../images/OutButton.png'
import './LeftNavbarStyle.css'
import { Link } from "react-router-dom";
import Certificate from '../../../images/Certificate.png';
const UserServicesNavbar=()=>{
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
              <img className="img-nav" src={Certificate} />
                <a href="#issuanceOfCertificates">Справки и копии документов</a>
              </li>
              <li className="li-left">
              <img className="img-nav" src={Certificate} />
                <a href="#formsForEmployees">Бланки документов для работников</a>
              </li>
              <li className="li-left">
              <img className="img-nav" src={Certificate} />
                <a href="#formsForStudents">Бланки документов для обучающихся</a>
              </li>
              <li className="li-left">
              <img className="img-nav" src={Certificate} />
                <a href="#translationAndRestoration">Перевод и восстановление</a>
              </li>
              <li className="li-left">
              <Link to="/main"><button onClick={logout} className="btn-left"><img src={OutButton}/>Выйти из аккаунта</button></Link>
              </li>
            </ul>
          </div>
        );
}
export default UserServicesNavbar;