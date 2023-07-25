import axios from "axios"

export async function GetListUser() {
    const res = await axios.get("http://localhost:8080/users/")
    return res.data;
}

export async function DeleteUser(id) {
    return await axios.delete("http://localhost:8080/users/"+id)
}

