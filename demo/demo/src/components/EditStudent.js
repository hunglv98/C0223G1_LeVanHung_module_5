import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editStudent, findStudentById } from '../service/StudentService';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { getListType, getTypeById } from '../service/TypeService';
import * as yup from "yup"

function EditStudent() {
    const navigate = useNavigate()
    const params = useParams();
    const [types, setType] = useState([])
    const [student, setStudent] = useState({})
    const getStudent = async () => {
        const student = await findStudentById(params.id);
        setStudent(student)
    }
    const getTypeList = async () => {
        const types = await getListType()
        setType(types)
    }
    useEffect(() => {
        getStudent()
        getTypeList()
    }, [])
    
    return (<>
        {student.id &&
        <Formik
            initialValues={{id:student.id,name:student.name,type:student.type.id}}
            validationSchema={yup.object({
            
                name: yup.string().required(),
                type: yup.string().required()
            })}
            onSubmit={ async (values)=>{
                const type = await getTypeById(values.type)
                const obj = {
                    id: values.id,
                    name: values.name,
                    type: type
                }
                await editStudent(obj);
                alert("Edit Successfully")
                navigate('/')
            }}
            
        >   
            <Form>
                <Field type='hidden' name='id'></Field>
                <div>
                    <label htmlFor='name'>name</label>
                    <Field type='text' id='name' name='name'></Field>
                </div>
                <div>
                    <Field as='select' name='type'>
                        {types.map((t, index) => {
                            return (
                                <option key={index} value={t.id}>{t.name}</option>
                            )
                        })}
                    </Field>
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>}
        </>
    )

}
export default EditStudent;