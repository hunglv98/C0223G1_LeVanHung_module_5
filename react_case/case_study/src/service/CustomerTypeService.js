import axios from "axios";

export const findAllType = async ()=>{
    const res = await axios.get("http://localhost:8080/customerType")
    return res.data
}

export const findTypeById = async (id)=>{
    const res = await axios.get("http://localhost:8080/customerType/"+id)
    return res.data
}

