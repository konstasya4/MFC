import React, { useRef, useEffect} from "react";
import "../../styles/componentsStyles/ModalAuthStyle.css"; // Стили модального окна
import SentServiceIcon from "../../images/SentServiceIcon.png";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../ButtonComponent";

const ModalOrderingService = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const modalRef = useRef(null); // Создаем ссылку на элемент модального окна

  // Обработчик закрытия модального окна
  const handlePersonalAccount = () => {
    navigate("/status");
  };
  const handleMainPage = () => {
    navigate("/mainUser");
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
            <div className="modal-sent-service-content">
              <img src={SentServiceIcon} alt="Warning Icon" />
              <div className="modal-sent-service">
                <p className="modal-text">
                  Заявка принята, следите за ее статусом в личном кабинете
                </p>
                <ButtonComponent
                  className="modal-open-btn"
                  onClick={handlePersonalAccount}
                  name="В личный кабинет"
                />
                <div className="modal-sent-service-text-back" onClick={handleMainPage}> На главную страницу</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalOrderingService;
