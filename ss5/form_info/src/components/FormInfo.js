import React from 'react';
import * as yup from 'yup';
import { Formik, Form, ErrorMessage, Field } from 'formik';


function FormInfo() {
    return (
        <>
            <Formik
                initialValues={{ fullName: "", email: "", phone: "", message: "" }}
                validationSchema={yup.object({
                    fullName: yup.string().required(),
                    email: yup.string().required().email(),
                    phone: yup.string().required(),
                    message: yup.string().required()
                })}
                onSubmit={
                    () => { alert("Create Successfully") }
                }

            >
                <Form>
                    <fieldset>
                        <legend>Contact form</legend>
                        <div>
                            <label htmlFor='fullName'>Name</label>
                            <Field type='text' id='fullName' name='fullName' />
                            <ErrorMessage name="fullName" component={"div"} />
                        </div>
                        <div>
                            <label htmlFor='email'>Email</label>
                            <Field type='text' id='email' name='email' />
                            <ErrorMessage name="email" component={"div"} />
                        </div>
                        <div>
                            <label htmlFor='phone'>Phone</label>
                            <Field type='text' id='phone' name='phone' />
                            <ErrorMessage name="phone" component={"div"} />
                        </div>
                        <div>
                            <label htmlFor='message'>Message</label>
                            <Field type='textarea' id='message' name='message' />
                            <ErrorMessage name="message" component={"div"} />
                        </div>
                        <div>
                            <button type='submit'>Add</button>
                        </div>
                    </fieldset>
                </Form>
            </Formik>

        </>
    );

}

export default FormInfo;