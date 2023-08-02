import axios from "axios";

export const findAllSong = async (page) => {
    const res = await axios.get(`http://localhost:8080/songs/pages/${page}/2`)
    return res.data
}

export const findSongByName = async (name,page) => {
    const res = await axios.get(`http://localhost:8080/songs/search/${name}/pages/${page}/10`)
    return res.data
}

export const findSongByid = async (id) => {
    const res = await axios.get("http://localhost:8080/songs/" + id)
    return res.data
}

export const createSong = async (obj) => {
    console.log(obj);
    await axios.post("http://localhost:8080/songs/", obj)
}
export const editSong = async (obj) => {
    await axios.put("http://localhost:8080/songs/" + obj.id, obj)
}
export const deleteSong = async (id) => {
    await axios.delete("http://localhost:8080/songs/" + id)
}