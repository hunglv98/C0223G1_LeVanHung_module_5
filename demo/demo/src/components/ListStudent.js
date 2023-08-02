import React, { useEffect, useState } from 'react';
import { getList, searchByName } from '../service/StudentService';
import { Link } from 'react-router-dom';

function ListStudent() {
    const [students, setStudent] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const getListStudent = async () => {
        const data = await getList(currentPage);
        setStudent(data)
    }
    useEffect(() => {
        getListStudent()
    }, [currentPage])

    const increasePage = async () => {
        const nextPage = currentPage + 1
        const data = await getList(nextPage)
        if (data.length !== 0) {
            setCurrentPage(nextPage)
        }
    }

    const decreasePage = () => {
        const prePage = currentPage -1
        if (prePage > 0) {
            setCurrentPage(prePage)
        }
    }
    const searchByName1 = async() =>{
        const name = document.getElementById('name').value;
        console.log(name);
        const data = await searchByName(name);
        setStudent(data)
    }

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
                                <Link to={`/edit/${s.id}`}>Edit</Link>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
            
            <button type='button' onClick={() => decreasePage()}>Previous</button>
            <button type='button' onClick={() => increasePage()}>Next</button>
            <input type='text' id='name'></input>
            <button type='button' onClick={()=>searchByName1()}>Search</button>
        </>
    )
}
export default ListStudent