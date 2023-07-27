import react from "react";
import {Formik,Form,ErrorMessage,Field} from "formik"
import * as yup from "yup";

function CreateService(){
          return (
            <>
              {/*background*/}
              <h1>Create New Service </h1>
              <div className="booking-form-w3layouts">
                {/* Form starts here */}
                <Formik
                    initialValues={{
                      Name:"",
                      UsageArea:"",
                      RentalCost:"",
                      Capacity:"",
                      TypeOfRent:"",
                      
                    }}
                    validationSchema={yup.object({
                      Name: yup.string().required() ,
                      UsageArea: yup.string().required() ,
                      RentalCost: yup.string().required() ,
                      Capacity: yup.string().required() ,
                      TypeOfRent: yup.string().required() 
                    })}
                    onSubmit={()=>{
                      alert("Create Successfully")
                    }}
                >
                <Form action="#" method="post">
                  <h2 className="sub-heading-agileits" style={{color: '#0091cd'}}>Furama's Service</h2>
                  <div className="main-flex-w3ls-sectns">
                    <div className="field-agileinfo-spc form-w3-agile-text">
                      <Field type="text" name="Name" placeholder="Name" required />
                      <ErrorMessage name="Name" component={"div"} />
                    </div>
                  </div>
                  <div className="main-flex-w3ls-sectns">
                    <div className="field-agileinfo-spc form-w3-agile-text">
                      <Field type="text" name="UsageArea" placeholder="Usage Area(m2)" required />
                      <ErrorMessage name="UsageArea" component={"div"} />
                    </div>
                  </div>
                  <div className="main-flex-w3ls-sectns">
                    <div className="field-agileinfo-spc form-w3-agile-text">
                      <Field type="text" name="RentalCost" placeholder="Rental Cost($)" required />
                      <ErrorMessage name="RentalCost" component={"div"} />
                    </div>
                  </div>
                  <div className="main-flex-w3ls-sectns">
                    <div className="field-agileinfo-spc form-w3-agile-text">
                      <Field type="text" name="Capacity" placeholder="Capacity(People)" required />
                      <ErrorMessage name="Capacity" component={"div"} />
                    </div>
                  </div>
                  <div className="radio-section">
                    <h6>Type Of Rent</h6>
                    <ul className="radio-buttons-w3-agileits">
                      <li>
                        <Field type="radio" id="a-option" name="TypeOfRent" value='Day' />
                        <label htmlFor="a-option">Day</label>
                        <div className="check" />
                      </li>
                      <li>
                        <Field type="radio" id="b-option" name="TypeOfRent"  value='Month' />
                        <label htmlFor="b-option">Month</label>
                        <div className="check">
                          <div className="inside" />
                        </div>
                      </li>
                      <li>
                        <Field type="radio" id="c-option" name="TypeOfRent"  value='Year' />
                        <label htmlFor="c-option">Year</label>
                        <ErrorMessage name="TypeOfRent" component={"div"} />
                        <div className="check">
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

export default CreateService