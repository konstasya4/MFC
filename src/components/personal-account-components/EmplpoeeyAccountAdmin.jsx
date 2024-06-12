import { useState, useEffect } from "react";
import UserService from "../../services/UserService";
import PersonalDataActive from "./images/PersonalDataActive.png";
import Show from "./images/Show.png";
import Hide from "./images/Hide.png";
import IconCopy from "./images/IconCopy.png";
import ButtonComponent from "../button-component/ButtonComponent";
import { useParams } from "react-router-dom";
import "./AccountStyle.css";
const EmploeeyAccountAdmin = () => {
  const { post } = useParams();
  const [employee, setEmployee] = useState({});
  const [visibleField, setVisibleField] = useState(null);
  const [editMail, setEditMail] = useState(null);
  const [editing, setEditing] = useState(true);

  useEffect(() => {
    const fetchPersonalData = async (post) => {
      try {
        const response = await UserService.fetchEmployee(post);
        console.log(response);
        setEmployee(response.data[0]);
        console.log("shajhd", employee);
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    };
    fetchPersonalData(post);
  }, [post]);

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
    setEditMail(employee.mail);
  };
  const changingEditing = () => {
    setEditing(!editing);
  };

  const passportData = () => {
    return employee
      ? `${employee.passport?.series} ${employee.passport?.number}`
      : null;
  };
  return (
    <div>
      <div className="name-person horiz-line">
        <div className="avatarAccount">
          <img src={PersonalDataActive} />
        </div>
        <div className="name-line">
          <div className="fio">{employee.name?.second}</div>
          <div className="name-second-line horiz-line">
            <div className="fio">{employee.name?.first}</div>
            <div className="fio midleName">{employee.name?.middle}</div>
          </div>
        </div>
      </div>
      <div className="passport-data-container">
        <div className="title-container">Паспортные данные</div>
        <div className="table-pass">
          <div>
            {employee && (
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
            )}

            <div className="gender column-account">
              <div className="title-account">Пол</div>
              <div className="text-account">{employee.gender}</div>
            </div>
            <div className="citizenship column-account">
              <div className="title-account">Гражданство</div>
              <div className="text-account">
                {employee.passport?.citizenship}
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
                      ? employee.dateOfIssue
                      : hideData(employee.passport?.dateOfIssue)}
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
                      copyToClipboard(employee.passport?.dateOfIssue)
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
                {employee.passport?.dateOfBrith}
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
                      ? employee.unitCode
                      : hideData(employee.passport?.unitCode)}
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
                    onClick={() => copyToClipboard(employee.passport?.unitCode)}
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
                {employee.passport?.placeOfBrith}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="students-data-container">
        <div className="title-container">Данные о работнике</div>
        <div className="table-pass">
          <div className="first-columns">
            <div className="dateOfIssue column-account">
              <div className="title-account">ИНН</div>
              <div className="btn-show">
                <div className="text-account">
                  {visibleField === "inn"
                    ? employee.inn
                    : hideData(employee.inn)}
                </div>
                <button img={Show} onClick={() => toggleVisibility("inn")}>
                  {visibleField === "inn" ? (
                    <img src={Show}></img>
                  ) : (
                    <img src={Hide}></img>
                  )}
                </button>
                <button onClick={() => copyToClipboard(employee.inn)}>
                  <img src={IconCopy} alt="Copy" />
                </button>
              </div>
            </div>
            <div className="passportData column-account">
              <div className="title-account">Институт</div>
              <div className="btn-show">
                <div className="text-account">{employee.institute}</div>
              </div>
            </div>
          </div>
          <div className="column-line">
            <div className="unitCode column-account">
              <div className="title-account">СНИЛС</div>
              <div className="btn-show">
                <div className="text-account">
                  {visibleField === "snils"
                    ? employee.snils
                    : hideData(employee.snils)}
                </div>
                <button img={Show} onClick={() => toggleVisibility("snils")}>
                  {visibleField === "snils" ? (
                    <img src={Show}></img>
                  ) : (
                    <img src={Hide}></img>
                  )}
                </button>
                <button onClick={() => copyToClipboard(employee.snils)}>
                  <img src={IconCopy} alt="Copy" />
                </button>
              </div>
            </div>
            <div className="citizenship column-account">
              <div className="title-account">Электронная почта</div>
              <div className="text-account">{employee.email}</div>
            </div>
          </div>
          <div className="column-line">
            <div className="unitCode column-account">
              <div className="title-account">Должность</div>
              <div className="text-account">{employee.post}</div>
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
export default EmploeeyAccountAdmin;
