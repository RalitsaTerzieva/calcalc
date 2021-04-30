import React, { Component } from 'react';

class Calculator extends Component {
    render() {
        return <div> Hello, { this.full_name() } </div>;
    }
    
    full_name() {
        return `${this.props.first_name} ${this.props.last_name}`
    }
}

export default Calculator;