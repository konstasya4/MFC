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
import React, { useState} from 'react';
import '../styles/LoginStyle.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import loginUser from '../utils/loginUser'


function Login () {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [login, setLogin]=useState("");
  const [password, setPassword]=useState("");
  const [error, setError] = useState(""); // State for error message

  const hanldeInputChangeLogin = (event)=>{
    setLogin(event.target.value)
  }
  
  const hanldeInputChangePassword = (event)=>{
    setPassword(event.target.value)
  }
  
  // useEffect(() => {
  //   const auth = localStorage.getItem('auth');
  //   const role = localStorage.getItem('role');
  //   if (auth && role) {
  //     dispatch(loginUser({ succeeded: JSON.parse(auth), role: role }));
  //   }
  // }, []);
  
  const handleLogin = async () => {
    dispatch(loginUser(login, password, navigate))
      // const response = await AuthService.login(login, password);
      // localStorage.setItem("auth", response.data.succeeded); // Convert to string
      // localStorage.setItem("role", response.data.role);
      // dispatch(loginUser(response.data));
      // if (response.data.role === 'admin' && response.data.succeeded) {
      //   navigate('/mainAdmin');
      // } else if (response.data.succeeded){
      //   navigate('/mainUser');
      // }
      // else setError("Неверно введен пароль");

  };
  
  // const logOutAuth = async () => {
  //   try {
  //     await AuthService.logout();
  //     dispatch(logoutUser());
  //     localStorage.removeItem('token');
  //   } catch (error) {
  //     if (error.response && error.response.status) {
  //       console.error('Error logging out:', error.response.status);
  //     } else {
  //       console.error('Error logging out:', error);
  //     }
  //   }
  // };
  
  return (
    <div className="login-container">
      <div className="login-box">
        <form>
          <div className="textbox">
            <label className='text-form' htmlFor="username">Логин</label>
            <input className={`${error ? 'error-input': 'input_form'}`} type="text" placeholder="Введите ваш логин" name="username" onChange={hanldeInputChangeLogin} required />
          </div>
          <div className="textbox">
            <label  className='text-form' htmlFor="password">Пароль</label>
            <input className={` ${error ? 'error-input': 'input_form'}`} type="password" placeholder="Введите ваш пароль" name="password" onChange={hanldeInputChangePassword} required />
          </div>
        </form>
      </div>
      <div className="external-buttons">
        <button className="btn_login" onClick={handleLogin}>Войти</button>
        <Link to="/forgetPass" className='forgotPassword'>Забыли пароль?</Link>
      </div>
      <div>{error && <p className="error-message">{error}</p>}</div>
    </div>
  );
}

export default Login;


