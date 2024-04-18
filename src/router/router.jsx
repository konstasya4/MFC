import { Route, Routes } from 'react-router-dom';
import { privateRoutesAdmin, privateRoutesUser, publicRoutes } from '.';
import { useContext } from 'react';
import { AuthContext, RoleContext } from '../context';
import Services from '../pages/Services';


export const useRoutes = () => {
const {isAuth, setIsAuth} = useContext(AuthContext);
const {isRole, setIsRole} = useContext(RoleContext);

    return (
      isAuth ?
      isRole==='admin' ?
      <Routes>
      {privateRoutesAdmin.map(route =>
        <Route exact={route.exact}
          path={route.path}
          element={route.element}
          key={route.path} />
      )}
       </Routes>
      :
      <Routes>
      <Route path="/services/:id" element={<Services />} />
      {privateRoutesUser.map(route =>
        <Route exact={route.exact}
          path={route.path}
          element={route.element}
          key={route.path} />
      )}
    </Routes>
    :
    <Routes>
    <Route path="/services/:id" element={<Services />} />
    {publicRoutes.map(route =>
      <Route exact={route.exact}
        path={route.path}
        element={route.element} 
        key={route.path}/>
    )}
  </Routes>
      // <BrowserRouter>
      // <Routes>
      //   <Route index element={<Main />} />
      //   <Route path="/main" element={<Main />} />
      //   <Route path="/login" element={<Login />} />
      //   <Route path="/question" element={<Quest />} />
      //   <Route path='/services' element={<Service/>}/>
        
      //   <Route element={<PrivateRoute />}>
      //     <Route path='/admin' element={<Admin />} />
      //     {/* <Route path="/logout" element={<Logout />} /> */}
      //   </Route>
      //   <Route path='*' element={<Error/>}/>
  
      // </Routes>
      // </BrowserRouter>
    )
  }
  
  export default useRoutes
  