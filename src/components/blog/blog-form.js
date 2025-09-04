import React, { Component } from 'react';

export default class BlogForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" />
                    <input type="text" />

                    <button>Save</button>
                </form>

            </div>
        );
    }
}