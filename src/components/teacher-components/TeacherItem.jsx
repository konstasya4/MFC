import React, { useEffect } from "react";
import '../../styles/componentsStyles/OrderedServices.css'
import PersonalDataActive from '../../images/PersonalDataActive.png'
import { Link } from "react-router-dom";

const TeacherItem = (props) => {
    return (
      <Link to='/teacher'>
      <div className="status-container">
        <div class="avatar-list">
                  <img src={PersonalDataActive} alt="Your Name" />
                </div>
        <div className="status-item">
          <div className="status-item-title">{props.listTeacher.surname} {props.listTeacher.name} {props.listTeacher.middleName}</div>
          {/* <div className="status-item-date">{props.listTeacher.group} {props.listTeacher.directionOfStudy}</div> */}
        </div>
        
        
      </div>
      </Link>
    );
};
export default TeacherItem;