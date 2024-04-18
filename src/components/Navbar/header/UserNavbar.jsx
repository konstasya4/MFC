import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../../../styles/NavbarStyle.css';
import { AuthContext, RoleContext } from "../../../context";
import PersonalDataActive from "../../../images/PersonalDataActive.png";
function UserNavbar() {
const {isAuth, setIsAuth} = useContext(AuthContext);
const {isRole, setIsRole} = useContext(RoleContext);
const logout= ()=>{
    setIsAuth(false)
    setIsRole('')
    localStorage.removeItem('auth')
    localStorage.removeItem('role')
}
return (
  <div className="page_header">
    <nav className="nav">
      <ul className="header-ul">
        <div className="left-text">
          <li className="text">
            МФЦ РУТ(МИИТ)
          </li>
        </div>
        <div className="right-text">
          <li className="text">
            <Link to="/mainUser">Услуги</Link>
          </li>
          <li className="text">
            <Link to="/questionUser">Q&A</Link>
          </li>
          <li><Link to="/account">
                <div class="avatar">
                  <img src={PersonalDataActive} alt="Your Name" />
                </div>
              </Link></li>
        </div>
      </ul>
    </nav>
  </div>
);}
export default  UserNavbar;