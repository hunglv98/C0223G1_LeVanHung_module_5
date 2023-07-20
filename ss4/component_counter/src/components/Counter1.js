import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";

function Counter1() {
    const [counter1, setCounter1] = useState(0);
    return (
        <div>
            <p>Count1 : {counter1}</p>
            <button className='btn btn-outline-primary' onClick={
                () => {
                    setCounter1((previousState) => previousState + 1)
                }
            } >Add 1</button>
        </div>

    )
}
export default Counter1;