import { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmationCode = () => {
  const [newPassword, setNewPassword] = useState(true);
  const statePass = () => {
    setNewPassword(false);
  };

  const user = (event) => {
    localStorage.setItem("auth", "true");
    localStorage.setItem("role", "user");
  };
  const admin = (event) => {
    localStorage.setItem("auth", "true");
    localStorage.setItem("role", "admin");
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
        <Link to="/mainAdmin">
          <button className="btn_login" onClick={admin}>Войти</button>
        </Link>
      </div>
    </div>
  );
};
export default ConfirmationCode;
