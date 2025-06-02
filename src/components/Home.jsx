import { Link } from 'react-router-dom'

const Home = () =>{
    return(
        <section className='section-home'>
            <h1>Bienvenido a nuestra pagina de criptos</h1>
            <Link to="/criptos" className='button-go'>Ir</Link>
        </section>
    );
}

export default Home;