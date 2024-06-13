import React from "react";
import NavbarLeft from "../../components/Navbar/leftNavbar/NavbarLeft";
import './QuestionStyle.css'
const Quest = () => {
  return (
    <div >
      <div className="question-page">
        <h2>Часто задаваемые вопросы</h2>
      </div>
      <div className="question-container">
        <NavbarLeft />
        <div className="question-list">
          <div>
            <h2 className="name-question">Что такое МФЦ</h2>
            <p>
              МФЦ - это многофункциональный центр РУТ (МИИТ), который
              предоставляет услуги для студентов, преподавателей, сотрудников и
              выпускников в режиме «одного окна».
            </p>
          </div>
          <div>
            <h2 className="name-question">Как добраться?</h2>
            <p>
              Мы находимся по адресу: г. Москва, ул. Образцова д.9 с.9, 1 корпус
              кабинет 1224
            </p>
          </div>
          <div>
            <h2 className="name-question">Что такое МФЦ</h2>
            <p>
              МФЦ - это многофункциональный центр РУТ (МИИТ), который
              предоставляет услуги для студентов, преподавателей, сотрудников и
              выпускников в режиме «одного окна».
            </p>
          </div>
          <div>
            <h2 className="name-question">Иностранным студентам</h2>
            <p>
              Управление международного сотрудничества (УМС) находится в
              аудитории 1301 по адресу: ул. Образцова, д. 9, стр. 9, 1 корпус, 3
              этаж. Часы работы: с 9:00 до 18:00. Обед: с 12:00 до 13:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quest;
