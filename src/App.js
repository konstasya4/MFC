import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/header/Navbar'
import AppRouter from './router/router'
import { AuthContext, RoleContext } from './context';
import { useEffect, useState } from 'react';
import StateItem from './components/StateItem';

function App() {
const [posts, setPosts]=useState([
  {id:1, title:'JavaScript' ,body:'hdajcahghsgaj'},
  {id:1, title:'JavaScript' ,body:'hdajcahghsgaj'},
  {id:1, title:'JavaScript' ,body:'hdajcahghsgaj'},
  {id:1, title:'JavaScript' ,body:'hdajcahghsgaj'},
])

  const [isAuth, setIsAuth]= useState(false)
  const [isRole, setIsRole]= useState('')
  const [isLoading, setLoading] = useState(true);
  useEffect(()=>{
    if (localStorage.getItem('auth')){
      setIsAuth(true)
      if(localStorage.getItem('role')==='admin'){
        setIsRole('admin')
      }
      else if (localStorage.getItem('role')==='user'){
        setIsRole('user')
      }
    }
    setLoading(false);
  },
  [])
  return (
    <div className="App">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
      <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
        <RoleContext.Provider value={{ isRole, setIsRole }}>
          <BrowserRouter>
            <Navbar />
            <AppRouter />
          </BrowserRouter>
        </RoleContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;