// import React, { useContext } from "react";
// import { AuthContext, RoleContext } from "../context";
// import { Link } from "react-router-dom";
// const Login=()=>{
//     const {isAuth, setIsAuth} = useContext(AuthContext);
//     const{isRole, setIsRole}=useContext(RoleContext);
//     console.log(isAuth)
//     console.log(isRole)

//     // const login = event => {
//     //     event.preventDefault();
        
//     // }
//     const admin = event =>{
//         // event.preventDefault();
//         setIsAuth(true);
//         localStorage.setItem('auth', 'true')
//         setIsRole('admin');
//         localStorage.setItem('role', 'admin')
//     }
//     const user = event =>{
//         // event.preventDefault();
//         setIsAuth(true);
//         localStorage.setItem('auth', 'true')
//         setIsRole('user');
//         localStorage.setItem('role', 'user')
//     }
//     return(
//         <div>
//             <form>
//                 <input id="userName" type="text"/>
//                 <input id="password" type="password"/>
//                 <Link to="/admin"><button className="admin-button" onClick={admin}>
//                     Администратор
//                 </button></Link>
//                <Link to="/mainUser"><button className="user-button"  onClick={user}>
//                 Пользователь
//                 </button></Link> 
//             </form>
//         </div>
//     );
// }
// export default Login
import React, { useState, useEffect } from 'react';
import '../styles/LoginStyle.css'
import { Link } from 'react-router-dom';
import { AuthContext, RoleContext } from '../context';
import { useContext } from 'react';
import axios from 'axios';
import LoginAuth from '../API/LoginAuth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector  } from 'react-redux';
import { loginUser, logoutUser } from '../actions/actions';
import AuthService from '../services/AuthService';


 function Login ()  {

  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state.auth); // Access isAuth state from Redux store
  const { isRole } = useSelector(state => state.auth);
  const navigate = useNavigate()
  const [login, setLogin]=useState("");
  const [password, setPassword]=useState("");

const [error, setError] = useState("");
        const hanldeInputChangeLogin = (event)=>{
          setLogin(event.target.value)
        }
        const hanldeInputChangePassword = (event)=>{
          setPassword(event.target.value)
        }
        useEffect(() => {
          const auth = localStorage.getItem('auth');
          const role = localStorage.getItem('role');
          if (auth && role) {
            dispatch(loginUser({ Result: JSON.parse(auth), Role: role }));
          }
        }, []);
        
        const handleLogin = async () => {
          try {
            const response = await AuthService.login(login, password);
            localStorage.setItem("auth", response.data.Result.toString()); // Преобразуем в строку
            localStorage.setItem("role", response.data.Role);
            dispatch(loginUser(response.data));
            if (response.data.Role === 'admin' && response.data.Result) {
              navigate('/mainAdmin');
            } else if (response.data.Result){
              navigate('/mainUser');
            }
          } catch (error) {
            console.log(error);
          }
        };
        const logOutAuth = async () => {
          try {
            await AuthService.logout();
            dispatch(logoutUser());
            localStorage.removeItem('token');
          } catch (error) {
            if (error.response && error.response.status) {
              console.error('Error logging out:', error.response.status);
            } else {
              console.error('Error logging out:', error);
            }
          }
        };
        
 
    return (
      <div className="login-container">
        <div className="login-box">
          <form>
            <div className="textbox">
            <label className='text-form' htmlFor="username">Логин</label>
              <input className='input_form' type="text" placeholder="Введите ваш логин" name="username"  onChange={hanldeInputChangeLogin} required />
            </div>
            <div className="textbox">
            <label  className='text-form' htmlFor="password">Пароль</label>
              <input type="password" placeholder="Введите ваш пароль" name="password" onChange={hanldeInputChangePassword} required />
            </div>
          </form>
        </div>
        <div className="external-buttons">
            <button className="btn_login" onClick={handleLogin}>Войти</button>
          <Link to="/forgetPass" className='forgotPassword'>Забыли пароль?</Link>
        </div>
        <button onClick={logOutAuth}>выйти</button>
        <div>{error && <p className="error-message">{error}</p>}</div>
      </div>
    );
}

export default Login;

