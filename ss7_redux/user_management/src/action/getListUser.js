import { GetListUser } from "../service/UserService"
import axios from "axios";
import { useDispatch } from "react-redux"


export const getListUser = () => {

    return async () => {

        const response = await axios.get(
            "http://localhost:8080/users"
        );
        const data1 = response.data;
        return {
            type: "GET-LIST-USER",
            payload: data1
        }
    }
}


export const getListUserFinal = (state) => { // root state
    return state.list
}