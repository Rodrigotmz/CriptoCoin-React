import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './CriptoInfo.css';
import CriptoImg from "./CriptoImg";

const reqAxios = {
    baseURL: import.meta.env.VITE_API_URL,
    url: 'assets',
    method: 'get',
    params: {
        apiKey: import.meta.env.VITE_API_KEY,
        ids: ''
    },
    headers: { 'Content-Type': 'application/json' },
    responseType: 'json'
}

const CriptoInfo = () => {
    const [criptoInf, setCriptoInf] = useState({});
    const params = useParams();
    reqAxios.params.ids = params.id;
    useEffect(() => {
        const criptoInfo = async () => {
            try {
                const request = await axios(reqAxios);
                const data = await request.data.data;
                setCriptoInf(data[0]);
                console.log(data[0])
            }
            catch (ex) {
                console.error(ex)
            }
        }
        criptoInfo();
    }, []);
    const formatMoney = (value, currency = 'USD') => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency
        }).format(value);
    };
    return (
        <>
            <div className="main-cripto-container">
                <div className="cripto-header-container">
                    <div className="rank-logo">
                        <div className="rank-column">
                            <h1>{criptoInf.rank}</h1>
                            <p>rank</p>
                        </div>
                    </div>
                    <div className="cr-hd-info">
                        <div>
                            <h1>{criptoInf.name}</h1>
                        </div>
                        <div className="cr-hd-inf-content">
                            <p><span>Symbol:</span> ({criptoInf.symbol})</p>
                            <p><span>Price (USD):</span> {formatMoney(parseFloat(criptoInf.priceUsd).toFixed(3))}</p>
                            <p><span>Market Cap (USD):</span> {formatMoney(parseFloat(criptoInf.marketCapUsd).toFixed(3))}</p>
                            <p><span>Market Cap (USD):</span> {formatMoney(parseFloat(criptoInf.marketCapUsd).toFixed(3))}</p>
                            <p><span>Market Cap (USD):</span> {formatMoney(parseFloat(criptoInf.marketCapUsd).toFixed(3))}</p>
                            <p><span>Market Cap (USD):</span> {formatMoney(parseFloat(criptoInf.marketCapUsd).toFixed(3))}</p>
                        </div>

                    </div>
                </div>
                <div className="img-container-cripto">
                    <CriptoImg name={criptoInf.name} symbol={criptoInf.symbol} />
                </div>
                <div className="history-container-cripto">

                </div>
            </div>
        </>
    );
}

export default CriptoInfo;