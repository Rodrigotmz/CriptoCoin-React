import img404 from '../../assets/Ilustracion_404.png';
import './404.css';

const PageNotFound = () =>{
    return(
        <div className='container-404'>
            <h1>Lo sentimos</h1>
            <img srcSet={ img404 } alt="ilustración 404" />
            <h1>La pagina que buscas no esta disponible en este momento</h1>
            <a href="/">Regresar</a>
        </div>
    );
}

export default PageNotFound;