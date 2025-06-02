import { Outlet } from 'react-router-dom';
import './App.css'
import GridCripto from './cripto/GridCripto';
import Menu from './menu/Menu';

const App = () => {
  return (
    <div>
      <Menu />
      <Outlet/>
    </div>
  )
}

export default App;
