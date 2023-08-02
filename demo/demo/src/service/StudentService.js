import axios from "axios";

export const getList = async(page) =>{
    const res = await axios.get(`http://localhost:8080/students?_page=${page}&_limit=3`)
    return res.data
}

export const createStudent = async(obj) =>{
    await axios.post("http://localhost:8080/students",obj)
}

export const editStudent = async (obj) =>{
    await axios.put("http://localhost:8080/students/"+obj.id,obj)
}

export const findStudentById = async (id) =>{
    const res = await axios.get("http://localhost:8080/students/"+id)
    return res.data
}   

export const searchByName = async (name) =>{
    const res = await axios.get("http://localhost:8080/students?name_like="+name)
    return res.data
}   