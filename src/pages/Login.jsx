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
import React, { useState } from 'react';
import '../styles/LoginStyle.css'
import { Link } from 'react-router-dom';
import { AuthContext, RoleContext } from '../context';
import { useContext } from 'react';
import axios from 'axios';
import LoginAuth from '../API/LoginAuth';


 function Login ()  {
  // async function userLog(){
  //   const responseLogin = await axios.post('http://localhost:8080/api/account/login?userName=admin&password=admin123')
  //   console.log(responseLogin)
  // }
  const [login, setLogin]=useState("");
  const [password, setPassword]=useState("");
  const {isAuth, setIsAuth} = useContext(AuthContext);
const {isRole, setIsRole} = useContext(RoleContext);
  async function userLogout(){
    const responseLogout= await axios.post('http://localhost:8080/api/account/logout')
    console.log(responseLogout)
  }

  const userLogin = event =>{
            // event.preventDefault();
            setIsAuth(true);
            localStorage.setItem('auth', 'true')
            setIsRole('user');
            localStorage.setItem('role', 'user')
        }
        const hanldeInputChangeLogin = (event)=>{
          setLogin(event.target.value)
        }
        const hanldeInputChangePassword = (event)=>{
          setPassword(event.target.value)
        }
        const auth = ()=>{
          const authCode=LoginAuth.LogIn(login, password)
          console.log(authCode)
          if (authCode.data){
            setIsAuth(true);
            localStorage.setItem('auth', 'true')
            setIsRole('admin');
            localStorage.setItem('role', 'admin')
          }
        }
    return (
      <div className="login-container">
        <div className="login-box">
          <form>
            <div className="textbox">
            <label className='text-form' htmlFor="username">Логин</label>
              <input className='input_form' type="text" placeholder="Введите ваш логин" name="username" value={login} onChange={hanldeInputChangeLogin} required />
            </div>
            <div className="textbox">
            <label  className='text-form' htmlFor="password">Пароль</label>
              <input type="password" placeholder="Введите ваш пароль" name="password" value={password} onChange={hanldeInputChangePassword} required />
            </div>
          </form>
        </div>
        <div className="external-buttons">
            <Link to="/mainUser"><button className="btn_login" onClick={auth}>Войти</button></Link>
          <Link to="/forgetPass" className='forgotPassword'>Забыли пароль?</Link>
        </div>
        {/* <button onClick={userLog}> зайти</button>
        <button onClick={userLogout}>выйти</button> */}
      </div>
    );
}

export default Login;

