import { Link } from "react-router-dom";
import NavbarLeft from "../../../components/Navbar/leftNavbar/NavbarLeft";
import "./PersonalAccountStyle.css";
import InputComponent from "../../../components/input-component/InputComponent"
import ButtonComponent from "../../../components/button-component/ButtonComponent";
import EmploeeyAccountComponentAdmin from '../../../components/personal-account-components/EmplpoeeyAccountAdmin'

const EmploeeyAccount = ()=>{

    return(
    <div>
        <div className="head-container">
          <div className="head-personal-data">Личные данные</div>z
        </div>
        <div className="account-personal-conteiner horiz-line">
          <NavbarLeft />
          <div className="person-data-conteiner">
            <div className="input-container-account">
            <InputComponent className="status-input" placeholder="Иванов Иван Иванович"/>
            <Link to="/listOfEmploeeys"><ButtonComponent className="bnt-admin-account" name='Назад'></ButtonComponent></Link>
            </div>
            <EmploeeyAccountComponentAdmin/>
      </div>
      </div>
      </div>);
}
export default EmploeeyAccount;