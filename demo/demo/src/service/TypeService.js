import axios from "axios";

export const getListType = async () =>{
    const res = await axios.get("http://localhost:8080/type")
    return res.data
}

export const getTypeById = async (id) =>{
    const res = await axios.get("http://localhost:8080/type/"+id)
    return res.data
}