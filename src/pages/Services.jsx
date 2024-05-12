// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import StatementList from "../API/StatementList";
// import NavbarLeft from "../components/Navbar/leftNavbar/NavbarLeft";
// import '../styles/ServiceStyle.css'
// import MainButton from "../components/ButtonComponent";
// import Download from "../images/Download.png"
// import ServiceService from "../services/ServiceService"

// const Services = () => {
//     const { name } = useParams();
//     const [service, setService] = useState({}); // Устанавливаем начальное значение в пустой объект
//     const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки данных

//     useEffect(() => {
//         const fetchService = async () => {
//             try {
//                 const response = await ServiceService.fetchServiceItem(name);
//                 setService(response.data);
//                 setLoading(false); // Устанавливаем состояние загрузки в false после получения данных
//             } catch (error) {
//                 console.error('Error fetching service:', error);
//             }
//         };
//         fetchService();
//     }, [name]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//       <div className="service-page">
//         <NavbarLeft />
//         <div className="service-text">
//           <div className="title-service">{service.name}</div>
//           <div className="about-service">Об услуге</div>
//           <div className="description-service">{service.description}</div>
//         </div>
//         <div className="serv-down">
//           <div className="btn-serv">
//             <MainButton className="btn-style" name="Получить услугу" />
//           </div>
//           {(service.type===1 || service.type===2) &&
//           (<button className="download-text">
//             <div>Скачать ПДФ</div>
//             <img src={Download} alt=""></img>
//           </button>)}
//         </div>
//       </div>
//     );
// };

// export default Services;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StatementList from "../API/StatementList";
import NavbarLeft from "../components/Navbar/leftNavbar/NavbarLeft";
import '../styles/ServiceStyle.css'
import MainButton from "../components/ButtonComponent";
import Download from "../images/Download.png"
import ServiceService from "../services/ServiceService"
import ModalAuth from '../components/modalWindow/ModalAuth'; // Импортируем компонент модального окна
import { useSelector } from "react-redux";
import ModalOrderingService from '../components/modalWindow/ModalOrderingService'

const Services = () => {
    const { name } = useParams();
    const { isAuth } = useSelector(state => state.auth);
    const { isRole } = useSelector(state => state.auth);
    // const history = useHistory();
    const [service, setService] = useState({}); // Устанавливаем начальное значение в пустой объект
    const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки данных
    const [modalOpen, setModalOpen] = useState(false); // Состояние модального окна

    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await ServiceService.fetchServiceItem(name);
                setService(response.data);
                setLoading(false); // Устанавливаем состояние загрузки в false после получения данных
            } catch (error) {
                console.error('Error fetching service:', error);
            }
        };
        fetchService();
    }, [name]);

    // Функция для обработки нажатия кнопки "Получить услугу"
    const handleGetService = () => {
        // Проверяем, авторизован ли пользователь
        // console.log("isAuth", isAuth)
        // const isAuthenticated = isAuth/* Ваш код проверки авторизации пользователя */;
        // console.log("isAuthenticated", isAuthenticated)
        // if (!isAuthenticated) {
            // Если пользователь не авторизован, открываем модальное окно
            setModalOpen(true);
        // } else {
        //     // Если пользователь авторизован, выполните действия, необходимые для получения услуги
        //     /* Ваш код для получения услуги */;
        // }
    };

    // Функция для закрытия модального окна
    const handleCloseModal = () => {
        setModalOpen(false);
        // Перенаправляем пользователя на страницу авторизации
        // history.push('/login');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
      <div className="service-page">
        <NavbarLeft />
        <div className="service-text">
          <div className="title-service">{service.name}</div>
          <div className="about-service">Об услуге</div>
          <div className="description-service">{service.description}</div>
        </div>
        <div className="serv-down">
          <div className="btn-serv">
            <MainButton className="btn-style" name="Получить услугу" onClick={handleGetService} />
          </div>
          {(service.type===1 || service.type===2) &&
          (<button className="download-text">
            <div>Скачать ПДФ</div>
            <img src={Download} alt=""></img>
          </button>)}
        </div>
        {!isRole?
        <ModalAuth isOpen={modalOpen} onClose={handleCloseModal}/>:
        <ModalOrderingService isOpen={modalOpen} onClose={handleCloseModal}/>
        }
      </div>
    );
};

export default Services;
