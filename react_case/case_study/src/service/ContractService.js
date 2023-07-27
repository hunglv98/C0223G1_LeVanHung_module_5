import axios from "axios"

export const getListContract = async () =>{
    const res = await axios.get('http://localhost:8080/contracts');
    return res.data;
}