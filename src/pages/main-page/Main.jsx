import "./MainStyle.css";
import InputComponent from "../../components/input-component/InputComponent";
import CertificatePostponement from "./images/CertificatePostponement.png";
import SwitchingFromPaidToFree from "./images/SwitchingFromPaidToFree.png";
import CertificatePlaceOfStudy from "./images/CertificatePlaceOfStudy.png";
import CertificatePlaceOfWork from "./images/CertificatePlaceOfWork.png";
import CertificateAmountScholarship from "./images/CertificateAmountScholarship.png";
import Certificate2NDFL from "./images/Certificate2NDFL.png";
import TransferAndRestoration from "./images/TransferAndRestoration.png";
import { useState, useEffect } from "react";
import CertificateList from "../../components/main-services/CertificateList";
import OurWebsite from "./images/OurWebsite.png";
import NavbarLeft from "../../components/Navbar/leftNavbar/NavbarLeft";
import ServiceService from "../../services/ServiceService";
import {
  CertificatePlaceOfWorkURL,
  CertificatePostponementURL,
  CertificatePlaceOfStudyURL,
  CertificateAmountScholarshipURL,
  Certificate2NDFLURL,
  TransferAndRestorationURL,
  SwitchingFromPaidToFreeURL,
} from "../../utils/servicesURL";

const Main = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await ServiceService.fetchServiceList();
      setServices(response.data.services);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div className="main-navbar">
      <div>
        <NavbarLeft />
      </div>
      <div className="main-services">
        <InputComponent className="input" placeholder="Поиск услуг" />
        <div className="popular-services">Популярные услуги</div>
        <ul className="services">
          <div className="first-line">
            <li className="line-li">
              <button className="btn-service">
                <a href={CertificatePostponementURL}>
                  <img
                    src={CertificatePostponement}
                    alt="Справка для оформления отсрочки от призыва в ВС РФ"
                  />
                </a>
              </button>
            </li>
            <li className="line-li">
              <button className="btn-service">
                <a href={CertificatePlaceOfWorkURL}>
                  <img
                    src={CertificatePlaceOfWork}
                    alt="Справка с места работы"
                  />
                </a>
              </button>
            </li>
            <li>
              <button className="btn-service">
                <a href={CertificatePlaceOfStudyURL}>
                  <img
                    src={CertificatePlaceOfStudy}
                    alt="Справка с места учебы"
                  />
                </a>
              </button>
            </li>
          </div>
          <div className="second-line">
            <li className="line-li">
              <button className="btn-service">
                <a href={CertificateAmountScholarshipURL}>
                  <img
                    src={CertificateAmountScholarship}
                    alt="Справка о размере стипендии"
                  />
                </a>
              </button>
            </li>
            <li className="line-li">
              <button className="btn-service">
                <a href={Certificate2NDFLURL}>
                  <img src={Certificate2NDFL} alt="Справка 2НДФЛ" />
                </a>
              </button>
            </li>
            <li>
              <button className="btn-service">
                <a href={TransferAndRestorationURL}>
                  <img
                    src={TransferAndRestoration}
                    alt="Перевод и восстановление для граждан РФ"
                  />
                </a>
              </button>
            </li>
          </div>
          <div className="third-line">
            <li>
              <button className="btn-service-third">
                <a href={SwitchingFromPaidToFreeURL}>
                  <img
                    src={SwitchingFromPaidToFree}
                    alt="Переход с платного обучения на бесплатное"
                  />
                </a>
              </button>
            </li>
          </div>
        </ul>
        <div className="all-services">Все услуги</div>

        <div id="issuanceOfCertificates" className="issuanceOfCertificates">
          Выдача справок и копий документов
        </div>
        <div className="services-start">
          <div className="cert-main">
            <CertificateList
              className="service-post"
              services={services.filter((service) => service.type === 0)}
            />
          </div>
          <div className="btnOurWebsite">
            <a
              href="https://rut-miit.ru/depts/26467?ysclid=luv1syvxkm277788766"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-service-third">
                <img src={OurWebsite} alt="" />
              </button>
            </a>
          </div>
        </div>
        <div id="formsForEmployees" className="issuanceOfCertificates">
          Бланки документов для обучающихся
        </div>
        <div className="cert-main">
          <CertificateList
            className="service-post"
            services={services.filter((service) => service.type === 1)}
          />
        </div>
        <div id="formsForStudents" className="issuanceOfCertificates">
          Бланки документов для работников
        </div>
        <div className="cert-main">
          <CertificateList
            className="service-post"
            services={services.filter((service) => service.type === 2)}
          />
        </div>
        <div id="translationAndRestoration" className="issuanceOfCertificates">
          Перевод и восстановление
        </div>
        <div className="cert-main">
          <CertificateList
            className="service-post"
            services={services.filter((service) => service.type === 3)}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
