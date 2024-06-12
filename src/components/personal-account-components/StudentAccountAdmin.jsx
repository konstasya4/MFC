import { useState, useEffect } from "react";
import UserService from "../../services/UserService";
import PersonalDataActive from "./images/PersonalDataActive.png";
import Show from "./images/Show.png";
import Hide from "./images/Hide.png";
import IconCopy from "./images/IconCopy.png";
import ButtonComponent from "../button-component/ButtonComponent";
import { useParams } from "react-router-dom";
import "./AccountStyle.css";
const StudentsAccountAdmin = () => {
  const { serviceNumber } = useParams();
  const [student, setStudent] = useState({});
  const [visibleField, setVisibleField] = useState(null);
  const [editMail, setEditMail] = useState(null);
  const [editing, setEditing] = useState(true);

  useEffect(() => {
    const fetchService = async (serviceNumber) => {
      try {
        const response = await UserService.fetchStudent(serviceNumber);
        setStudent(response.data);
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    };
    fetchService(serviceNumber);
  }, [serviceNumber]);

  const toggleVisibility = (field) => {
    setVisibleField(visibleField === field ? null : field);
  };

  const hideData = (data) => {
    if (!data) return "";
    const firstChar = data.substring(0, 1);
    const lastChar = data.substring(data.length - 1);
    const hiddenPart = "*".repeat(data.length - 2);
    return firstChar + hiddenPart + lastChar;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleInputChange = (event) => {
    setEditMail(event.target.value);
    setEditMail(student.email);
  };
  const changingEditing = () => {
    setEditing(!editing);
  };

  const passportData = () => {
    return student
      ? `${student.passport?.series} ${student.passport?.number}`
      : null;
  };
  return (
    <div>
      <div className="name-person horiz-line">
        <div className="avatarAccount">
          <img src={PersonalDataActive} />
        </div>
        <div className="name-line">
          <div className="fio">{student.name?.second}</div>
          <div className="name-second-line horiz-line">
            <div className="fio">{student.name?.first}</div>
            <div className="fio midleName">{student.name?.middle}</div>
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
                  <button onClick={() => copyToClipboard(passportData())}>
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
              <div className="text-account">
                {student.passport?.citizenship}
              </div>
            </div>
          </div>
          <div className="column-line">
            <div className="dateOfIssue column-account">
              <div className="title-account">Дата выдачи</div>
              {editing ? (
                <div className="btn-show">
                  <div className="text-account">
                    {visibleField === "dateOfIssue"
                      ? student.passport?.dateOfIssue
                      : hideData(student.passport?.dateOfIssue)}
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
                  <button
                    onClick={() =>
                      copyToClipboard(student.passport?.dateOfIssue)
                    }
                  >
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
              <div className="text-account">
                {student.passport?.dateOfBrith}
              </div>
            </div>
          </div>
          <div className="column-line">
            <div className="unitCode column-account">
              <div className="title-account">Код подраздаления</div>
              {editing ? (
                <div className="btn-show">
                  <div className="text-account">
                    {visibleField === "unitCode"
                      ? student.passport?.unitCode
                      : hideData(student.passport?.unitCode)}
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
                  <button
                    onClick={() => copyToClipboard(student.passport?.unitCode)}
                  >
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
              <div className="text-account">
                {student.passport?.placeOfBrith}
              </div>
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
                <button img={Show} onClick={() => toggleVisibility("snils")}>
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
              <div className="text-account">{student.email}</div>
            </div>
          </div>
        </div>
      </div>
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
  );
};
export default StudentsAccountAdmin;
