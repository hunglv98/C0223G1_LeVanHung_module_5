import React from 'react';
import axios from 'axios';
import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as yup from "yup";

function CreateContract() {
    return (
        <div>
            {/*background*/}
            <h1>Create New Contract </h1>
            <div className="booking-form-w3layouts">
                {/* Form starts here */}
                <Formik
                    initialValues={{
                        number:"",
                        rentalDate:"",
                        dueDate:"",
                        deposit:"",
                        totalAmount:"" 
                    }} 
                    validationSchema={yup.object({
                        number: yup.string().required(),
                        rentalDate: yup.string().required(),
                        dueDate: yup.string().required(),
                        deposit: yup.string().required(),
                        totalAmount: yup.string().required()
                    })}              
                    onSubmit={()=>{
                        alert("Create Successfully")
                    }}
                >
                    <Form>
                        <h2 className="sub-heading-agileits" style={{ color: '#0091cd' }}>Furama's Contract</h2>
                        <div className="main-flex-w3ls-sectns">
                            <div className="field-agileinfo-spc form-w3-agile-text1">
                                <Field type="text" name="number" placeholder="NumberofContract" required />
                                <ErrorMessage name='number' component={"div"} />
                            </div>
                        </div>
                        <div className="main-flex-w3ls-sectns">
                            <div className="field-agileinfo-spc form-w3-agile-text1">
                                <Field id="datepicker1" name="rentalDate" type="text" placeholder="RentalDate"
                                 defaultValue onfocus="this.value = '';" 
                                 onblur="if (this.value == '') {this.value = 'mm/dd/yyyy';}" required />
                                 <ErrorMessage name='rentalDate' component={"div"} />
                            </div>
                            <div className="field-agileinfo-spc form-w3-agile-text1">
                                <Field id="datepicker2" name="dueDate" 
                                type="text" placeholder="DueDate" defaultValue onfocus="this.value = '';
                                " onblur="if (this.value == '') {this.value = 'mm/dd/yyyy';}" required />
                                <ErrorMessage name='dueDate' component={"div"} />
                            </div>
                        </div>
                        <div className="main-flex-w3ls-sectns">
                            <div className="field-agileinfo-spc form-w3-agile-text">
                                <Field type="number" name="deposit" placeholder="Deposit($)" required />
                                <ErrorMessage name='deposit' component={"div"} />
                            </div>
                        </div>
                        <div className="main-flex-w3ls-sectns">
                            <div className="field-agileinfo-spc form-w3-agile-text">
                                <Field type="number" name="totalAmount" placeholder="Total Amount($)" required />
                                <ErrorMessage name='totalAmount' component={"div"} />
                            </div>
                        </div>
                        <div className="clear" />
                        <input type="submit" defaultValue="Submit" />
                        <input type="reset" defaultValue="Clear Form" />
                        <div className="clear" />
                    </Form>
                </Formik>
                {/*// Form starts here */}
            </div>
        </div>
    );
}
export default CreateContract;