import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleSubmit(event) {
        console.log('Handle Submit', event);
    }

    handleChange(event) {
        console.log('Handle Change', event);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
        <div className="">
            <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

            <form onSubmit={this.handleSubmit}>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Your email" 
                    value={this.state.email}
                    onChange={this.handleChange}
                />

                <input 
                    type="password" 
                    name="password" 
                    placeholder="Your password" 
                    value={this.state.password}
                    onChange={this.handleChange}
                />
            </form>

            <div>
                <button 
                    type="submit" 
                >
                    Login
                </button>
            </div>
        </div>
        );
    }
}