import Main from "../pages/main-page/Main"
import Login from "../pages/login/Login"
import Quest from "../pages/question/Questions"
import ForgetPassword from "../pages/login/ForgetPassword"
import PersonalAccount from "../pages/user/personalAccount/PersonalAccount"
import ExecutionStatus from "../pages/user/execution-status/ExecutionStatus"
import ListOfStudents from "../pages/admin/list-users/ListOfStudents"
import ListOfEmploeeys from "../pages/admin/list-users/ListOfEmploeeys"
import ConfirmationCode from "../pages/login/ConfirmationCode"
import Services from "../pages/services-page/Services"
import StudentsAccount from "../pages/admin/list-users/StudentsAccount"
import EmploeeyAccount from '../pages/admin/list-users/EmploeeyAccount'
import NotDoneService from "../pages/admin/not-done-service/NotDoneService"
import CreateAService from "../pages/admin/create-service-page/CreateAService"
import ArhiveServices from "../pages/admin/arhive-page/ArhiveServices"
import ChangeAService from '../pages/admin/create-service-page/ChangeAService'

export const publicRoutes=[
    {path:"/main", element: <Main/>, exact: true},
    {path:"/login", element: <Login/>, exact: true},
    {path:"/question", element: <Quest/>, exact: true},
    {path:"/forgetPass", element: <ForgetPassword/>, exact: true},
    {path:"/code", element:<ConfirmationCode/>, exact: true},
    {path:"/services/:name", element:<Services/>, exact: true},
]

export const privateRoutesUser=[
    {path:"/mainUser", element: <Main/>, exact: true},
    {path:"/services/:name", element: <Services/>, exact: true},
    {path:"/questionUser", element: <Quest/>, exact: true},
    {path:"/account", element: <PersonalAccount/>, exact: true},
    {path:"/status", element: <ExecutionStatus/>, exact: true},
]
export const privateRoutesAdmin=[
    {path:"/mainAdmin", element: <Main/>, exact: true},
    {path:"/services/:name", element: <Services/>, exact: true},
    {path:"/question", element: <Quest/>, exact: true},
    {path:"/createService", element:<CreateAService/>, exact: true},
    {path:"/listOfEmploeeys", element: <ListOfEmploeeys/>, exact: true},
    {path:"/employee/:post", element: <EmploeeyAccount/>, exact: true},
    {path:"/listOfStudents", element: <ListOfStudents/>, exact: true},
    {path:"/students/:serviceNumber", element: <StudentsAccount/>, exact: true},
    {path:"/notDoneService", element: <NotDoneService/>, exact: true},
    {path:"/arhiveServices", element: <ArhiveServices/>, exact:true},
    {path:"/editService/:name", element: <ChangeAService/>, exact: true},
]



