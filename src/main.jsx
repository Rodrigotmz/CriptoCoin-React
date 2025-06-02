import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/helps/404.jsx';
import GridCripto from './components/cripto/GridCripto';
import CriptoInfo from './components/cripto/CriptoInfo'
import Home from './components/Home'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
            </Route>
            <Route path='/criptos' element={<App />}>
                <Route index element={<GridCripto />} />
                <Route path=':id' element={ <CriptoInfo /> }/>
            </Route>
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
)
