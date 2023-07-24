import React from 'react';

function ListCustomer() {

    return (

        <>
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Manage <b>Customer</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons"></i> <span>Add New Service</span></a>
                                    <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Delete</span></a>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date of Birth</th>
                                    <th>Gender</th>
                                    <th>Identity Number</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Type</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Lee Min Ho</td>
                                    <td>12-12-2002</td>
                                    <td>Male</td>
                                    <td>123123123123</td>
                                    <td>0899887665</td>
                                    <td>holm@gmai.com</td>
                                    <td>Korean</td>
                                    <td>Member</td>
                                    <td>
                                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Lee Min Hook</td>
                                    <td>15-12-2002</td>
                                    <td>Female</td>
                                    <td>123123123124</td>
                                    <td>0899887664</td>
                                    <td>hooklm@gmai.com</td>
                                    <td>Korean</td>
                                    <td>Gold</td>
                                    <td>
                                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Lee Kwang Su</td>
                                    <td>15-01-2000</td>
                                    <td>Male</td>
                                    <td>123123123124</td>
                                    <td>0899887623</td>
                                    <td>sulk@gmai.com</td>
                                    <td>Korean</td>
                                    <td>Silver</td>
                                    <td>
                                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Lee Han Che</td>
                                    <td>17-03-1999</td>
                                    <td>Male</td>
                                    <td>123123123454</td>
                                    <td>08998876987</td>
                                    <td>chlk@gmai.com</td>
                                    <td>Korean</td>
                                    <td>Diamond</td>
                                    <td>
                                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kim Han Cook</td>
                                    <td>11-09-1994</td>
                                    <td>Female</td>
                                    <td>123123123852</td>
                                    <td>089988767665</td>
                                    <td>cookkh@gmai.com</td>
                                    <td>Korean</td>
                                    <td>Platinum</td>
                                    <td>
                                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="clearfix">
                            <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                            <ul className="pagination">
                                <li className="page-item disabled"><a href="#">Previous</a></li>
                                <li className="page-item"><a href="#" className="page-link">1</a></li>
                                <li className="page-item"><a href="#" className="page-link">2</a></li>
                                <li className="page-item active"><a href="#" className="page-link">3</a></li>
                                <li className="page-item"><a href="#" className="page-link">4</a></li>
                                <li className="page-item"><a href="#" className="page-link">5</a></li>
                                <li className="page-item"><a href="#" className="page-link">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Edit Modal HTML */}
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea className="form-control" required defaultValue={""} />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                <input type="submit" className="btn btn-success" defaultValue="Add" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Edit Modal HTML */}
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea className="form-control" required defaultValue={""} />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                <input type="submit" className="btn btn-info" defaultValue="Save" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Delete Modal HTML */}
            <div id="deleteEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Delete Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete these Records?</p>
                                <p className="text-warning"><small>This action cannot be undone.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                <input type="submit" className="btn btn-danger" defaultValue="Delete" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListCustomer;