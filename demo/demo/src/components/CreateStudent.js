import React, { useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { getListType, getTypeById } from '../service/TypeService';
import * as yup from "yup"
import { createStudent } from '../service/StudentService';
import { useNavigate } from 'react-router-dom';
function CreateStudent() {
    const navigate = useNavigate()
    const [types, setType] = useState([])
    const getTypeList = async () => {
        const data = await getListType()
        setType(data)
    }
    useEffect(() => {
        getTypeList()
    })


    return (
        <Formik
            initialValues={{ name: "", type: "" }}
            validationSchema={yup.object({
                name: yup.string().required(),
                type: yup.string().required()
            })}
            onSubmit={ async(values)=>{
                
                const type = await getTypeById(values.type)
                const object = {
                    name: values.name,
                    type: type
                }
                await createStudent(object)
                alert("Create Successfully")
                navigate("/")
            }}  
        >
            <Form>
                <div>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' name='name' id='name' ></Field>
                    <ErrorMessage name='name' component={"div"} />
                </div>
                <div>
                    <Field as="select" name='type'>
                        <option value="0">Select Type</option>
                        {types.map((t, index) => {
                            return (
                                <option key={index} value={t.id}>{t.name}</option>
                            )
                        })}

                    </Field>
                    <ErrorMessage name='type' component={"div"} />
                </div>
                <button type='submit'>Submit</button>

            </Form>
        </Formik>
    )
}
export default CreateStudent