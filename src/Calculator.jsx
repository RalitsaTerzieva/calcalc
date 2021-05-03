import React, { Component } from 'react';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.emptyRow = {
            ingredient: "",
            per_100g: 0,
            grams: 0,
            total: 0,
        }
        this.state = {
            items: [
                this.emptyRow
            ],
            total: 0.0
        };
    }

    handleRowChange = (index, state) => {
        let newItems = [...this.state.items]
        let newState = { ...this.state.items[index], ...state }

        newState['total'] = newState.per_100g / 100 * newState.grams;
        newItems.splice(index, 1, newState)
        this.setState({
            items: newItems,
            total: newItems.map(x => x.total).reduce((a, b) => a + b, 0)
        })
    }

    addItem = () => {
        this.setState({
            items: [...this.state.items, this.emptyRow]
        })

    }

    removeItem = (index) => {
        if (this.state.items.length === 1) {
            return;
        }
        let newItems = [...this.state.items]
        newItems.splice(index, 1)

        this.setState({
            items: newItems
        })
    }

    handleInputChange = (event, index) => {
        const target = event.target;
        let value = target.value;
        const name = target.name;

        if (['per_100g', 'grams'].includes(name)) {
            value = Number(value);
        }

        this.handleRowChange(index, {
            [name]: value
        })
    }

    render() {
        return <div>
            {this.state.items.map((item, index) => (
                <div key={`row-${index}`}>
                    <input type="text" name="ingredient" placeholder="ingredient" autoComplete='off' value={item.ingredient} onChange={e => this.handleInputChange(e, index)} />
                    <input type="text" name='per_100g' placeholder="per 100g" autoComplete='off' value={item.per_100g} onChange={e => this.handleInputChange(e, index)} />
                    <input type="text" name="grams" placeholder="grams" autoComplete='off' value={item.grams} onChange={e => this.handleInputChange(e, index)} />
                    <input type="text" name="total" placeholder="0" readOnly value={item.total} />
                    <input type="button" value="+" onClick={this.addItem} />
                    <input type="button" value="-" onClick={e => (this.removeItem(index))} />
                </div>
            ))}
            <div>Total: {this.state.total.toFixed(2)}</div>
        </div>
    }
}

export default Calculator;