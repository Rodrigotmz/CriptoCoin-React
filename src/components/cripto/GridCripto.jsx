import { useEffect, useState } from 'react';
import axios from 'axios';
import Cripto from './Cripto';

const reqAxios = {
    baseURL: import.meta.env.VITE_API_URL,
    url: 'assets',
    method: 'get',
    params: {
        apiKey: import.meta.env.VITE_API_KEY
    },
    headers: { 'Content-Type': 'application/json' },
    responseType: 'json'
}

const GridCripto = () => {
    const [crypts, setCrypts] = useState()

    useEffect(() => {
        const request = async () => {
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

    if (!crypts) return <><span className='loader'>Cargando...</span></>
    return (
        <section>
            <h1>Lista de criptomonedas</h1>
            <div className='cripto-container'>
                {crypts.map(({ id, name, priceUsd, symbol, rank, volumeUsd24Hr, changePercent24Hr }) => (
                    <Cripto key={id} id={id} name={name} priceUsd={priceUsd} symbol={symbol} rank={rank} volumeUsd24Hr={volumeUsd24Hr} changePercent24Hr={changePercent24Hr} />
                ))}
            </div>
        </section>
    );

}

export default GridCripto;