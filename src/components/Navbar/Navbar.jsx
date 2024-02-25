import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './NavbarStyle.css';
import { AuthContext, RoleContext } from "../../context";
function Navbar() {
const {isAuth, setIsAuth} = useContext(AuthContext);
const {isRole, setIsRole} = useContext(RoleContext);
const logout= ()=>{
    setIsAuth(false)
    setIsRole('')
    localStorage.removeItem('auth')
    localStorage.removeItem('role')
}
    return(
        isAuth ?
        isRole ==='admin'?
        <div className="page_header">
        <div className="inner">
            <nav className="nav">
                <ul>
                    <div className="left-text">
                    <li className="text"><Link to="/listOfStudents">Список студентов</Link></li>
                    <li className="text"><Link to="/listOfTeachers">Список преподавателей</Link></li>
                    <li className="text"><Link to="/statements">Поступившие заявки</Link></li>
                    </div>
                    <li className="text-end"><Link to="/admin">Личный кабинет</Link></li>
                </ul>
                <button onClick={logout}>Выйти</button>
            </nav>
        </div>
    </div>
    :
    <div className="page_header">
    <div className="inner">
        <nav className="nav">
            <ul>
                <div className="left-text">
                <li className="text"><Link to="/main">О нас</Link></li>
                <li className="text"><Link to="/services">Услуги</Link></li>
                <li className="text"><Link to="/question">Часто задаваемые вопросы</Link></li>
                <li className="text"><Link to="/status">Поступившие заявки</Link></li>
                </div>
                <li className="text-end"><Link to="/account">Личный кабинет</Link></li>
            </ul>
            <button onClick={logout}>Выйти</button>
        </nav>
    </div>
</div>
        :
        <div className="page_header">
            <div className="inner">
                <nav className="nav">
                    <ul>
                        <div className="left-text">
                        <li className="text"><Link to="/main">О нас</Link></li>
                        <li className="text"><Link to="/services">Услуги</Link></li>
                        <li className="text"><Link to="/question">Часто задаваемые вопросы</Link></li>
                        </div>
                        <li className="text-end"><Link to="/login">Войти в личный кабинет</Link></li>
                    </ul>
                </nav>
            </div>
        </div>

);
}
export default  Navbar;
