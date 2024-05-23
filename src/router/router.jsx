import { Route, Routes } from "react-router-dom";
import { privateRoutesAdmin, privateRoutesUser, publicRoutes } from ".";
import { useDispatch, useSelector  } from 'react-redux';

export const useRoutes = () => {
  const { isAuth } = useSelector(state => state.auth);
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
};

export default useRoutes;
