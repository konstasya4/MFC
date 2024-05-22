import React from "react";
import { useDispatch} from 'react-redux';
import OutButton from '../../../images/OutButton.png'
import "../../../styles/LeftNavbarStyle.css";
import { Link } from "react-router-dom";
import Certificate from '../../../images/Certificate.png';
import logoutUser from "../../../utils/logoutUser";
const UserServicesNavbar=()=>{
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
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
              <li className="li-btn-left">
              <Link to="/main"><button onClick={handleLogout} className="btn-left"><img src={OutButton}/>Выйти из аккаунта</button></Link>
              </li>
            </ul>
          </div>
        );
}
export default UserServicesNavbar;