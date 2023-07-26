import axios from "axios"

export const getListContact = async () =>{
    const res = await axios.get("http://localhost:8080/contacts");
    return res.data
}

export const deleteContactById = async (id) =>{
    await axios.delete("http://localhost:8080/contacts/"+id)
}

export const addNewContact = async (contact) =>{
    await axios.post("http://localhost:8080/contacts/",contact)
}
    
