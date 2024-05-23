import React, { useEffect } from "react";
import './TeacherComponentStyle.css'
import PersonalDataActive from './PersonalDataActive.png'
import { useNavigate } from "react-router-dom";

const TeacherItem = (props) => {
  const navigate = useNavigate()
  const handleClick = () => {
      navigate(`/employee/${props.listTeacher.post}`);
  };
    return (
      <div className="status-container" onClick={handleClick}>
        <div class="avatar-list">
                  <img src={PersonalDataActive} alt="Your Name" />
                </div>
        <div className="status-item">
          <div className="status-item-title">{props.listTeacher.name.second} {props.listTeacher.name.first} {props.listTeacher.name.middle}</div>
        </div>
        
        
      </div>
    );
};
export default TeacherItem;