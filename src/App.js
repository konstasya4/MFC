import './App.css';
import Navbar from './components/Navbar/header/Navbar';
import AppRouter from './router/router';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser, setLoading } from './redux/authReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    const role = localStorage.getItem('role');
    if (auth && role) {
      dispatch(loginUser({ succeeded: JSON.parse(auth), role }));
    }
    dispatch(setLoading(false));
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
