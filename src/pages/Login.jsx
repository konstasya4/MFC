import React, { useContext } from "react";
import { AuthContext, RoleContext } from "../context";
import { Link } from "react-router-dom";
const Login=()=>{
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const{isRole, setIsRole}=useContext(RoleContext);
    console.log(isAuth)
    console.log(isRole)

    // const login = event => {
    //     event.preventDefault();
        
    // }
    const admin = event =>{
        // event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
        setIsRole('admin');
        localStorage.setItem('role', 'admin')
    }
    const user = event =>{
        // event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
        setIsRole('user');
        localStorage.setItem('role', 'user')
    }
    return(
        <div>
            <form>
                <input id="userName" type="text"/>
                <input id="password" type="password"/>
                <Link to="/admin"><button className="admin-button" onClick={admin}>
                    Администратор
                </button></Link>
               <Link to="/mainUser"><button className="user-button"  onClick={user}>
                Пользователь
                </button></Link> 
            </form>
        </div>
    );
}
export default Login