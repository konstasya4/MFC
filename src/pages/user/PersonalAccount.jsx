import React, { useState, useEffect } from "react";
import NavbarLeft from "../../components/Navbar/leftNavbar/NavbarLeft";
import PersonalData from "../../API/PersonalData";
import PersonalDataActive from "../../images/PersonalDataActive.png";
import "../../styles/PersonalAccountStyle.css";
import Show from "../../images/Show.png";
import Hide from "../../images/Hide.png";
import IconCopy from "../../images/IconCopy.png";
import InputComponent from "../../components/InputComponent"
import ButtonComponent from "../../components/ButtonComponent";
import UserService from "../../services/UserService";
const PersonalAccount = () => {
  // const [data, setData] = useState({});
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
      ? `${userData.Passport.series} ${userData.Passport.number}`
      : null;
  }

  return (
    <div>
      {userData &&(
        <div>
      <div className="head-container">
        <div className="head-personal-data">Личные данные</div>
      </div>
      <div className="account-personal-conteiner horiz-line">
        <NavbarLeft />
        <div className="person-data-conteiner">
          <div className="name-person horiz-line">
            <div className="avatarAccount">
              <img src={PersonalDataActive} />
            </div>
            <div className="name-line">
              <div className="fio">{userData.Name.second}</div>
              <div className="name-second-line horiz-line">
                <div className="fio">{userData.Name.first}</div>
                <div className="fio midleName">{userData.Name.middle}</div>
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
                  <div className="text-account">{userData.Gender}</div>
                </div>
                <div className="citizenship column-account">
                  <div className="title-account">Гражданство</div>
                  <div className="text-account">{userData.Passport.citizenship}</div>
                </div>
              </div>
              <div className="column-line">
                <div className="dateOfIssue column-account">
                  <div className="title-account">Дата выдачи</div>
                  <div className="btn-show">
                    <div className="text-account">
                      {visibleField === "dateOfIssue"
                        ? userData.Passport.dateOfIssue
                        : hideData(userData.Passport.dateOfIssue)}
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
                    <button onClick={() => copyToClipboard(userData.Passport.dateOfIssue)}>
                      <img src={IconCopy} alt="Copy" />
                    </button>
                  </div>
                </div>
                <div className="dateOfBirth column-account">
                  <div className="title-account">Дата рождения</div>
                  <div className="text-account">{userData.Passport.dateOfBrith}</div>
                </div>
              </div>
              <div className="column-line">
                <div className="unitCode column-account">
                  <div className="title-account">Код подраздаления</div>
                  <div className="btn-show">
                    <div className="text-account">
                      {visibleField === "unitCode"
                        ? userData.Passport.unitCode
                        : hideData(userData.Passport.unitCode)}
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
                    <button onClick={() => copyToClipboard(userData.Passport.unitCode)}>
                      <img src={IconCopy} alt="Copy" />
                    </button>
                  </div>
                </div>
                <div className="placeOfBirth column-account">
                  <div className="title-account">Место рождения</div>
                  <div className="text-account">{userData.Passport.placeOfBrith}</div>
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
                    <div className="text-account">{userData.ServiceNumber}</div>
                    <button onClick={() => copyToClipboard(userData.ServiceNumber)}>
                      <img src={IconCopy} alt="Copy" />
                    </button>
                  </div>
                </div>
                <div className="gender column-account">
                  <div className="title-account">Группа</div>
                  <div className="text-account">{userData.Group}</div>
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
                      {visibleField === "inn" ? userData.INN : hideData(userData.INN)}
                    </div>
                    <button img={Show} onClick={() => toggleVisibility("inn")}>
                      {visibleField === "inn" ? (
                        <img src={Show}></img>
                      ) : (
                        <img src={Hide}></img>
                      )}
                    </button>
                    <button onClick={() => copyToClipboard(userData.INN)}>
                      <img src={IconCopy} alt="Copy" />
                    </button>
                  </div>
                </div>
                <div className="dateOfBirth column-account">
                  <div className="title-account">Направление обучения</div>
                  <div className="text-account">{userData.DirectionOfStudy}</div>
                </div>
              </div>
              <div className="column-line">
                <div className="unitCode column-account">
                  <div className="title-account">СНИЛС</div>
                  <div className="btn-show">
                    <div className="text-account">
                      {visibleField === "snils"
                        ? userData.SNILS
                        : hideData(userData.SNILS)}
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
                    <button onClick={() => copyToClipboard(userData.SNILS)}>
                      <img src={IconCopy} alt="Copy" />
                    </button>
                  </div>
                </div>
                <div className="citizenship column-account">
                  <div className="title-account">Электронная почта</div>
                  {editing ? (
                    <div className="text-account">{userData.Email}</div>
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
      </div>
   </div>)}
    </div>
    // <div>
    //  {userData && (
    //     <div className="user-info">
    //       <h2>Личные данные пользователя</h2>
    //       <p>Имя: {userData.Name.first}</p>
    //       <p>Фамилия: {userData.Name.second}</p>
    //       <p>Отчество: {userData.Name.middle}</p>
    //       <p>Email: {userData.Email}</p>
    //       <p>Телефон: {userData.PhoneNumber || "Нет данных"}</p>
    //       <p>Пол: {userData.Gender}</p>
    //       <p>ИНН: {userData.INN}</p>
    //       <p>СНИЛС: {userData.SNILS}</p>
    //       <p>Серия и номер паспорта: {userData.Passport.series} {userData.Passport.number}</p>
    //       <p>Код подразделения: {userData.Passport.unitCode}</p>
    //       <p>Место рождения: {userData.Passport.placeOfBrith}</p>
    //       <p>Дата рождения: {userData.Passport.dateOfBrith}</p>
    //       <p>Дата выдачи паспорта: {userData.Passport.dateOfIssue}</p>
    //       <p>Гражданство: {userData.Passport.citizenship}</p>
    //       <p>Роль: {userData.Role}</p>
    //     </div>
    //   )}
    // </div>
  );
};

export default PersonalAccount;

// import React, { useState, useEffect } from "react";
// import NavbarLeft from "../../components/Navbar/leftNavbar/NavbarLeft";
// import UserService from "../../services/UserService";
// import "../../styles/PersonalAccountStyle.css";

// const PersonalAccount = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await UserService.fetchCurrentUser();
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };
//     fetchUserData();
//   }, []);

//   return (
//     <div>
//       {userData && (
//         <div className="user-info">
//           <h2>Личные данные пользователя</h2>
//           <p>Имя: {userData.Name.first}</p>
//           <p>Фамилия: {userData.Name.second}</p>
//           <p>Отчество: {userData.Name.middle}</p>
//           <p>Email: {userData.Email}</p>
//           <p>Телефон: {userData.PhoneNumber || "Нет данных"}</p>
//           <p>Пол: {userData.Gender}</p>
//           <p>ИНН: {userData.INN}</p>
//           <p>СНИЛС: {userData.SNILS}</p>
//           <p>Серия и номер паспорта: {userData.Passport.series} {userData.Passport.number}</p>
//           <p>Код подразделения: {userData.Passport.unitCode}</p>
//           <p>Место рождения: {userData.Passport.placeOfBrith}</p>
//           <p>Дата рождения: {userData.Passport.dateOfBrith}</p>
//           <p>Дата выдачи паспорта: {userData.Passport.dateOfIssue}</p>
//           <p>Гражданство: {userData.Passport.citizenship}</p>
//           <p>Роль: {userData.Role}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PersonalAccount;