import React from 'react';
import * as yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik"
function CreateCustomer() {
  return (
    <>
      {/*background*/}
      <h1>Create New Customer </h1>
      <div className="booking-form-w3layouts">
        {/* Form starts here */}
        <Formik
          initialValues={{
            name: "",
            dateOfBirth: "",
            gender: "",
            identityNumber: "",
            phoneNumber: "",
            email: "",
            address: "",
            type: ""
          }}
          validationSchema={yup.object({
            name: yup.string().required(),
            dateOfBirth: yup.string().required(),
            gender: yup.string().required(),
            identityNumber: yup.string().required(),
            phoneNumber: yup.string().required(),
            email: yup.string().required(),
            address: yup.string().required(),
            type: yup.string().required()
          })}
          onSubmit={()=>{
              alert("Create Successfully")
          }}
        >
          <Form>
            <h2 className="sub-heading-agileits" style={{ color: '#0091cd' }}>Furama's Customer</h2>
            <div className="main-flex-w3ls-sectns">
              <div className="field-agileinfo-spc form-w3-agile-text1">
                <Field type="text" name="name" placeholder="Full Name" required />
                <ErrorMessage name='name' component={"div"} />
              </div>
              <div className="field-agileinfo-spc form-w3-agile-text2">
                <Field type="text" name="identityNumber" placeholder="Identity Number" required />
                <ErrorMessage name='identityNumber' component={"div"} />
              </div>
            </div>
            <div className="triple-wthree">
              <div className="field-agileinfo-spc form-w3-agile-text11">
                <Field type="text" name="gender" placeholder="Gender" required />
                <ErrorMessage name='gender' component={"div"} />
              </div>
              <div className="field-agileinfo-spc form-w3-agile-text22">
                <Field id="datepicker" name="dateOfBirth" type="text" placeholder="Date of Birth" 
                defaultValue onfocus="this.value = '';" 
                onblur="if (this.value == '') {this.value = 'mm/dd/yyyy';}" required />
                <ErrorMessage name='dateOfBirth' component={"div"} />
              </div>
              <div className="field-agileinfo-spc form-w3-agile-text33">
                <Field type="text" name="phoneNumber" placeholder="Phone Number" required />
                <ErrorMessage name='phoneNumber' component={"div"} />
              </div>
            </div>
            <div className="main-flex-w3ls-sectns">
              <div className="field-agileinfo-spc form-w3-agile-text">
                <Field type="email" name="email" placeholder="Email" required />
                <ErrorMessage name='email' component={"div"} />
              </div>
            </div>
            <div className="main-flex-w3ls-sectns">
              <div className="field-agileinfo-spc form-w3-agile-text">
                <Field type="text" name="address" placeholder="Address" required />
                <ErrorMessage name='address' component={"div"} />
              </div>
            </div>
            <div className="radio-section">
              <h6>Type: </h6>
              <ul className="radio-buttons-w3-agileits">
                <li>
                  <Field type="radio" id="a-option" name="type" value='Diamond'/>
                  <label htmlFor="a-option">Diamond</label>
                  <div className="check" />
                </li>
                <li>
                  <Field type="radio" id="b-option" name="type" value='Platinum' />
                  <label htmlFor="b-option">Platinum</label>
                  <div className="check">
                    <div className="inside" />
                  </div>
                </li>
                <li>
                  <Field type="radio" id="c-option" name="type" value='Gold' />
                  <label htmlFor="c-option">Gold</label>
                  <div className="check">
                    <div className="inside" />
                  </div>
                </li>
                <li>
                  <Field type="radio" id="d-option" name="type" value='Silver' />
                  <label htmlFor="d-option">Silver</label>
                  <div className="check">
                    <div className="inside" />
                  </div>
                </li>
                <li>
                  <Field type="radio" id="e-option" name="type" value='Member' />
                  <label htmlFor="e-option">Member</label>
                  <div className="check">
                  <ErrorMessage name='type' component={"div"} />
                    <div className="inside" />
                  </div>
                </li>
              </ul>
              <div className="clear" />
            </div>
            <div className="clear" />
            <input type="submit" defaultValue="Submit" />
            <input type="reset" defaultValue="Clear Form" />
            <div className="clear" />
          </Form>
        </Formik>
        {/*// Form starts here */}
      </div>
      {/*copyright*/}
      {/* Time Js */}
      {/*// Time Js */}
      {/* Calendar Js */}
      {/* //Calendar Js */}
    </>
  );
}

export default CreateCustomer;