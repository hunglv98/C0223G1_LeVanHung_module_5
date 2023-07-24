import React, { useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';
import { addBook } from '../service/BookService';


function CreateBook() {
    return (<>
        <Formik
            initialValues={{ title: "", quantity: "" }}
            validationSchema={yup.object({
                title: yup.string().required(),
                quantity: yup.number().required()
        
            })}
            onSubmit={
               async (values) => { 
                    const obj = {
                        title:values.title,
                        quantity:values.quantity
                    }
                    await addBook(obj);
                }
                
            }
        >
            <Form>
                <h1>Add New Book</h1>
                <label htmlFor='title'>Title</label>
                <Field type='text' id='title' name='title'></Field>
                <ErrorMessage name='title' component={"div"} />
                <label htmlFor='quantity'>Quantity</label>
                <Field type='text' id='quantity' name='quantity'></Field>
                <ErrorMessage name='quantity' component={"div"} />
                <button type='submit'>Add New Book</button>
            </Form>
        </Formik>
    </>
    )
}
export default CreateBook;