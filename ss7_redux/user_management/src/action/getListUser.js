import { GetListUser } from "../service/UserService"
import axios from "axios";


export const getListUser = async () =>{
    const response = await axios.get(
        "http://localhost:8080/users"
      );
    return{
        type: "GET-LIST-USER",
        payload: response.data
    }
}


export const getListUserFinal = (state) => { // root state
    return state.list
}