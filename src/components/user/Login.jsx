import { useState } from "react";
import axios from "axios";
import { postAxios } from '../../utils/requestAxios'
import { useNavigate, Navigate } from "react-router-dom";
import './Login.css'

const Login = () => {
    const navigation = useNavigate();
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState();
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const submit = (e) => {
        e.preventDefault();
        console.log(user)
        setCargando(true)
        setError(null);
        const request = postAxios(user);
        axios(request).then(data => {
            setCargando(false)
            localStorage.setItem("tokenReq", data.data.token)
            navigation("/")
        })
            .catch(err => {
                setCargando(false)
                console.log(err.response.data.error)
                setError(err.response.data.error)
            })
    }

    if (localStorage.getItem("tokenReq")) return <Navigate to='/' />

    return (
        <div className="login-container">
            <div className="card-login">
                <h1>Iniciar sesión</h1>
                <form onSubmit={submit}>
                    <div className="field">
                        <label htmlFor="email">Correo electrónico</label>
                        <input required onChange={(e) => {
                            setUser({
                                ...user,
                                email: e.target.value
                            })
                        }}
                            onFocus={()=>{
                                if (error) setError('');
                            }}
                            type="email" htmlName="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Contraseña:</label>
                        <input required onChange={(e) => {
                            setUser({
                                ...user,
                                password: e.target.value
                            })
                        }} 
                        onFocus={()=>{
                            if (error) setError('');
                        }}
                        type="password" htmlName="password" />
                    </div>
                    <div className="submit">
                        <input type="submit" value={ 
                            cargando ? 'cargando...' : 'Ingresar'
                        } />
                    </div>
                </form>
                {
                    error && <span className="error">{error}</span>
                }
            </div>
        </div>
    )
};

export default Login;