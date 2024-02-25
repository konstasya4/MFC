import React, { useContext } from "react";
import { AuthContext, RoleContext } from "../context";
const Login=()=>{
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const{isRole, setIsRole}=useContext(RoleContext);
    console.log(isAuth)
    console.log(isRole)

    // const login = event => {
    //     event.preventDefault();
        
    // }
    const admin = event =>{
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
        setIsRole('admin');
        localStorage.setItem('role', 'admin')
    }
    const user = event =>{
        event.preventDefault();
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
                <button className="admin-button" onClick={admin}>
                    Администратор
                </button>
                <button className="user-button"  onClick={user}>
                Пользователь
                </button>
            </form>
        </div>
    );
}
export default Login