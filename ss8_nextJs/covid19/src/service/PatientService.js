import axios from "axios"
export const getList = async () => {
    const res = await axios.get("http://localhost:8080/covids");
    return res.data
}