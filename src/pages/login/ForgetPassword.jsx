import { Link } from "react-router-dom";

const ForgetPassword =()=>{
return (
  <div className="login-container">
    <div className="forget-box">
      <form>
        <div className="textbox">
          <div className="text-form mail-text">
            Введите электронную почту на которую нужно отправить код
            подтверждения
          </div>
          <input
            className="input_form"
            type="text"
            placeholder="Введите вашу почту"
            name="e-mail"
            required
          />
        </div>
      </form>
    </div>
    <div className="external-buttons">
      <Link to="/code">
        <button className="btn_login">Отправить код</button>
      </Link>
    </div>
  </div>
);
}
export default ForgetPassword;