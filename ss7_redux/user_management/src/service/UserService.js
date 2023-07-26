import axios from "axios"

// axios.defaults.baseURL("http://localhost:8080/users")
export async function GetListUser() {
    const res = await axios.get("http://localhost:8080/users/");
    return res.data;
}

export async function DeleteUser(id) {
    return await axios.delete("http://localhost:8080/users/" + id);
}