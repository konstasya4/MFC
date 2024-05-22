import { Link } from "react-router-dom";
import '../../../styles/NavbarStyle.css';
import { useDispatch} from 'react-redux';
import logoutUser from "../../../utils/logoutUser";
function AdminNavbar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };
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
        <li><Link to="/main"> <button onClick={handleLogout} className="btn-navbar">Выйти</button></Link></li>
      </div>
    </ul>
  </nav>
</div>
);}
export default  AdminNavbar;

