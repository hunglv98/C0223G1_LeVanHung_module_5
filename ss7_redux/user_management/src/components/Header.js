import React from 'react';
import { useDispatch } from "react-redux"
import {getListUser, getListUserFinal} from "../action/getListUser"
import { useSelector } from "react-redux"

function Header(){
    const dispatch = useDispatch();
    const listUser = useSelector(getListUserFinal);

const getListUser1 = () =>{
    dispatch(getListUser());
}

    return(
        <>
        <nav>
            <h1>User List</h1>
            <button type='submit' onClick={()=>getListUser1()}>Get users </button>
        </nav>
        <div>
            {console.log(listUser)}
        </div>
        </>

    )
}
export default Header;