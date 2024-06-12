import NavbarLeft from "../../../components/Navbar/leftNavbar/NavbarLeft";
import "./PersonalAccountStyle.css";
import InputComponent from "../../../components/input-component/InputComponent"
import ButtonComponent from "../../../components/button-component/ButtonComponent";
import { Link } from "react-router-dom";
import StudentAccountAdmin from "../../../components/personal-account-components/StudentAccountAdmin";
const StudentsAccount = ()=>{
   
    return(<div className="account-container">
        <div className="head-container">
          <div className="head-personal-data">Личные данные</div>
        </div>
        <div className="account-personal-conteiner horiz-line">
          <NavbarLeft />
          <div className="person-data-conteiner">
          <div className="input-container-account">
            <InputComponent className="status-input" placeholder="Иванов Иван Иванович"/>
            <Link to="/listOfStudents"><ButtonComponent className="bnt-admin-account" name='Назад'></ButtonComponent></Link>
          </div>
          <StudentAccountAdmin/>
          </div>
        </div>
      </div>);
}
export default StudentsAccount;