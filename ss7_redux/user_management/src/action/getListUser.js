import { DeleteUser, GetListUser } from "../service/UserService"

export const getListUser = () => {
    return async (dispatch) => {
        const data1 = await GetListUser();
        dispatch({
            type: "GET-LIST-USER",
            payload: data1
        })
    }
}

export const deleteById = () =>{
    return async (dispatch) =>{
        const data = await GetListUser();
        dispatch({
            type :"DELETE-BY-ID",
            payload: data
        })
    }
}

