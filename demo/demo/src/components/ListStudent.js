import React, { useEffect, useState } from 'react';
import { getList } from '../service/StudentService';
import { Link } from 'react-router-dom';

function ListStudent() {
    const [students, setStudent] = useState([])
    const getListStudent = async () => {
        const data = await getList();
        setStudent(data)
    }
    useEffect(() => {
        getListStudent()
    }, [])

    return (
        <>
            <table>
                <Link to={`/create`}>Create</Link>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((s, index) => {
                        return (
                            <tr key={index}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.type.name}</td>
                                <Link to={`/edit/${s.type.id}`}>Edit</Link>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
export default ListStudent