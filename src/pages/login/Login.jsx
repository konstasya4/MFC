import React, { useState } from "react";
import "./LoginStyle.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import loginUser from "../../utils/loginUser";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleInputChangeLogin = (event) => {
    setLogin(event.target.value);
    setError(null);
  };

  const handleInputChangePassword = (event) => {
    setPassword(event.target.value);
    setError(null);
  };
  const dataReset = () => {
    setLogin("");
    setPassword("");
  };
  const handleLogin = async () => {
    if (!(login === "" || password === "")) {
      dispatch(loginUser(login, password, navigate)).then((result) => {
        setError(result);
      });
      dataReset();
    } else {
      setError("Заполните пустые поля");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <form>
          <div className="textbox">
            <label className="text-form" htmlFor="username">
              Логин
            </label>
            <input
              className={`${error ? "error-input" : "input_form"}`}
              type="text"
              placeholder="Введите ваш логин"
              name="username"
              value={login}
              onChange={handleInputChangeLogin}
              required
            />
          </div>
          <div className="textbox">
            <label className="text-form" htmlFor="password">
              Пароль
            </label>
            <input
              className={`${error ? "error-input" : "input_form"}`}
              type="password"
              placeholder="Введите ваш пароль"
              name="password"
              value={password}
              onChange={handleInputChangePassword}
              required
            />
          </div>
        </form>
      </div>
      <div className="external-buttons">
        <button className="btn_login" onClick={handleLogin}>
          Войти
        </button>
        <Link to="/forgetPass" className="forgotPassword">
          Забыли пароль?
        </Link>
      </div>
      <div>{error && <p className="error-message">{error}</p>}</div>
    </div>
  );
}

export default Login;
