import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../../../styles/NavbarStyle.css';
import { AuthContext, RoleContext } from "../../../context";
import PersonalDataActive from '../../../images/PersonalDataActive.png';
function AdminNavbar() {
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