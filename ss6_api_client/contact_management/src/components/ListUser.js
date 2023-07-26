import React, { useEffect, useState } from 'react';
import { deleteContactById, getListContact } from '../service/ContactService';
import {Link} from "react-router-dom";

function ListUser() {
    const [users, setUsers] = useState([]);
    const getList = async () => {
        const data = await getListContact();
        setUsers(data)
    }
    useEffect(
        () => {
            getList();
        }, []

    )
    const deleteContact = async (id) => {
        if (window.confirm("Do you wanna delete?")) {
            await deleteContactById(id);
            getList();
            alert("Delete Successfully");
        }
    }
    return (
        <>
            <h1>Contact Management</h1>
            <Link to={`/create`}>Add new Contact</Link>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(
                        (u, index) => {
                            return (
                                <tr key={index}>
                                    <td>{u.id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.phone}</td>
                                    <td>
                                        <button onClick={() => deleteContact(u.id)}>Delete</button>
                                    </td>
                                    <td>
                                        <Link to={`/edit/${u.id}`}>Edit</Link>
                                    </td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
        </>
    )

}
export default ListUser