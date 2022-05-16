import React, { Component, useEffect, useState } from 'react';
import '../style/counter.scss';

const storeStateInLocalStorage = (count: number) => {
    localStorage.setItem('counterState', JSON.stringify({count}))
    console.log(localStorage)
}

const useLocalStorage = (initialState: number, key: string) => {
    const get: any = () => {
        const storage = localStorage.getItem(key)
        console.log(localStorage, storage)
        if (storage) return JSON.parse(storage)['value'];
        return initialState;
    }

    const [value, setValue] = useState(get())

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify({ value }));
    }, [value])

    return [value, setValue]
}

const Counter = ({max, step}: {max: number, step: number}) => {
    const [count, setCount] = useLocalStorage(0, 'count')
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