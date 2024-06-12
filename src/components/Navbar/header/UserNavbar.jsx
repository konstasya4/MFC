import {useNavigate } from "react-router-dom";
import "./NavbarStyle.css";
import PersonalDataActive from "../images/PersonalDataActive.png";
function UserNavbar() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="page_header">
      <nav className="nav">
        <ul className="header-ul">
          <div className="left-text left-text-auth">
            <li className="text" onClick={() => handleNavigate("/mainUser")}>
              МФЦ РУТ(МИИТ)
            </li>
          </div>
          <div className="right-text right-text-auth">
            <li className="text">
              <div onClick={() => handleNavigate("/mainUser")}>Услуги</div>
            </li>
            <li className="text">
              <div onClick={() => handleNavigate("/questionUser")}>Q&A</div>
            </li>
            <li>
              <div onClick={() => handleNavigate("/account")}>
                <div class="avatar">
                  <img src={PersonalDataActive} alt="Your Name" />
                </div>
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
export default UserNavbar;
