import React from "react";
import { useDispatch} from 'react-redux';
import OutButton from '../images/OutButton.png'
import "./LeftNavbarStyle.css";
import { Link } from "react-router-dom";
import StudentOrderedServices from '../images/StudentOrderedServices.png';
import PersonalData from '../images/PersonalData.png';
import Done from '../images/Done.png';
import logoutUser from "../../../utils/logoutUser";

const UserLeftNavbar=()=>{
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
        return (
          <div className="nav-left">
            <ul className="ul-left">
              <li className="li-left">
              <img className="img-nav" src={StudentOrderedServices} />
                <Link to="/status">Заказанные услуги</Link>
              </li>
              <li className="li-left">
              <img className="img-nav" src={PersonalData} />
              <Link to="/account">Личные данные</Link>
              </li>
              <li className="li-left">
              <img className="img-nav" src={Done} />
                <Link to="/doneServices">Готовые услуги</Link>
              </li>
              <li className="li-btn-left">
              <Link to="/main"><button onClick={handleLogout} className="btn-left"><img src={OutButton}/>Выйти из аккаунта</button></Link>
              </li>
            </ul>
          </div>
        );
}
export default UserLeftNavbar;