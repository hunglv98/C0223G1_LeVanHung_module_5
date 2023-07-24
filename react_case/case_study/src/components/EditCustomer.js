import React from 'react';

function EditCustomer() {
    return (
        <>
            {/*background*/}
            <h1>Edit The Customer </h1>
            <div className="booking-form-w3layouts">
                {/* Form starts here */}
                <form action="#" method="post">
                    <h2 className="sub-heading-agileits" style={{ color: '#0091cd' }}>Furama's Customer</h2>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <input type="text" name="Name" placeholder="Full Name" required />
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <input type="text" name="Identity Number" placeholder="Identity Number" required />
                        </div>
                    </div>
                    <div className="triple-wthree">
                        <div className="field-agileinfo-spc form-w3-agile-text11">
                            <input type="text" name="Gender" placeholder="Gender" required />
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text22">
                            <input id="datepicker" name="Date of Birth" type="text" placeholder="Date of Birth" defaultValue onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'mm/dd/yyyy';}" required />
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text33">
                            <input type="text" name="Phone no" placeholder="Phone Number" required />
                        </div>
                    </div>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text">
                            <input type="email" name="Email" placeholder="Email" required />
                        </div>
                    </div>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text">
                            <input type="email" name="Address" placeholder="Address" required />
                        </div>
                    </div>
                    <div className="radio-section">
                        <h6>Type: </h6>
                        <ul className="radio-buttons-w3-agileits">
                            <li>
                                <input type="radio" id="a-option" name="selector1" />
                                <label htmlFor="a-option">Diamond</label>
                                <div className="check" />
                            </li>
                            <li>
                                <input type="radio" id="b-option" name="selector1" />
                                <label htmlFor="b-option">Platinum</label>
                                <div className="check">
                                    <div className="inside" />
                                </div>
                            </li>
                            <li>
                                <input type="radio" id="c-option" name="selector1" />
                                <label htmlFor="c-option">Gold</label>
                                <div className="check">
                                    <div className="inside" />
                                </div>
                            </li>
                            <li>
                                <input type="radio" id="d-option" name="selector1" />
                                <label htmlFor="d-option">Silver</label>
                                <div className="check">
                                    <div className="inside" />
                                </div>
                            </li>
                            <li>
                                <input type="radio" id="e-option" name="selector1" />
                                <label htmlFor="e-option">Member</label>
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
                </form>
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

export default EditCustomer