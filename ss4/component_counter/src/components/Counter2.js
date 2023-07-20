import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";

function Counter2() {
    const [counter2, setCounter2] = useState(0);
    return (
        <div>
            <p>Count2 : {counter2}</p>
            <button className='btn btn-outline-primary' onClick={
                () => {
                    setCounter2((previousState) => previousState + 1)
                }
            } >Add 2</button>
        </div>

    )
}
export default Counter2;