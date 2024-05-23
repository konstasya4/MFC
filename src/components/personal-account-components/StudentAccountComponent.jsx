import { useState, useEffect } from "react";
import UserService from "../../services/UserService";
import PersonalDataActive from './images/PersonalDataActive.png';
import Show from './images/Show.png';
import Hide from './images/Hide.png';
import IconCopy from './images/IconCopy.png';
import InputComponent from "../input-component/InputComponent";
import ButtonComponent from "../button-component/ButtonComponent";
import "./AccountStyle.css";

const StudentAccountComponent =()=>{
  const [visibleField, setVisibleField] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [editMail, setEditMail] = useState();
  const [editPassword, setEditPassword] = useState()
  const [editing, setEditing]=useState(true)
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await UserService.fetchCurrentUser(); // Получаем информацию о текущем пользователе
        setUserData(response.data); // Обновляем состояние с данными пользователя
        console.log(userData)
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  const toggleVisibility = (field) => {
    setVisibleField(visibleField === field ? null : field);
  };
  console.log(userData);
  // console.log(userData.Passport.dateOfBirth);
  const hideData = (userData) => {
    if (!userData) return "";
    const firstChar = userData.substring(0, 1);
    const lastChar = userData.substring(userData.length - 1);
    const hiddenPart = "*".repeat(userData.length - 2);
    return firstChar + hiddenPart + lastChar;
  };
  const hidePassword = (userData) => {
    if (!userData) return "";
    const hiddenPart = "*".repeat(userData.length);
    return hiddenPart;
  };
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    //dsaas
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
    setEditMail(userData.Email);
  };
  const changingEditing = ()=>{
setEditing(!editing)
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const passportData=()=>{
      return userData
      ? `${userData.passport.series} ${userData.passport.number}`
      : null;
  }

return(     
<div>
{userData && (
  <div>
    <div className="person-data-conteiner">
      <div className="name-person horiz-line">
        <div className="avatarAccount">
          <img src={PersonalDataActive} />
        </div>
        <div className="name-line">
          <div className="fio">{userData.name?.second}</div>
          <div className="name-second-line horiz-line">
            <div className="fio">{userData.name?.first}</div>
            <div className="fio midleName">{userData.name?.middle}</div>
          </div>
        </div>
      </div>
      <div className="passport-data-container">
        <div className="title-container">Паспортные данные</div>
        <div className="table-pass">
          <div>
            <div className="passportData column-account">
              <div className="title-account">Серия и номер</div>
              <div className="btn-show">
                <div className="text-account">
                  {visibleField === "passportData"
                    ? passportData()
                    : hideData(passportData())}
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
                <button onClick={() => copyToClipboard(passportData)}>
                  <img src={IconCopy} alt="Copy" />
                </button>
              </div>
            </div>
            <div className="gender column-account">
              <div className="title-account">Пол</div>
              <div className="text-account">{userData.gender}</div>
            </div>
            <div className="citizenship column-account">
              <div className="title-account">Гражданство</div>
              <div className="text-account">{userData.passport.citizenship}</div>
            </div>
          </div>
          <div className="column-line">
            <div className="dateOfIssue column-account">
              <div className="title-account">Дата выдачи</div>
              <div className="btn-show">
                <div className="text-account">
                  {visibleField === "dateOfIssue"
                    ? userData.passport.dateOfIssue
                    : hideData(userData.passport.dateOfIssue)}
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
                <button onClick={() => copyToClipboard(userData.passport.dateOfIssue)}>
                  <img src={IconCopy} alt="Copy" />
                </button>
              </div>
            </div>
            <div className="dateOfBirth column-account">
              <div className="title-account">Дата рождения</div>
              <div className="text-account">{userData.passport.dateOfBrith}</div>
            </div>
          </div>
          <div className="column-line">
            <div className="unitCode column-account">
              <div className="title-account">Код подраздаления</div>
              <div className="btn-show">
                <div className="text-account">
                  {visibleField === "unitCode"
                    ? userData.passport.unitCode
                    : hideData(userData.passport.unitCode)}
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
                <button onClick={() => copyToClipboard(userData.passport.unitCode)}>
                  <img src={IconCopy} alt="Copy" />
                </button>
              </div>
            </div>
            <div className="placeOfBirth column-account">
              <div className="title-account">Место рождения</div>
              <div className="text-account">{userData.passport.placeOfBrith}</div>
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
                <div className="text-account">{userData.servicenumber}</div>
                <button onClick={() => copyToClipboard(userData.servicenumber)}>
                  <img src={IconCopy} alt="Copy" />
                </button>
              </div>
            </div>
            <div className="gender column-account">
              <div className="title-account">Группа</div>
              <div className="text-account">{userData.group}</div>
            </div>
            <div className="citizenship column-account">
              <div className="title-account">Пароль</div>
              {/* {editing ? (
                <div className="btn-show">
                  <div className="text-account">
                    {visibleField === "password"
                      ? userData.password
                      : hidePassword(userData.password)}
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
              )} */}
            </div>
          </div>
          <div className="column-line">
            <div className="dateOfIssue column-account">
              <div className="title-account">ИНН</div>
              <div className="btn-show">
                <div className="text-account">
                  {visibleField === "inn" ? userData.inn : hideData(userData.inn)}
                </div>
                <button img={Show} onClick={() => toggleVisibility("inn")}>
                  {visibleField === "inn" ? (
                    <img src={Show}></img>
                  ) : (
                    <img src={Hide}></img>
                  )}
                </button>
                <button onClick={() => copyToClipboard(userData.inn)}>
                  <img src={IconCopy} alt="Copy" />
                </button>
              </div>
            </div>
            <div className="dateOfBirth column-account">
              <div className="title-account">Направление обучения</div>
              <div className="text-account">{userData.directionofstudy}</div>
            </div>
          </div>
          <div className="column-line">
            <div className="unitCode column-account">
              <div className="title-account">СНИЛС</div>
              <div className="btn-show">
                <div className="text-account">
                  {visibleField === "snils"
                    ? userData.snils
                    : hideData(userData.snils)}
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
                <button onClick={() => copyToClipboard(userData.snils)}>
                  <img src={IconCopy} alt="Copy" />
                </button>
              </div>
            </div>
            <div className="citizenship column-account">
              <div className="title-account">Электронная почта</div>
              {editing ? (
                <div className="text-account">{userData.email}</div>
              ) : (
                <div>
                  <InputComponent
                    className="eding-input"
                    type="text"
                    value={editMail}
                    onChange={handleInputChange}
                  />
                </div>
              )}
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
  </div>)}
  
</div>)
}
export default StudentAccountComponent;