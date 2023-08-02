import React, { useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { findAllType } from '../service/CustomerTypeService';
import { editCustomer, getCustomerById } from '../service/CustomerService';
import * as yup from "yup"

function EditCustomer() {
    const params = useParams()
    const navigate = useNavigate()
    const [customer, setCustomer] = useState({})
    const [types, setTyle] = useState([])
    const getListType = async () => {
        const data = await findAllType();
        setTyle(data);
        console.log("1");
    }
    const getCustomer = async () => {
        const data = await getCustomerById(params.id)
        setCustomer(data)
        console.log("2");
    }
    useEffect(() => {
        getListType();
        getCustomer();
    }, [])
    return (
        <>
           <h1>Edit The Customer </h1>
      <div className="booking-form-w3layouts">
        {/* Form starts here */}
       {customer.id && <Formik
          initialValues={{
            ...customer,
            type : JSON.stringify(customer.type)
          }}
          validationSchema={yup.object({
            id: yup.number().required(),
            name: yup.string().required(),
            dateOfBirth: yup.string().required(),
            gender: yup.string().required(),
            identityNumber: yup.string().required(),
            phoneNumber: yup.string().required(),
            email: yup.string().required(),
            address: yup.string().required(),
            type: yup.string().required()
          })}
          onSubmit={ async(values) => {
            const obj = {
            id: values.id,
              name: values.name,
              dateOfBirth: values.dateOfBirth,
              gender: values.gender,
              identityNumber: values.identityNumber,
              phoneNumber: values.phoneNumber,
              email: values.email,
              address: values.address,
              type: JSON.parse(values.type)
            }
            console.log(obj);
            await editCustomer(obj)
            alert("Edit Successfully")
            navigate("/customer")
          }}
        >
          <Form>
            <Field type='hidden' name='id' />
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
                {types.length >0 && types.map((t)=>{
                  return(
                    <li key={t.id}>
                  <Field type="radio" id={t.id} name="type" value={JSON.stringify(t)} />
                  <label htmlFor={t.id}>{t.name}</label>
                  <div className="check">
                    <div className="inside" />
                  </div>
                </li>
                  )
                })}
                <ErrorMessage name='type' component={"div"} />
              </ul>
              <div className="clear" />
            </div>
            <div className="clear" />
            <input type="submit" defaultValue="Submit" />
            <input type="reset" defaultValue="Clear Form" />
            <div className="clear" />
          </Form>
        </Formik>}
        {/*// Form starts here */}
      </div>
        </>
    );
}

export default EditCustomer