import reactLogo from './assets/react.svg';
import './App.css'
import { useEffect, useState } from 'react'; 
import axios from 'axios';

const reqAxios = {
  baseURL: 'https://rest.coincap.io/v3/assets',
  method: 'get',
  params: {
    apiKey: ""
  },
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json'
}



const App = () => {

    const [crypts, setCrypts] = useState()

  useEffect(() => {
    const request = async () =>{
      try {
        const req = await axios(reqAxios);
        setCrypts(req.data.data);
      }
      catch (ex) {
        console.log(ex)
      }
    }
    request();
  }, [])

  if(!crypts) return <><span className='loader'>Cargando...</span></>

  return (
    <section>
      <h1>Lista de criptomonedas</h1>
      <ol>
        {crypts.map(({ name, priceUsd }) => (
          <li> Nombre: {name} Price Ud: { Number(priceUsd).toFixed(2) }</li>
        )) }
      </ol>
    </section>
  )
}

export default App;
