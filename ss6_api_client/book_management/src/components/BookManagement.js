import React, { useState } from 'react';
import { getBookList, deleteBookById } from '../service/BookService';
import { Link } from "react-router-dom"

function BookManagement() {
    const [books, setBooks] = useState([]);

    const getList = async () => {
        const data = await getBookList();
        setBooks(data);
    }
    useState(
        () => {
            getList();
        }, []
    )

    async function deleteBook(id) {
        if (window.confirm("Do you want to delete?")) {
            await deleteBookById(id);
            const data = await getBookList();
            setBooks(data);
            alert("Delete Successfully")
        }
    }

    return (<div className='container'>
        <Link className='btn btn-outline-primary' to={`/create`} >Add New Book</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                {books.map(
                    (book) => {
                        return (<tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <Link className='btn btn-warning' to={`/edit/${book.id}`}>Edit</Link>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={() => deleteBook(book.id)}>Delete</button>
                            </td>
                        </tr>)
                    }
                )}
            </tbody>
        </table>
    </div>
    )
}
export default BookManagement;