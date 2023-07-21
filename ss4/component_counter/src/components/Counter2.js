import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import useCounter from './useCounter';

function Counter2() {
    const [counter2, setCounter2] = useCounter(2);
    return (
        <div>
            <p>Count2 : {counter2}</p>
            <button className='btn btn-outline-primary' onClick={
                setCounter2
            } >Add 2</button>
        </div>

    )
}
export default Counter2;