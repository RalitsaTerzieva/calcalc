import React, { Component } from 'react';
import CalculatorRow from './CalculatorRow'

class Calculator extends Component {
    render() {
        return <div>
            <CalculatorRow />
            <CalculatorRow />
        </div>;
    }
}

export default Calculator;