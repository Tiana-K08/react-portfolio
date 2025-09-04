import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

export default class BlogModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Modal 
                onRequestClose={() => {
                    this.props.handleModalClose();
                }} 
                isOpen={this.props.modalIsOpen}>
                <h1>I'm in a modal!</h1>
            </Modal>
        )
    }
}