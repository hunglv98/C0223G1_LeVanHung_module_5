import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

function HeathDeclaration() {
    return (
        <Formik initialValues={{ fullName: "", identityNumber: "", yearOfBirth: "", nationality: "", city: "", district: "", ward: "", address: "", phoneNumber: "", email: "" }}
            validationSchema={yup.object({
                fullName: yup.string().required(),
                identityNumber: yup.string().required(),
                yearOfBirth: yup.number().required().min(1900),
                nationality: yup.string().required(),
                city: yup.string().required(),
                district: yup.string().required(),
                ward: yup.string().required(),
                address: yup.string().required(),
                phoneNumber: yup.string().required(),
                email: yup.string().required().matches("/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$")
            })}
            onSubmit={() => {
                alert("xong rồi mọi người ơi")
            }
            }
        >
            <Form>
                <div>
                    <label htmlFor='fullName'>FullName</label>
                    <Field className='form-control' type='text' id='fullName' name='fullName' />
                    <ErrorMessage name='fullName' component="div" />
                </div>
                <div>
                    <label htmlFor='identityNumber'>IdentityNumber</label>
                    <Field className='form-control' type='text' id='identityNumber' name='identityNumber' />
                    <ErrorMessage name='identityNumber' component="div" />
                </div>
                <div>
                    <label htmlFor='yearOfBirth'>Year Of Birth</label>
                    <Field className='form-control' type='number' id='yearOfBirth' name='yearOfBirth' />
                    <ErrorMessage name='yearOfBirth' component="div" />
                </div>
                <div>
                    <label>Gender</label>
                    <Field type='radio' id='male' name='gender' value='Male' />
                    <Field type='radio' id='female' name='gender' value='Female' />
                </div>
                <div>
                    <label htmlFor='nationality'>Nationality</label>
                    <Field className='form-control' type='text' id='nationality' name='nationality' />
                    <ErrorMessage name='nationality' component="div" />
                </div>
                <div>
                    <label htmlFor='department'>Department</label>
                    <Field className='form-control' type='text' id='department' name='department' />
                </div>
                <div>
                    <label htmlFor='healthInsurance'>Health Insurance</label>
                    <Field type='checkbox' id='healthInsurance' name='healthInsurance' />
                </div>


                <h3>Contact-address at Vietnam</h3>


                <div>
                    <label htmlFor='city'>City</label>
                    <Field className='form-control' type='text' id='city' name='city' />
                    <ErrorMessage name='city' component="div" />
                </div>
                <div>
                    <label htmlFor='district'>District</label>
                    <Field className='form-control' type='text' id='district' name='district' />
                    <ErrorMessage name='district' component="div" />
                </div>
                <div>
                    <label htmlFor='ward'>Ward</label>
                    <Field className='form-control' type='text' id='ward' name='ward' />
                    <ErrorMessage name='ward' component="div" />
                </div>
                <div>
                    <label htmlFor='address'>Exact Address</label>
                    <Field className='form-control' type='text' id='address' name='address' />
                    <ErrorMessage name='address' component="div" />
                </div>
                <div>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <Field className='form-control' type='text' id='phoneNumber' name='phoneNumber' />
                    <ErrorMessage name='phoneNumber' component="div" />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <Field className='form-control' type='text' id='email' name='email' />
                    <ErrorMessage name='email' component="div" />
                </div>

                <div>
                    <p>In the past 14 days, have you visited any country or territory
                        (Can go through many countries)</p>
                    <Field type='text' id='q1' name='q1' />
                </div>



                <div>
                    <p>During the past 14 days, have you
                        experienced any of the following
                        symptoms?</p>
                    <div>
                        <Field type='checkbox' name='q2' value='Fever' />
                        <span>Fever</span>

                    </div>
                    <div>
                        <Field type='checkbox' name='q2' value='Cough' />
                        <span>Cough</span>

                    </div>
                    <div>
                        <Field type='checkbox' name='q2' value='Difficulty breathing' />
                        <span>Difficulty breathing</span>

                    </div>
                    <div>
                        <Field type='checkbox' name='q2' value='Pneumonia' />
                        <span>Pneumonia</span>

                    </div>
                    <div>
                        <Field type='checkbox' name='q2' value='Sore throat' />
                        <span>Sore throat</span>

                    </div>
                    <div>
                        <Field type='checkbox' name='q2' value='Tired' />
                        <span>Tired</span>

                    </div>
                </div>

                <div>
                    <p htmlFor='q3'>During the past 14 days, have you been
                        in contact with?
                    </p>
                    <div>
                        <Field type='checkbox' name='q3' value='Patients who are sick or suspected of having
                        COVID-19' />
                        <span>Patients who are sick or suspected of having
                            COVID-19</span>
                    </div>
                    <div>
                        <Field type='checkbox' name='q3' value='People from countries with COVID-19 disease' />

                        <span>People from countries with COVID-19 disease</span>
                    </div>
                    <div>
                        <Field type='checkbox' name='q3' value=' People with symptoms (Fever, cough, shortness of
                        breath, pneumonia)' />
                        <span>People with symptoms (Fever, cough, shortness of
                            breath, pneumonia)</span>
                    </div>
                </div>

                <div>
                    <button type='submit'>Submit</button>
                </div>

            </Form>



        </Formik>




    )


}
export default HeathDeclaration;