import React, { useState } from 'react';

function useCounter(number) {
    const [count, setCount] = useState(number);
    const increase = () => {
        setCount(
            (previousState) => previousState + number)
    }
    return [count, increase];
}

export default useCounter;