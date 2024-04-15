import Certificate from '../../../images/Certificate.png';
const ServicesNavbar=()=>{
  return (
    <div className="nav-left">
      <ul className="ul-left">
        <li className="li-left">
        <img className="img-nav" src={Certificate} />
          <a href="#issuanceOfCertificates">Справки и копии документов</a>
        </li>
        <li className="li-left">
        <img className="img-nav" src={Certificate} />
          <a href="#formsForEmployees">Бланки документов для работников</a>
        </li>
        <li className="li-left">
        <img className="img-nav" src={Certificate} />
          <a href="#formsForStudents">Бланки документов для обучающихся</a>
        </li>
        <li className="li-left">
        <img className="img-nav" src={Certificate} />
          <a href="#translationAndRestoration">Перевод и восстановление</a>
        </li>
      </ul>
    </div>
  );
}
export default ServicesNavbar;