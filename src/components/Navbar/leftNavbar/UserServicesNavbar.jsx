import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context";
import { RoleContext } from "../../../context";
import OutButton from '../../../images/OutButton.png'
import './LeftNavbarStyle.css'
import { Link } from "react-router-dom";
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
                <a href="">Выдача справок и копий документов</a>
              </li>
              <li className="li-left">
                <a href="">Бланки документов для работников</a>
              </li>
              <li className="li-left">
                <a href="">Бланки документов для обучающихся</a>
              </li>
              <li className="li-left">
                <a href="">Перевод и восстановление</a>
              </li>
              <li className="li-left">
              <Link to="/main"><button onClick={logout} className="btn-left"><img src={OutButton}/>Выйти из аккаунта</button></Link>
              </li>
            </ul>
          </div>
        );
}
export default UserServicesNavbar;