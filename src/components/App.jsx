import { Outlet } from 'react-router-dom';
import './App.css'
import Menu from './menu/Menu';
import Loader from './helps/loader';
import { useEffect, useState } from 'react';
import { useNavigate, Navigate } from "react-router-dom";

const App = () => {

  if (!localStorage.getItem("tokenReq")) return <Navigate to='/login' />
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    const timeLoader = setTimeout(() => {
      setCargando(false); // Oculta loader después de 2 segundos (ejemplo)
    }, 2000);

    return () => clearTimeout(timeLoader);
  }, []);

  if (cargando) return <Loader />; 
  return (
    <div>
      <Menu />
      <Outlet/>
    </div>
  )
}

export default App;
