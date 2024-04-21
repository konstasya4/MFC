import React, { useState, useEffect } from "react";
import NavbarLeft from "../../components/Navbar/leftNavbar/NavbarLeft";
import PersonalData from "../../API/PersonalData";
import PersonalDataActive from "../../images/PersonalDataActive.png";
import "../../styles/PersonalAccountStyle.css";
import Show from "../../images/Show.png";
import Hide from "../../images/Hide.png";
import IconCopy from "../../images/IconCopy.png";

const PersonalAccount = () => {
  const [data, setData] = useState({});
  const [visibleField, setVisibleField] = useState(null);
  const [editMail, setEditMail] = useState(null);
  const [editPassword, setEditPassword] = useState(null);

  useEffect(() => {
    const fetchPersonalData = async () => {
      try {
        const response = await PersonalData.getId();
        setData(response[0]);
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    };
    fetchPersonalData();
  }, []);
  const toggleVisibility = (field) => {
    setVisibleField(visibleField === field ? null : field);
  };
  console.log(data);
  console.log(data.dateOfBirth);
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
  const handleEditMail = async () => {
    try {
      const updatedData = { ...data, mail: editMail };
      const response = await PersonalData.update(updatedData);
      setData(response);
      console.log("Mail updated successfully:", response.mail);
    } catch (error) {
      console.error("Error updating mail:", error);
    }
  };
  return (
    <div>
      <div className="head-personal-data">Личные данные</div>
      <div className="account-personal-conteiner horiz-line">
        <NavbarLeft />
        <div className="person-data-conteiner">
          <div className="name-person horiz-line">
            <div className="avatarAccount">
              <img src={PersonalDataActive} />
            </div>
            <div className="name-line">
              <div className="fio">{data.surname}</div>
              <div className="name-second-line horiz-line">
                <div className="fio">{data.name}</div>
                <div className="fio midleName">{data.middleName}</div>
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
                        ? data.passportData
                        : hideData(data.passportData)}
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
                    <button onClick={() => copyToClipboard(data.passportData)}>
                      <img src={IconCopy} alt="Copy" />
                    </button>
                  </div>
                </div>
                <div className="gender column-account">
                  <div className="title-account">Пол</div>
                  <div className="text-account">{data.gender}</div>
                </div>
                <div className="citizenship column-account">
                  <div className="title-account">Гражданство</div>
                  <div className="text-account">{data.citizenship}</div>
                </div>
              </div>
              <div className="column-line">
                <div className="dateOfIssue column-account">
                  <div className="title-account">Дата выдачи</div>
                  <div className="btn-show">
                    <div className="text-account">
                      {visibleField === "dateOfIssue"
                        ? data.dateOfIssue
                        : hideData(data.dateOfIssue)}
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
                    <button onClick={() => copyToClipboard(data.dateOfIssue)}>
                      <img src={IconCopy} alt="Copy" />
                    </button>
                  </div>
                </div>
                <div className="dateOfBirth column-account">
                  <div className="title-account">Дата рождения</div>
                  <div className="text-account">{data.dateOfBirth}</div>
                </div>
              </div>
              <div className="column-line">
                <div className="unitCode column-account">
                  <div className="title-account">Код подраздаления</div>
                  <div className="btn-show">
                    <div className="text-account">
                      {visibleField === "unitCode"
                        ? data.unitCode
                        : hideData(data.unitCode)}
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
                    <button onClick={() => copyToClipboard(data.unitCode)}>
                      <img src={IconCopy} alt="Copy" />
                    </button>
                  </div>
                </div>
                <div className="placeOfBirth column-account">
                  <div className="title-account">Место рождения</div>
                  <div className="text-account">{data.placeOfBirth}</div>
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
                    <div className="text-account">{data.serviceNumber}</div>
                    <button onClick={() => copyToClipboard(data.serviceNumber)}>
                      <img src={IconCopy} alt="Copy" />
                    </button>
                  </div>
                </div>
                <div className="gender column-account">
                  <div className="title-account">Группа</div>
                  <div className="text-account">{data.group}</div>
                </div>
                <div className="citizenship column-account">
                  <div className="title-account">Пароль</div>
                  <div className="btn-show">
                    <div className="text-account">
                      {visibleField === "password"
                        ? data.password
                        : hidePassword(data.password)}
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
                </div>
              </div>
              <div className="column-line">
                <div className="dateOfIssue column-account">
                  <div className="title-account">ИНН</div>
                  <div className="btn-show">
                    <div className="text-account">
                      {visibleField === "inn" ? data.inn : hideData(data.inn)}
                    </div>
                    <button img={Show} onClick={() => toggleVisibility("inn")}>
                      {visibleField === "inn" ? (
                        <img src={Show}></img>
                      ) : (
                        <img src={Hide}></img>
                      )}
                    </button>
                    <button onClick={() => copyToClipboard(data.inn)}>
                      <img src={IconCopy} alt="Copy" />
                    </button>
                  </div>
                </div>
                <div className="dateOfBirth column-account">
                  <div className="title-account">Направление обучения</div>
                  <div className="text-account">{data.directionOfStudy}</div>
                </div>
              </div>
              <div className="column-line">
                <div className="unitCode column-account">
                  <div className="title-account">СНИЛС</div>
                  <div className="btn-show">
                    <div className="text-account">
                      {visibleField === "snils"
                        ? data.snils
                        : hideData(data.snils)}
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
                    <button onClick={() => copyToClipboard(data.snils)}>
                      <img src={IconCopy} alt="Copy" />
                    </button>
                  </div>
                </div>
                <div className="citizenship column-account">
                  <div className="title-account">Электронная почта</div>
                  <div className="text-account">{data.mail}</div>
                </div>
              </div>
            </div>
          </div>
          <input type="text"
              value={editMail}
              onChange={(e) => setEditMail(e.target.value)}></input>
          <button onClick={handleEditMail}>Редактировать</button>
        </div>
      </div>
    </div>
  );
};

export default PersonalAccount;
