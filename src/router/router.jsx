import { Route, Routes } from "react-router-dom";
import { privateRoutesAdmin, privateRoutesUser, publicRoutes } from ".";
import { useContext } from "react";
import { AuthContext, RoleContext } from "../context";
import Services from "../pages/Services";
import { useDispatch, useSelector  } from 'react-redux';

export const useRoutes = () => {
  const { isAuth } = useSelector(state => state.auth); // Access isAuth state from Redux store
  const { isRole } = useSelector(state => state.auth);

  return isAuth ? (
    isRole === "admin" ? (
      <Routes>
        {privateRoutesAdmin.map((route) => (
          <Route
            exact={route.exact}
            path={route.path}
            element={route.element}
            key={route.path}
          />
        ))}
      </Routes>
    ) : (
      <Routes>
        {/* <Route path="/services/:id" element={<Services />} /> */}
        {privateRoutesUser.map((route) => (
          <Route
            exact={route.exact}
            path={route.path}
            element={route.element}
            key={route.path}
          />
        ))}
      </Routes>
    )
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          exact={route.exact}
          path={route.path}
          element={route.element}
          key={route.path}
        />
      ))}
    </Routes>
  );

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
};

export default useRoutes;
