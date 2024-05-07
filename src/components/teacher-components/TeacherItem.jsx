import React, { useEffect } from "react";
import '../../styles/componentsStyles/OrderedServices.css'
import PersonalDataActive from '../../images/PersonalDataActive.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TeacherItem = (props) => {
  const navigate = useNavigate()
  const handleClick = () => {
      // Перенаправляем пользователя на маршрут с ID услуги
      navigate(`/employee/${props.listTeacher.post}`);
  };
    return (
      // <Link to='/teacher'>
      <div className="status-container" onClick={handleClick}>
        <div class="avatar-list">
                  <img src={PersonalDataActive} alt="Your Name" />
                </div>
        <div className="status-item">
          <div className="status-item-title">{props.listTeacher.name.second} {props.listTeacher.name.first} {props.listTeacher.name.middle}</div>
          {/* <div className="status-item-date">{props.listTeacher.group} {props.listTeacher.directionOfStudy}</div> */}
        </div>
        
        
      </div>
      // </Link>
    );
};
export default TeacherItem;