import React, { useRef, useEffect} from "react";
import "../../styles/componentsStyles/ModalAuthStyle.css"; // Стили модального окна
import WarningIcon from "../../images/WarningIcon.png";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../ButtonComponent";

const ModalAuth = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const modalRef = useRef(null); // Создаем ссылку на элемент модального окна

  // Обработчик закрытия модального окна
  const handleLogin = () => {
    navigate("/login");
  };

  // Обработчик клика на внешнюю область модального окна
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose(); // Закрываем модальное окно при клике за его пределами
    }
  };

  // Добавляем обработчик клика на весь документ
  // Когда модальное окно открыто (isOpen === true)
  // И удаляем его при размонтировании компонента
//   useEffect(() => {
    // const handleClickOutsideEvent = (event) => {
    //   if (isOpen && modalRef.current && !modalRef.current.contains(event.target)) {
    //     onClose();
    //   }
    // };

    // if (isOpen) {
    //   document.addEventListener("click", handleClickOutsideEvent);
    // } else {
    //   document.removeEventListener("click", handleClickOutsideEvent);
    // }

    // return () => {
    //   document.removeEventListener("click", handleClickOutsideEvent);
    // };
//   }, [isOpen, onClose]);

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay" ref={modalRef}>
          <div className="modal">
            <div className="modal-content">
              <img src={WarningIcon} alt="Warning Icon" />
              <p className="modal-text">Для получения услуги необходимо войти в учетную запись</p>
              <ButtonComponent className="modal-open-btn" onClick={handleLogin} name="Войти" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalAuth;
