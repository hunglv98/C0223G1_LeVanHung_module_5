import axios from "axios";

export async function getListCustomer(){
    const res = await axios.get("http://localhost:8080/customer")
    return res.data
}

export async function createCustomer(obj){
    await axios.post("http://localhost:8080/customer",obj)
}

export async function getCustomerById(id){
    const res = await axios.get("http://localhost:8080/customer/"+id)
    return res.data
}

export async function editCustomer(obj){
   await axios.put("http://localhost:8080/customer/"+obj.id,obj)
}

export async function deleteCustomerById(id){
    await axios.delete("http://localhost:8080/customer/"+id)
 }