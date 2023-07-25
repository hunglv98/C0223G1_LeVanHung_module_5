import React, { useEffect, useState } from 'react';
import { GetListUser } from '../service/UserService';
function GetList() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getList = async () => {
            const data = await GetListUser();
            setUsers(data);
        }
        getList();
    }, []
    )

    return (
        <>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(
                        (u,index)=>{
                        return (<tr key={u.id}>
                            <td>{index}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.website}</td>
                            <td><button>Delete</button></td>
                        </tr>)
                    })}
                </tbody>

            </table>

        </>
    )
}
export default GetList;