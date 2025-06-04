import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/helps/404.jsx';
import GridCripto from './components/cripto/GridCripto';
import CriptoInfo from './components/cripto/CriptoInfo'
import Home from './components/Home'
import { UserContextProvider } from './components/context/UserContext.jsx';
import Perfil from './components/user/Perfil.jsx';
import Login from './components/user/Login';

createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Home />} />
                    <Route path='perfil' element={ <Perfil/> }/>
                </Route>
                <Route path='/criptos' element={<App />}>
                    <Route index element={<GridCripto />} />
                    <Route path=':id' element={<CriptoInfo />} />
                </Route>
                <Route path='/Login' element={ <Login/> }/>
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    </UserContextProvider>
)
