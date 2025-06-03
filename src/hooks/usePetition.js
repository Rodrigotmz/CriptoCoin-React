import { useState, useEffect } from "react";
import { req_axios } from '../utils/requestAxios';
import axios from "axios";

const usePetition = (ids) =>{
    const [data, setData] = useState();
    useEffect(() => {
        const Data = async () => {
            try {
                const request = await axios(req_axios(ids));
                const rq_data = await request.data.data;
                setData(rq_data);
            }
            catch (ex) {
                console.error(ex)
            }
        }
        Data();
    }, []);
    return data;
}

export default usePetition;