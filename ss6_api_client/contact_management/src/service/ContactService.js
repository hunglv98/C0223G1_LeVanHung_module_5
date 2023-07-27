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
    
export const getUserById = async (id)=>{
    const res = await axios.get("http://localhost:8080/contacts/"+id)
    return res.data
}

export const editContact = async (contact) =>{
    await axios.put("http://localhost:8080/contacts/"+contact.id,contact)
}