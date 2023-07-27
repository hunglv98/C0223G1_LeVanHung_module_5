import react, { useEffect, useState } from "react"
import { Form, useNavigate, useParams } from "react-router-dom";
import { editContact, getUserById } from "../service/ContactService";
import { Formik,ErrorMessage,Field } from "formik";
import * as yup from "yup"

function EditUser() {
    const [user, setUser] = useState({})
    const navigate = useNavigate();
    const params = useParams();
    console.log(params.id);
    const getUser = async () => {
        const data = await getUserById(params.id)
        setUser(data)
        console.log(data);
    }
    useEffect(() => {
        getUser()
    }, [params.id])
    

    return (
        <Formik
            initialValues={{
                id: user.id, name: user.name, phone: user.phone, email: user.email
            }}
            validationSchema={yup.object(
                {
                    id: yup.number(),
                    name: yup.string().required(),
                    phone: yup.number().required(),
                    email: yup.string().required()
                }
            )}
            onSubmit={async (values) => {
                const obj = {
                    id: values.id,
                    name: values.name,
                    phone: values.phone,
                    email: values.email
                }
                await editContact(obj);
                navigate('/')
            }}
        >

            <Form>
                <h1>Edit  Contact</h1>
                <Field type='hidden' id='id' name='id'></Field>
                <div>
                    <label htmlFor="name">Name</label>
                    <Field type='text' id='name' name='name'></Field>
                    <ErrorMessage name="name" component={"div"} />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <Field type='text' id='phone' name='phone'></Field>
                    <ErrorMessage name="phone" component={"div"} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field type='text' id='email' name='email'></Field>
                    <ErrorMessage name="email" component={"div"} />
                </div>
                <button type="submit">Submit</button>
            </Form>

        </Formik>
    )
}
export default EditUser;