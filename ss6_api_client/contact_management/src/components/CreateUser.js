import react from "react"
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup"
import { addNewContact } from "../service/ContactService";
import { useNavigate} from "react-router-dom"

function CreateUser() {
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{ name: "", phone: "", email: "" }}
                validationSchema={yup.object({
                    name: yup.string().required(),
                    phone: yup.string().required(),
                    email: yup.string().required()
                })}
                onSubmit={
                    async (values) => {
                        const obj = {
                            name: values.name,
                            phone: values.phone,
                            email: values.email
                        }
                        await addNewContact(obj);
                        alert("Add Successfully");
                        navigate("/")
                    }
                }


            >
                <Form>
                    <h1>Add new Contact</h1>
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


        </>

    )



}
export default CreateUser