import React, { Component } from 'react';
import axios from 'axios';

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
        axios.post('https://api.devcamp.space/sessions', {
            client: {
                email: this.state.email,
                password: this.state.password
            }
        },
        { withCredentials: true }
        ).then(response => {
            console.log('response', response);
        })

        event.preventDefault();
    }

    handleChange(event) {
        console.log('Handle Change', this.state.email, this.state.password);
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
                <div>
                    <button 
                        type="submit" 
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
        );
    }
}