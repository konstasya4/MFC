import React, { useEffect } from "react";
import '../../styles/componentsStyles/OrderedServices.css'
import PersonalDataActive from '../../images/PersonalDataActive.png'
import { Link, useNavigate } from "react-router-dom";

const StudentItem = (props) => {
    // const navigate = useNavigate()
    // const handleClick = () => {
    //     // Перенаправляем пользователя на маршрут с ID услуги
    //     navigate(`/services/${props.listStudent.id}`);
    // };
    return (
        // <button className="btn-container">
        <Link to='/students'>
          <div className="status-container">
        <div class="avatar-list">
                  <img src={PersonalDataActive} alt="Your Name" />
                </div>
        <div className="status-item">
          <div className="status-item-title">{props.listStudent.surname} {props.listStudent.name} {props.listStudent.middleName}</div>
          <div className="status-item-date">{props.listStudent.group} {props.listStudent.directionOfStudy}</div>
        </div>
        
        
      </div>
        </Link>
            
        // </button>
      
    );
};
export default StudentItem;