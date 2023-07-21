
function EditContract() {
    return (

        <div id="body1">
            {/*background*/}
            <h1>Edit The Contract </h1>
            <div className="booking-form-w3layouts">
                {/* Form starts here */}
                <form action="#" method="post">
                    <h2 className="sub-heading-agileits" style={{ color: '#0091cd' }}>Furama's Contract</h2>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <input type="text" name="Number of Contract" placeholder="Number of Contract" required />
                        </div>
                    </div>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <input id="datepicker1" name="Rental Date" type="text" placeholder="Rental Date" defaultValue onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'mm/dd/yyyy';}" required />
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <input id="datepicker2" name="Due Date" type="text" placeholder="Due Date" defaultValue onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'mm/dd/yyyy';}" required />
                        </div>
                    </div>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text">
                            <input type="number" name="Deposit($)" placeholder="Deposit($)" required />
                        </div>
                    </div>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text">
                            <input type="number" name="Total Amount($)" placeholder="Total Amount($)" required />
                        </div>
                    </div>
                    <div className="clear" />
                    <input type="submit" defaultValue="Submit" />
                    <input type="reset" defaultValue="Clear Form" />
                    <div className="clear" />
                </form>
                {/*// Form starts here */}
            </div>


        </div>
    );
}

export default EditContract;