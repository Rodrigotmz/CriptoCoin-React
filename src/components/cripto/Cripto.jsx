import './Cripto.css';
import CriptoImg from './CriptoImg';
import { Link } from 'react-router-dom';
import { parseFloatNumber, validatePositive } from '../../utils/numbers';

const Cripto = ({ cripto }) => {
    return (
        <div className="cripto-card">
            <h3 className='title'>{ cripto.name }</h3>
            <CriptoImg name={cripto.name} symbol={cripto.symbol} />
            <div className="info">
                <p>
                    <span className='label'>Rank: </span> 
                    {cripto.rank}
                </p>
                <p> 
                    <span className="label">Precio: </span> 
                    {parseFloatNumber(cripto.priceUsd, 2)} 
                </p>
                <p>
                    <span className='label'>Volume Usd 24Hr: </span> 
                    {parseFloatNumber(cripto.volumeUsd24Hr, 3)} 
                </p>
                <p>
                    <span className='label'>Variación 24hrs: </span>
                    <span className={validatePositive(cripto.changePercent24Hr) }>
                        {parseFloatNumber(cripto.changePercent24Hr, 2) }%
                    </span>
                </p>
                <Link to={`/criptos/${cripto.id}`} className='button-plus'>Ver mas..</Link>
            </div>
        </div>
    );
}

export default Cripto;