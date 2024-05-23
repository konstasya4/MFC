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
            return (true)
        } else if (response.data.succeeded){
            navigate('/mainUser');
            return (true)
        } else {
            return ('Неверно введены данные')
        }
    } catch (error) {
        console.error('Ошибка при входе:', error);
    }
};

export default loginUserAsync;
