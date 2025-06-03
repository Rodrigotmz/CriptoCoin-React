import Cripto from './Cripto';
import Loader from '../helps/loader';
import usePetition from '../../hooks/usePetition';

const GridCripto = () => {
    const cripto1 = usePetition();

    if (!cripto1) return <Loader />
    return (
        <section className='main-list-container'>
            <h1>Lista de criptomonedas</h1>
            <div className='cripto-container'>
                {
                    cripto1 && cripto1?.map((cripto) => (
                        <Cripto key={cripto.id} cripto={ cripto } />
                    ))
                }
            </div>
        </section>
    );

}

export default GridCripto;