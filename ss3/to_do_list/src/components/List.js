import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            string: "",
            list: []
        };
    }

    clickButton = () => {
        this.setState((temp) => {
            const input = document.getElementById('input').value;
            if (input !== "" && temp.list.indexOf(input) === (-1)) {
                return {
                    list: [...temp.list, input],
                    string: ""
                }
            }
        }
        )

    }
    render() {
        return <div className='container' >
            <h1 style={{ textAlign: 'center' }}>To-do List</h1>
            <input style={{ width: '300px', display: 'inline-block' }} className='form-control' id='input' />
            <button className='btn btn-outline-primary' type='button' onClick={this.clickButton} >ADD</button>
            <div>
                <h4>To-do List</h4>
                <ul>
                    {this.state.list.map((work, index) => <li key={index}>{work}</li>)}
                </ul>
            </div>
        </div>
    }
}
export default List;