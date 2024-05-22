import { Link } from "react-router-dom";
import '../../../styles/NavbarStyle.css';
import PersonalDataActive from "../../../images/PersonalDataActive.png";
function UserNavbar() {
return (
  <div className="page_header">
    <nav className="nav">
      <ul className="header-ul">
        <div className="left-text left-text-auth">
          <li className="text">
            МФЦ РУТ(МИИТ)
          </li>
        </div>
        <div className="right-text right-text-auth">
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