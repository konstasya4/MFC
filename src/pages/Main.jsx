import '../styles/MainStyle.css';
import '../styles/componentsStyles/InputComponentStyle.css';
import { useContext } from "react";
import { AuthContext } from "../context";
import { RoleContext } from "../context";
import InputComponent from "../components/InputComponent";
import AdminLeftNavbar from "../components/Navbar/leftNavbar/AdminLeftNavbar"
import UserServicesNavbar from "../components/Navbar/leftNavbar/UserServicesNavbar"
import CertificatePostponement from "../images/Services/CertificatePostponement.png"
import SwitchingFromPaidToFree from '../images/Services/SwitchingFromPaidToFree.png'
import CertificatePlaceOfStudy from '../images/Services/CertificatePlaceOfStudy.png'
import CertificatePlaceOfWork from '../images/Services/CertificatePlaceOfWork.png'
import CertificateAmountScholarship from '../images/Services/CertificateAmountScholarship.png'
import Certificate2NDFL from '../images/Services/Certificate2NDFL.png'
import TransferAndRestoration from '../images/Services/TransferAndRestoration.png'
import  { useState, useEffect } from 'react';
import StatementList from "../API/StatementList";
import CertificateList from "../components/main-services/CertificateList";
import OurWebsite from "../images/Services/OurWebsite.png"
// import { Link } from 'react-router-dom';
import NavbarLeft from '../components/Navbar/leftNavbar/NavbarLeft'



const Main = () => {
const {isAuth} = useContext(AuthContext);
const {isRole} = useContext(RoleContext);
const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const responce = await StatementList.getAll();
            setPosts([...responce])
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };
    console.log(posts)
  console.log(window.location.pathname);
  return (
    <div className="main-navbar">
      <div>
      <NavbarLeft/>
      </div>
      <div className="main-services">
        {/* <div className="input-main"> */}
          <InputComponent className="input" placeholder="Поиск услуг" />
        {/* </div> */}
        <div className="popular-services">Популярные услуги</div>
        <ul className="services">
          <div className="first-line">
            <li className="line-li">
              <button className="btn-service">
                <img src={CertificatePostponement} alt="" />
              </button>
            </li>
            <li className="line-li">
              <button className="btn-service">
                <img src={CertificatePlaceOfWork} alt="" />
              </button>
            </li>
            <li>
              <button className="btn-service">
                <img src={CertificatePlaceOfStudy} alt="" />
              </button>
            </li>
          </div>
          <div className="second-line">
            <li className="line-li">
              <button className="btn-service">
                <img src={CertificateAmountScholarship} alt="" />
              </button>
            </li>
            <li className="line-li">
              <button className="btn-service">
                <img src={Certificate2NDFL} alt="" />
              </button>
            </li>
            <li>
              <button className="btn-service">
                <img src={TransferAndRestoration} alt="" />
              </button>
            </li>
          </div>
          <div className="third-line">
            <li>
              <button className="btn-service-third">
                <img src={SwitchingFromPaidToFree} alt="" />
              </button>
            </li>
          </div>
        </ul>
        <div className="all-services">Все услуги</div>

        <div id='issuanceOfCertificates' className="issuanceOfCertificates">
          Выдача справок и копий документов
        </div>
        <div className="services-start">
          <div className='cert-main'><CertificateList className="ps" posts={posts} /></div>
          <div className='btnOurWebsite'>
            <a href="https://rut-miit.ru/depts/26467?ysclid=luv1syvxkm277788766" target="_blank" rel="noopener noreferrer"><button className="btn-service-third">
              <img src={OurWebsite} alt="" />
            </button></a>
            
          </div>
        </div>
        <div id='formsForEmployees' className="issuanceOfCertificates">
        Бланки документов для работников
        </div>
        <div className='cert-main'><CertificateList className="ps" posts={posts} /></div>
        <div id='formsForStudents' className="issuanceOfCertificates">
        Бланки документов для обучающихся
        </div>
        <div className='cert-main'><CertificateList className="ps" posts={posts} /></div>
        <div id='translationAndRestoration' className="issuanceOfCertificates">
        Перевод и восстановление
        </div>
        <div className='cert-main'><CertificateList className="ps" posts={posts} /></div>
      </div>
    </div>
  );
}

export default Main;
