import React, { Component } from 'react';
import '../style/counter.scss';

const getStateFromLocalStorage = () => {
    const storage = localStorage.getItem('counterState');
    if (storage) return JSON.parse(storage);
    return {count: 0}
};

const storeStateInLocalStorage = (state: any) => {
    localStorage.setItem('counterState', JSON.stringify(state))
    console.log(localStorage)
}

class Counter extends Component <any, any> {
    constructor(props: any)
    {
        super(props);
        this.state = getStateFromLocalStorage()
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
        this.updateDocumentTitle = this.updateDocumentTitle.bind(this)
    }

    updateDocumentTitle()
    {
        document.title = this.state.count
    }

    increment(){
        this.setState((state: { count: number, title: string }, props: {max: number, step: number}) => {
            const { max, step } = props;
            if (state.count >= max) return;
            const incrementValue = state.count + step
            return { count: incrementValue}
        }, this.updateDocumentTitle )
    }
    decrement(){
        this.setState({count: this.state.count - 1}, this.updateDocumentTitle)
    }
    reset(){
        this.setState({count: 0}, this.updateDocumentTitle)
    }

    render() {
        const { count } = this.state;
        return (
            <div className='Counter'>
                <p className='count'>{count}</p>
                <section className='controls'>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.reset}>Reset</button>
                </section>
            </div>
        );
    }
}

export default Counter;