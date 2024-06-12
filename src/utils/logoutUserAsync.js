import AuthService from "../services/AuthService";
import { logoutUser } from '../redux/authReducer';

const logoutUserAsync = () => async (dispatch) => {
    try {
      await AuthService.logout();
      localStorage.removeItem('auth');
      localStorage.removeItem('role');
  
      dispatch(logoutUser());
    } catch (error) {
      console.error('Ошибка при выходе:', error);
    }
}
export default logoutUserAsync;
