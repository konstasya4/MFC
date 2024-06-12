import { useNavigate } from "react-router-dom";
import "./NavbarStyle.css";
import { useDispatch } from "react-redux";
import logoutUser from "../../../utils/logoutUser";
function AdminNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/main");
  };
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="page_header">
      <nav className="nav">
        <ul className="header-ul">
          <div className="left-text left-text-auth">
            <li className="text" onClick={() => handleNavigate("/mainAdmin")}>
              МФЦ РУТ(МИИТ)
            </li>
          </div>
          <div className="right-text right-text-no-auth">
            <li className="text">
              <div onClick={() => handleNavigate("/mainAdmin")}>Услуги</div>
            </li>
            <li className="text">
              <div onClick={() => handleNavigate("/listOfTeachers")}>Q&A</div>
            </li>
            <li>
              <div onClick={() => handleNavigate("/main")}>
                {" "}
                <button onClick={handleLogout} className="btn-navbar">
                  Выйти
                </button>
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
export default AdminNavbar;
