import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            password: '',
            errorText: ''
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
        )
        .then(response => {
            if (response.data.status === 'created') {
                console.log('You can come in ...');
                this.props.handleSuccessfulAuth();
            } else {
                this.setState({
                    errorText: 'Wrong email or password'
                });
                this.props.handleUnsuccessfulAuth();
            }
        })
        .catch(error => {
            console.log('Some error occurred', error);
            this.setState({
                errorText: 'An error occurred'
            });
            this.props.handleUnsuccessfulAuth();
        });

        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ''
        });
    }

    render() {
        return (
        <div className="">
            <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

            <div>{this.state.errorText}</div>

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