import React, { Component } from 'react';

class ShoppingListForm extends Component{
    constructor(props){
        super(props);
        this.state = {name: '', qty: ''}
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state)
        this.setState({name: "", qty: ""})
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input 
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <label htmlFor="qty">Quantity: </label>
                <input 
                    id="qty"
                    name="qty"
                    value={this.state.qty}
                    onChange={this.handleChange}
                />
                <button>Add Item!</button>
            </form>
        )
    }
}
export default ShoppingListForm