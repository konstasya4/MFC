// loginActions.js
import AuthService from "../services/AuthService";
import { loginUser } from '../redux/authReducer';

const loginUserAsync = (login, password, navigate) => async (dispatch) => {

    try {
        const response = await AuthService.login(login, password);
        localStorage.setItem("auth", response.data.succeeded.toString());
        localStorage.setItem("role", response.data.role);

        dispatch(loginUser(response.data));

        if (response.data.role === 'admin' && response.data.succeeded) {
            navigate('/mainAdmin');
        } else if (response.data.succeeded){
            navigate('/mainUser');
        } else {
            // Handle invalid login credentials
        }
    } catch (error) {
        console.error('Ошибка при входе:', error);
        // Handle login error
    }
};

export default loginUserAsync;
