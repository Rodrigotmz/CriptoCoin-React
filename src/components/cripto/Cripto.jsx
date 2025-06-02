
import './Cripto.css';
import CriptoImg from './CriptoImg';
import { Link } from 'react-router-dom';

const Cripto = ({ id, name, priceUsd, symbol, rank, volumeUsd24Hr, changePercent24Hr }) => {
    return (
        <div className="cripto-card">
            <h3 className='title'>{name}</h3>
            <CriptoImg name={name} symbol={symbol} />
            <div className="info">
                <p>
                    <span className='label'>Rank: </span> 
                    {rank}
                </p>
                <p> 
                    <span className="label">Precio: </span> 
                    {Number(priceUsd).toFixed(2)} 
                </p>
                <p>
                    <span className='label'>Volume Usd 24Hr: </span> 
                    {Number(volumeUsd24Hr).toFixed(2)} 
                </p>
                <p>
                    <span className='label'>Variación 24hrs: </span>
                    <span className={parseFloat(changePercent24Hr) > 0 ? 'positive' : 'negative' }>
                        {parseFloat(changePercent24Hr).toFixed(3) }%
                    </span>
                </p>
                <Link to={`/criptos/${id}`} className='button-plus'>Ver mas..</Link>
            </div>
        </div>
    );
}

export default Cripto;