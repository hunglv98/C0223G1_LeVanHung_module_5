import React, { useEffect, useState } from 'react';
import { getListService } from '../service/FacilityService';
import { Link } from 'react-router-dom';

function ListService() {
  const [services, setService] = useState([])
  const getList = async () => {
    const data = await getListService()
    setService(data)
  }
  useEffect(() => {
    getList()
  }, [])


  return (

    <>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Manage <b>Service</b></h2>
                </div>
                <div className="col-sm-6">
                  <Link to={`/service/create`} className="btn btn-success" data-toggle="modal"><i className="material-icons"></i> <span>Add New Service</span></Link>
                  <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Delete</span></a>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  {/* <th>
                            <span className="custom-checkbox">
                              <input type="checkbox" id="selectAll" />
                              <label htmlFor="selectAll" />
                            </span>
                          </th> */}
                  <th>Name</th>
                  <th>Usage Area(m2)</th>
                  <th>Rental Cost($)</th>
                  <th>Capacity(People)</th>
                  <th>Type Of Rent</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s, index) => {
                  return (
                    <tr key={index}>
                      <td>{s.Name}</td>
                      <td>{s.UsageArea}</td>
                      <td>{s.RentalCost}</td>
                      <td>{s.Capacity}</td>
                      <td>{s.TypeOfRent}</td>
                      <td>
                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                      </td>
                    </tr>
                  )
                })}
                {/* <tr>
                          <td>
                            <span className="custom-checkbox">
                              <input type="checkbox" id="checkbox1" name="options[]" defaultValue={1} />
                              <label htmlFor="checkbox1" />
                            </span>
                          </td>
                          <td>Villa</td>
                          <td>100</td>
                          <td>400</td>
                          <td>10</td>
                          <td>Day</td>
                          <td>
                            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="custom-checkbox">
                              <input type="checkbox" id="checkbox2" name="options[]" defaultValue={1} />
                              <label htmlFor="checkbox2" />
                            </span>
                          </td>
                          <td>Room</td>
                          <td>120</td>
                          <td>500</td>
                          <td>8</td>
                          <td>Year</td>
                          <td>
                            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="custom-checkbox">
                              <input type="checkbox" id="checkbox3" name="options[]" defaultValue={1} />
                              <label htmlFor="checkbox3" />
                            </span>
                          </td>
                          <td>House</td>
                          <td>100</td>
                          <td>450</td>
                          <td>5</td>
                          <td>Month</td>
                          <td>
                            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="custom-checkbox">
                              <input type="checkbox" id="checkbox4" name="options[]" defaultValue={1} />
                              <label htmlFor="checkbox4" />
                            </span>
                          </td>
                          <td>Room</td>
                          <td>80</td>
                          <td>300</td>
                          <td>5</td>
                          <td>Day</td>
                          <td>
                            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="custom-checkbox">
                              <input type="checkbox" id="checkbox5" name="options[]" defaultValue={1} />
                              <label htmlFor="checkbox5" />
                            </span>
                          </td>
                          <td>Villa</td>
                          <td>75</td>
                          <td>200</td>
                          <td>4</td>
                          <td>Month</td>
                          <td>
                            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                          </td>
                        </tr> */}
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

export default ListService;