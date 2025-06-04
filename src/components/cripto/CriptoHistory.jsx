import './History.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../helps/loader';


const reqAxios = {
    baseURL: import.meta.env.VITE_API_URL,
    url: '',
    method: 'get',
    params: {
        apiKey: import.meta.env.VITE_API_KEY
    },
    headers: { 'Content-Type': 'application/json' },
    responseType: 'json'
}

const History = ({id}) =>{

    const [history, setHistory] = useState([]);
    reqAxios.url = `assets/${id}/history?interval=m1`
    useEffect(() => {
        const historyCripto = async () => {
            try {
                const request = await axios(reqAxios);
                const data = await request.data.data;
                setHistory(data);
            }
            catch (ex) {
                console.error(ex)
            }
        }
        historyCripto();
    }, []);
if(!history) return <Loader />
    return (
        <table className="table-history">
            <thead>
                <tr>
                    <th>Price USD</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Circulating Supply</th>
                </tr>
            </thead>
            <tbody>
                {
                    history.map( (item, index) =>(
                        <tr key={index}>
                            <td>{item.priceUsd}</td>
                            <td>{item.date}</td>
                            <td>{item.time}</td>
                            <td>{item.circulatingSupply}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    );
}

export default History;