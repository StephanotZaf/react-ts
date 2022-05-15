import React, { Component, useEffect, useState } from 'react';
import '../style/counter.scss';

const getStateFromLocalStorage = () => {
    const storage = localStorage.getItem('counterState');
    if (storage) return JSON.parse(storage).count;
    return {count: 0}
};

const storeStateInLocalStorage = (count: number) => {
    localStorage.setItem('counterState', JSON.stringify({count}))
    console.log(localStorage)
}

const Counter = ({max, step}: {max: number, step: number}) => {
    const [count, setCount] = useState(getStateFromLocalStorage)
    const increment = () => {
        setCount(
            (c: number) => {
                if (c >= max) return c
                return c + step
            }
        )
    }
    const decrement = () => setCount(count - 1)
    const reset = () => setCount(0);

    useEffect(() => {
        document.title = `Counter: ${count}`
        storeStateInLocalStorage(count)
    }, [count])

    return (
        <div className='Counter'>
            <p className='count'>{count}</p>
            <section className='controls'>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </section>
        </div>
    );
}

export default Counter;