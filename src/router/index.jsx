import Main from "../pages/Main"
import Login from "../pages/Login"
import Quest from "../pages/Quentions"
import ForgetPassword from "../pages/ForgetPassword"
import Error from "../pages/Error"
import PersonalAccount from "../pages/user/PersonalAccount"
import ExecutionStatus from "../pages/user/ExecutionStatus"
import Admin from "../pages/admin/AdminAccount"
import ListOfStudents from "../pages/admin/ListOfStudents"
import ListOfTeachers from "../pages/admin/ListOfTeachers"
import Statements from "../pages/admin/Statements"
import ConfirmationCode from "../pages/ConfirmationCode"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import Services from "../pages/Services"
import DoneServices from "../pages/user/DoneServices"
import StudentsAccount from "../pages/admin/StudentsAccount"
import { AuthContext, RoleContext } from "../context"
import TeacherAccount from '../pages/admin/TeacherAccount'
import NotDoneService from "../pages/admin/NotDoneService"
import CreateAService from "../pages/admin/CreateAService"
import ArhiveServices from "../pages/admin/ArhiveServices"


// const MainComponent = () => {
//     const navigate = useNavigate();
//     const {isAuth, setIsAuth} = useContext(AuthContext);
//     const {isRole, setIsRole} = useContext(RoleContext)
    
//     // Перенаправляем пользователя на '/main' при монтировании компонента
//     useEffect(() => {

//         if (isAuth){
//             if (isRole==="admin"){
//                 navigate('/mainAdmin');
//             }
//             else navigate('/mainUser');
//         }
//         else navigate('/main');
//     }, [navigate]);

  
//     // Возвращаем компонент <Main/>
//     return <Main/>;
//   };

export const publicRoutes=[
    {path:"/main", element: <Main/>, exact: true},
    {path:"/login", element: <Login/>, exact: true},
    {path:"/question", element: <Quest/>, exact: true},
    {path:"/forgetPass", element: <ForgetPassword/>, exact: true},
    {path:"/code", element:<ConfirmationCode/>, exact: true},
    {path:"/services/:name", element:<Services/>, exact: true},
    // {path:"*", element: <MainComponent/>, exact: true},
]

export const privateRoutesUser=[
    {path:"/mainUser", element: <Main/>, exact: true},
    {path:"/account", element: <PersonalAccount/>, exact: true},
    {path:"/questionUser", element: <Quest/>, exact: true},
    {path:"/services/:name", element: <Services/>, exact: true},
    {path:"/status", element: <ExecutionStatus/>, exact: true},
    {path:"/doneServices", element: <DoneServices/>, exact: true},
    // {path:"*", element: <MainComponent/>, exact: true},
]
export const privateRoutesAdmin=[
    {path:"/mainAdmin", element: <Main/>, exact: true},
    {path:"/admin", element: <Admin/>, exact: true},
    {path:"/services/:id", element: <Services/>, exact: true},
    {path:"/students/:serviceNumber", element: <StudentsAccount/>, exact: true},
    {path:"/employee/:post", element: <TeacherAccount/>, exact: true},
    {path:"/accountAdmin", element: <PersonalAccount/>, exact: true},
    {path:"/listOfStudents", element: <ListOfStudents/>, exact: true},
    {path:"/listOfTeachers", element: <ListOfTeachers/>, exact: true},
    {path:"/statements", element: <Statements/>, exact: true},
    {path:"/createService", element:<CreateAService/>, exact: true},
    {path:"/arhiveServices", element: <ArhiveServices/>, exact:true},
    // {path:"/students", element: <StudentsAccount/>, exact: true},
    // {path:"/teacher", element: <TeacherAccount/>, exact: true},
    {path:"/notDoneService", element: <NotDoneService/>, exact: true},
    // {path:"*", element: <MainComponent/>, exact: true},
]



