import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import useCounter from './useCounter';

function Counter1() {
    const [counter1, setCounter1] = useCounter(1);
    return (
        <div>
            <p>Count1 : {counter1}</p>
            <button className='btn btn-outline-primary' onClick={
                setCounter1
            } >Add 1</button>
        </div>

    )
}
export default Counter1;