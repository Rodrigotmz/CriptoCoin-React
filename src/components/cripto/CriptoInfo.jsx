import { useParams } from "react-router-dom";
import './CriptoInfo.css';
import CriptoImg from "./CriptoImg";
import History from "./CriptoHistory";
import { parseFloatNumber, formatMoney, validatePositive } from '../../utils/numbers';
import usePetition from '../../hooks/usePetition';
import Loader from "../helps/loader";

const CriptoInfo = () => {
    const params = useParams();
    const criptoData = usePetition(params.id);
    if (!criptoData) return <Loader />;
    const criptoInf = criptoData[0];
    return (
        <>
            {
                criptoInf && (<div className="main-cripto-container">
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
                                <p>
                                    <span className="sp">Symbol:</span> ({criptoInf.symbol})
                                </p>
                                <p>
                                    <span className="sp">Price (USD):</span>
                                    {formatMoney(parseFloatNumber(criptoInf.priceUsd, 3))}
                                </p>
                                <p>
                                    <span className="sp">Market Cap (USD):</span>
                                    {formatMoney(parseFloatNumber(criptoInf.marketCapUsd, 3))}
                                </p>
                                <p>
                                    <span className="sp">Change Percent 24Hr: </span>
                                    <span className={validatePositive(criptoInf.changePercent24Hr)}>
                                        {parseFloatNumber(criptoInf.changePercent24Hr, 3)}
                                    </span>
                                </p>
                                <p>
                                    <span className="sp">Supply: </span>
                                    {formatMoney(parseFloatNumber(criptoInf.supply, 3))}
                                </p>
                                <p>
                                    <span className="sp">VWap 24Hr:</span>
                                    {formatMoney(parseFloatNumber(criptoInf.vwap24Hr, 3))}
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="img-container-cripto">
                        <CriptoImg name={criptoInf.name} symbol={criptoInf.symbol} />
                    </div>
                    <div className="history-container-cripto">
                        <History id={criptoInf.id} />
                    </div>
                </div>)
            }
        </>
    );
}

export default CriptoInfo;