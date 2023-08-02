import axios from "axios";

export const findAllStatus = async () => {
    const res = await axios.get("http://localhost:8080/status")
    return res.data
}

export const findStatusById = async (id) => {
    const res = await axios.get("http://localhost:8080/status/" + id)
    return res.data
}