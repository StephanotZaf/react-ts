import React, { Component } from 'react';
import '../style/counter.scss';

class Counter extends Component <any, any> {
    constructor(props: any)
    {
        super(props);
        this.state = {
            count: 0,
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    increment(){
        const { max, step } = this.props;
        this.setState((state: { count: number; }) => {
            if (state.count >= max) return;
            return { count: state.count + step }
        })
    }
    decrement(){
        this.setState({count: this.state.count - 1})
    }
    reset(){
        this.setState({count: 0})
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