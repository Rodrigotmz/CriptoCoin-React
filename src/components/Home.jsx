import { Link } from 'react-router-dom'

const Home = () =>{
    return(
        <>
            <h1>Bienvenido a nuestra pagina de criptos</h1>
            <Link to="/criptos">Ir</Link>
        </>
    );
}

export default Home;