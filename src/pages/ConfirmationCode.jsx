import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext, RoleContext } from "../context";
import { useContext } from "react";

const ConfirmationCode = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const { isRole, setIsRole } = useContext(RoleContext);
  const [newPassword, setNewPassword] = useState(true);
  const statePass = () => {
    setNewPassword(false);
  };

  const user = (event) => {
    // event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
    setIsRole("user");
    localStorage.setItem("role", "user");
  };
  return newPassword ? (
    <div className="login-container">
      <div className="forget-box">
        <form>
          <div className="textbox">
            <div className="text-form mail-text">Введите код подтверждения</div>
            <input
              className="input_form"
              type="text"
              placeholder="Введите код"
              name="e-mail"
              required
            />
          </div>
        </form>
      </div>
      <div className="external-buttons">
        <button className="btn_login" onClick={statePass}>
          Подтвердить
        </button>
      </div>
    </div>
  ) : (
    <div className="login-container">
      <div className="login-box">
        <form>
          <div className="textbox">
            <input
              className="input_form"
              type="text"
              placeholder="Введите новый пароль"
              name="password"
              required
            />
          </div>
          <div className="textbox">
            <input
              type="text"
              placeholder="Введите еще раз"
              name="newPassword"
              required
            />
          </div>
        </form>
      </div>
      <div className="external-buttons">
        <Link to="/mainUser">
          <button className="btn_login" onClick={user}>Войти</button>
        </Link>
      </div>
    </div>
  );
};
export default ConfirmationCode;
