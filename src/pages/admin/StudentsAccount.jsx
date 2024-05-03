import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StudentList from "../../API/StudentList";
import NavbarLeft from "../../components/Navbar/leftNavbar/NavbarLeft";
import PersonalData from "../../API/PersonalData";
import PersonalDataActive from "../../images/PersonalDataActive.png";
import "../../styles/PersonalAccountStyle.css";
import Show from "../../images/Show.png";
import Hide from "../../images/Hide.png";
import IconCopy from "../../images/IconCopy.png";
import InputComponent from "../../components/InputComponent"
import ButtonComponent from "../../components/ButtonComponent";
import { Link } from "react-router-dom";
const StudentsAccount = ()=>{
    const { id } = useParams();
    const [student, setStudent] = useState({}); // Устанавливаем начальное значение в пустой объект
    const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки данных
    const [visibleField, setVisibleField] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [editMail, setEditMail] = useState(null);
    const [editPassword, setEditPassword] = useState(null);
    const [editing, setEditing]=useState(true)
  
    
    useEffect(() => {
      const fetchPersonalData = async () => {
        try {
          const response = await StudentList.getStudentAdmin();
          console.log(response)
          setStudent(response[0]);
          console.log("shajhd",student)
        } catch (error) {
          console.error("Error fetching service:", error);
        }
      };
      fetchPersonalData();
    }, []);
    
    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    const toggleVisibility = (field) => {
        setVisibleField(visibleField === field ? null : field);
      };
      console.log(student);
      console.log(student.dateOfBirth);
      const hideData = (data) => {
        if (!data) return "";
        const firstChar = data.substring(0, 1);
        const lastChar = data.substring(data.length - 1);
        const hiddenPart = "*".repeat(data.length - 2);
        return firstChar + hiddenPart + lastChar;
      };
      const hidePassword = (data) => {
        if (!data) return "";
        const hiddenPart = "*".repeat(data.length);
        return hiddenPart;
      };
      const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
      };
      // const handleEditMail = async () => {
      //   try {
      //     const updatedData = { ...data, mail: editMail };
      //     const response = await PersonalData.update(updatedData);
      //     setData(response);
      //     console.log("Mail updated successfully:", response.mail);
      //   } catch (error) {
      //     console.error("Error updating mail:", error);
      //   }
      // };
      const handleInputChange = (event) => {
        setEditMail(event.target.value);
        setEditMail(student.mail);
      };
      const changingEditing = ()=>{
    setEditing(!editing)
      }
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    return(<div className="account-container">
        <div className="head-container">
          <div className="head-personal-data">Личные данные</div>
        </div>
        <div className="account-personal-conteiner horiz-line">
          <NavbarLeft />
          <div className="person-data-conteiner">
          <div className="input-container-account">
            <InputComponent className="status-input" placeholder="Иванов Иван Иванович"/>
            <Link to="/listOfStudents"><ButtonComponent className="bnt-admin-account" name='Назад'></ButtonComponent></Link>
            
            </div>
            <div className="name-person horiz-line">
              <div className="avatarAccount">
                <img src={PersonalDataActive} />
              </div>
              <div className="name-line">
                <div className="fio">{student.surname}</div>
                <div className="name-second-line horiz-line">
                  <div className="fio">{student.name}</div>
                  <div className="fio midleName">{student.middleName}</div>
                </div>
              </div>
            </div>
            <div className="passport-data-container">
              <div className="title-container">Паспортные данные</div>
              <div className="table-pass">
                <div>
                  <div className="passportData column-account">
                    <div className="title-account">Серия и номер</div>
                    {editing ? (
                      <div className="btn-show">
                      <div className="text-account">
                        {visibleField === "passportData"
                          ? student.passportData
                          : hideData(student.passportData)}
                      </div>
                      <button
                        img={Show}
                        onClick={() => toggleVisibility("passportData")}
                      >
                        {visibleField === "passportData" ? (
                          <img src={Show}></img>
                        ) : (
                          <img src={Hide}></img>
                        )}
                      </button>
                      <button onClick={() => copyToClipboard(student.passportData)}>
                        <img src={IconCopy} alt="Copy" />
                      </button>
                    </div>
                    ) : (
                      <div className="eding-input">
                        <input
                          type="text"
                          value={editMail}
                          onChange={handleInputChange}
                        />
                      </div>
                    )}
                  </div>
                  <div className="gender column-account">
                    <div className="title-account">Пол</div>
                    <div className="text-account">{student.gender}</div>
                  </div>
                  <div className="citizenship column-account">
                    <div className="title-account">Гражданство</div>
                    <div className="text-account">{student.citizenship}</div>
                  </div>
                </div>
                <div className="column-line">
                  <div className="dateOfIssue column-account">
                    <div className="title-account">Дата выдачи</div>
                    {editing ? (
                      <div className="btn-show">
                      <div className="text-account">
                        {visibleField === "dateOfIssue"
                          ? student.dateOfIssue
                          : hideData(student.dateOfIssue)}
                      </div>
                      <button
                        img={Show}
                        onClick={() => toggleVisibility("dateOfIssue")}
                      >
                        {visibleField === "dateOfIssue" ? (
                          <img src={Show}></img>
                        ) : (
                          <img src={Hide}></img>
                        )}
                      </button>
                      <button onClick={() => copyToClipboard(student.dateOfIssue)}>
                        <img src={IconCopy} alt="Copy" />
                      </button>
                    </div>
                    ) : (
                      <div className="eding-input">
                        <input
                          type="text"
                          value={editMail}
                          onChange={handleInputChange}
                        />
                      </div>
                    )}
                  </div>
                  <div className="dateOfBirth column-account">
                    <div className="title-account">Дата рождения</div>
                    <div className="text-account">{student.dateOfBirth}</div>
                  </div>
                </div>
                <div className="column-line">
                  <div className="unitCode column-account">
                    <div className="title-account">Код подраздаления</div>
                    {editing ? (
                       <div className="btn-show">
                       <div className="text-account">
                         {visibleField === "unitCode"
                           ? student.unitCode
                           : hideData(student.unitCode)}
                       </div>
                       <button
                         img={Show}
                         onClick={() => toggleVisibility("unitCode")}
                       >
                         {visibleField === "unitCode" ? (
                           <img src={Show}></img>
                         ) : (
                           <img src={Hide}></img>
                         )}
                       </button>
                       <button onClick={() => copyToClipboard(student.unitCode)}>
                         <img src={IconCopy} alt="Copy" />
                       </button>
                     </div>
                    ) : (
                      <div className="eding-input">
                        <input
                          type="text"
                          value={editMail}
                          onChange={handleInputChange}
                        />
                      </div>
                    )}
                  </div>
                  <div className="placeOfBirth column-account">
                    <div className="title-account">Место рождения</div>
                    <div className="text-account">{student.placeOfBirth}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="students-data-container">
              <div className="title-container">Данные о студенте</div>
              <div className="table-pass">
                <div>
                  <div className="passportData column-account">
                    <div className="title-account">Табельный номер</div>
                    <div className="btn-show">
                      <div className="text-account">{student.serviceNumber}</div>
                      <button onClick={() => copyToClipboard(student.serviceNumber)}>
                        <img src={IconCopy} alt="Copy" />
                      </button>
                    </div>
                  </div>
                  <div className="gender column-account">
                    <div className="title-account">Группа</div>
                    {editing ? (
                      <div className="text-account">{student.group}</div>
                    ) : (
                      <div className="eding-input">
                        <input
                          type="text"
                          value={editMail}
                          onChange={handleInputChange}
                        />
                      </div>
                    )}
                  </div>
                  {/* <div className="citizenship column-account">
                    <div className="title-account">Пароль</div>
                    {editing ? (
                      <div className="btn-show">
                        <div className="text-account">
                          {visibleField === "password"
                            ? student.password
                            : hidePassword(student.password)}
                        </div>
                        <button
                          img={Show}
                          onClick={() => toggleVisibility("password")}
                        >
                          {visibleField === "password" ? (
                            <img src={Show}></img>
                          ) : (
                            <img src={Hide}></img>
                          )}
                        </button>
                      </div>
                    ) : (
                      <div>
                        <InputComponent
                          className=" pass-eding"
                          type="password"
                          onChange={togglePasswordVisibility}
                        />
                      </div>
                    )}
                  </div> */}
                </div>
                <div className="column-line">
                  <div className="dateOfIssue column-account">
                    <div className="title-account">ИНН</div>
                    <div className="btn-show">
                      <div className="text-account">
                        {visibleField === "inn" ? student.inn : hideData(student.inn)}
                      </div>
                      <button img={Show} onClick={() => toggleVisibility("inn")}>
                        {visibleField === "inn" ? (
                          <img src={Show}></img>
                        ) : (
                          <img src={Hide}></img>
                        )}
                      </button>
                      <button onClick={() => copyToClipboard(student.inn)}>
                        <img src={IconCopy} alt="Copy" />
                      </button>
                    </div>
                  </div>
                  <div className="dateOfBirth column-account">
                    <div className="title-account">Направление обучения</div>
                    {editing ? (
                      <div className="text-account">{student.directionOfStudy}</div>
                    ) : (
                      <div className="eding-input">
                        <input
                          type="text"
                          value={editMail}
                          onChange={handleInputChange}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="column-line">
                  <div className="unitCode column-account">
                    <div className="title-account">СНИЛС</div>
                    <div className="btn-show">
                      <div className="text-account">
                        {visibleField === "snils"
                          ? student.snils
                          : hideData(student.snils)}
                      </div>
                      <button
                        img={Show}
                        onClick={() => toggleVisibility("snils")}
                      >
                        {visibleField === "snils" ? (
                          <img src={Show}></img>
                        ) : (
                          <img src={Hide}></img>
                        )}
                      </button>
                      <button onClick={() => copyToClipboard(student.snils)}>
                        <img src={IconCopy} alt="Copy" />
                      </button>
                    </div>
                  </div>
                  <div className="citizenship column-account">
                    <div className="title-account">Электронная почта</div>
                      <div className="text-account">{student.mail}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* <input type="text"
                value={editMail}
                onChange={(e) => setEditMail(e.target.value)}></input> */}
            {editing ? (
              <ButtonComponent
                className="btn-account"
                onClick={changingEditing}
                name="Редактировать"
              />
            ) : (
              <div>
                <ButtonComponent className="btn-account" name="Сохранить" />
                <ButtonComponent
                  className="btn-account cancel-btn"
                  onClick={changingEditing}
                  name="Отмена"
                />
              </div>
            )}
          </div>
        </div>
      </div>);
}
export default StudentsAccount;