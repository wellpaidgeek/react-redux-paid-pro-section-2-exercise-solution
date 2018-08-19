import React from 'react';

export default class Counter extends React.Component {
    constructor (props) {
        super(props);
        const { initialNumber } = this.props;
        this.state = {
            currentNumber: initialNumber
        };
    }

    increment () {
        this.setState(
            {
                currentNumber: ++this.state.currentNumber
            }
        )
    }

    decrement () {
        const { currentNumber } = this.state;
        const { initialNumber } = this.props;
        if (currentNumber === initialNumber) {
            return;
        } 
        this.setState(
            {
                currentNumber: --this.state.currentNumber
            }
        )
    }

    render () {
        const { currentNumber } = this.state;
        return (
            <div>
                <span>{ currentNumber }</span>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.decrement()}>Decrement</button>
            </div>
        )
    }
}