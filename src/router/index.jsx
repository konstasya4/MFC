import Main from "../pages/Main"
import Login from "../pages/Login"
import Quest from "../pages/Quentions"
import ForgetPassword from "../pages/ForgetPassword"
import Error from "../pages/Error"
import Account from "../pages/user/PersonalAccount"
import ExecutionStatus from "../pages/user/ExecutionStatus"
import Admin from "../pages/admin/AdminAccount"
import ListOfStudents from "../pages/admin/ListOfStudents"
import ListOfTeachers from "../pages/admin/ListOfTeachers"
import Statements from "../pages/admin/Statements"
import ConfirmationCode from "../pages/ConfirmationCode"

export const publicRoutes=[
    {path:"/main", element: <Main/>, exact: true},
    {path:"/login", element: <Login/>, exact: true},
    {path:"/question", element: <Quest/>, exact: true},
    {path:"/forgetPass", element: <ForgetPassword/>, exact: true},
    {path:"/code", element:<ConfirmationCode/>, exact: true}
    // {path:"*", element: <Main/>, exact: true},
]

export const privateRoutesUser=[
    {path:"/mainUser", element: <Main/>, exact: true},
    {path:"/account", element: <Account/>, exact: true},
    {path:"/questionUser", element: <Quest/>, exact: true},
    // {path:"/servicesUser", element: <Service/>, exact: true},
    {path:"/status", element: <ExecutionStatus/>, exact: true},
    // {path:"*", element: <Main/>, exact: true},
]
export const privateRoutesAdmin=[
    {path:"/mainAdmin", element: <Main/>, exact: true},
    {path:"/admin", element: <Admin/>, exact: true},
    {path:"/listOfStudents", element: <ListOfStudents/>, exact: true},
    {path:"/listOfTeachers", element: <ListOfTeachers/>, exact: true},
    {path:"/statements", element: <Statements/>, exact: true},
    // {path:"*", element: <Admin/>, exact: true},
]



