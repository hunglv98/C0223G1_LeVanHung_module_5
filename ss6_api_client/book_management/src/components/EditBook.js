import React, { useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';

import { addBook, editBookById, getBookById, getBookList } from '../service/BookService';
import { useParams, useNavigate } from "react-router"


function EditBook() {
    const params = useParams();
    const navigate = useNavigate();
    const [book, setBooks] = useState({});
    const getBook = async () => {
        const data = await getBookById(params.id)
        setBooks(data)
    }
    useEffect(() => {
        getBook()
    }, [params.id])

    return (<>
        {book.id && (
            <Formik
                initialValues={{ id: book.id, title: book.title, quantity: book.quantity }}
                validationSchema={yup.object({
                    title: yup.string().required(),
                    quantity: yup.number().required(),
                    id: yup.number().required()
                })}
                onSubmit={
                    async (values) => {
                        const obj = {
                            id: values.id,
                            title: values.title,
                            quantity: values.quantity
                        }
                        await editBookById(obj);
                        alert("Edit Successfully");
                        navigate("/");
                    }

                }
            >
                <Form>
                    <h1>Edit The Book</h1>
                    <Field type='hidden' id='id' name='id'></Field>
                    <label htmlFor='title'>Title</label>
                    <Field type='text' id='title' name='title'></Field>
                    <ErrorMessage name='title' component={"div"} />
                    <label htmlFor='quantity'>Quantity</label>
                    <Field type='text' id='quantity' name='quantity'></Field>
                    <ErrorMessage name='quantity' component={"div"} />
                    <button type='submit'>Edit New Book</button>
                </Form>
            </Formik>
        )}
    </>
    )
}
export default EditBook;