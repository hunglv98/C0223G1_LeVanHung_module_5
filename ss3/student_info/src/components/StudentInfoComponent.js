import React from "react";
import "bootstrap/dist/css/bootstrap.css";


class StudentInfoComponent extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return <div className="container">
            <h1 style={{ textAlign: "center" }}>Students Management</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td scope="col">ID</td>
                        <td scope="col">Name</td>
                        <td scope="col">Age</td>
                        <td scope="col">Address</td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.list.map((student) =>
                        <tr key={student.id}>
                            <td scope="row">{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>

    }
}
export default StudentInfoComponent;