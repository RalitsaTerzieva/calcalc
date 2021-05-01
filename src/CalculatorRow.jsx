import React, { Component } from 'react';

class CalculatorRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredient: "",
            per_100g: 0,
            grams: 0,
            total: 0,
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        let value = target.value;
        if(target.type === "number") {
            value = Number(value);
        }
        const name = target.name;
    
        this.setState({
          [name]: value,
          total: this.state.per_100g / 100 * this.state.grams
        });
    }

    render() {
        return <div>
                <input type="text" name="ingredient" placeholder="ingredient" value={this.state.ingredient} onChange={this.handleInputChange} />
                <input type="number" name='per_100g' placeholder="per 100g" value={this.state.per_100g} onChange={this.handleInputChange} />
                <input type="number" name="grams" placeholder="grams" value={this.state.grams} onChange={this.handleInputChange} />
                <input type="number" name="total" placeholder="0" readOnly value={this.state.total} />
                <input type="button" value="+" />
            </div>;
    }
}

export default CalculatorRow;