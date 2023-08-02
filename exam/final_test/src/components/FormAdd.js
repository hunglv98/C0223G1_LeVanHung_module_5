import React, { useEffect, useState } from "react";
import * as yup from "yup"
import { Formik, Form, ErrorMessage, Field } from "formik"
import { findStatusById } from "../service/StatusService";
import { createSong } from "../service/SongService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function FormAdd() {
    const navigate = useNavigate()
    const [status, setStatus] = useState({})
    const getStatus = async () => {
        const data = await findStatusById(1)
        setStatus(data)
    }
    useEffect(() => {
        getStatus()
    }, [])
    return (
        <>
            {status.id &&
                <div>
                    {/*background*/}
                    <h1>Create New Song </h1>
                    <div className="booking-form-w3layouts">
                        {/* Form starts here */}
                        <Formik
                            initialValues={{
                                name: "",
                                singer: "",
                                author: "",
                                duration: "",
                                numberLike: 0
                            }}
                            validationSchema={yup.object({
                                name: yup.string().required("Not Empty"),
                                singer: yup.string().min(3).max(30).required("Not Empty"),
                                author: yup.string().min(3).max(30).required("Not Empty"),
                                duration: yup.string().matches(`^[0-9]{2}:[0-9]{2}$`, "Input following match hh:mm").required("Not Empty"),
                                numberLike: yup.string().required("Not Empty")
                            })}
                            onSubmit={async (values) => {
                                const obj = {
                                    ...values, status: status
                                }
                                console.log(obj);
                                await createSong(obj)
                                navigate("/")
                                Swal.fire({
                                    icon: "success",
                                    text: "Create Successfully",
                                    timer: 2000

                                })
                            }}
                        >
                            <Form action="#" method="post">
                                <h2 className="sub-heading-agileits" style={{ "color": '#0091cd' }}>Furama's Customer</h2>
                                <div className="main-flex-w3ls-sectns">
                                    <div className="field-agileinfo-spc form-w3-agile-text1">
                                        <Field type="text" name="name" placeholder="Name" />
                                        <ErrorMessage name="name" component={"div"} />
                                    </div>
                                    <div className="field-agileinfo-spc form-w3-agile-text2">
                                        <Field type="text" name="singer" placeholder="Singer" />
                                        <ErrorMessage name="singer" component={"div"} />
                                    </div>
                                </div>
                                <div className="triple-wthree">
                                    <div className="field-agileinfo-spc form-w3-agile-text11">
                                        <Field type="text" name="author" placeholder="Author" />
                                        <ErrorMessage name="author" component={"div"} />
                                    </div>
                                    <div className="field-agileinfo-spc form-w3-agile-text22">
                                        <Field id="datepicker" name="duration" type="text" placeholder="Time"
                                        />
                                        <ErrorMessage name="duration" component={"div"} />
                                    </div>
                                    <div className="field-agileinfo-spc form-w3-agile-text33">
                                        {/* <Field type="text" name="like" placeholder="Like" value="0" />
                                            <ErrorMessage name="like" component={"div"} /> */}
                                    </div>

                                </div>
                                <div className="radio-section">
                                    <h6>Like: </h6>
                                    <ul className="radio-buttons-w3-agileits">
                                        <li>
                                            <Field type="text" name="numberLike" placeholder="Like" value="0" readOnly />
                                            <ErrorMessage name="numberLike" component={"div"} />
                                        </li>
                                    </ul>
                                </div>

                                <div className="clear" />
                                <input type="submit" defaulvalue="Submit" />
                                <input type="reset" defaulvalue="Clear Form" />
                                <div className="clear" />
                            </Form>
                            {/*// Form starts here */}
                        </Formik>
                    </div>
                </div>}
        </>

    )


}

export default FormAdd