import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import BlogForm from '../blog/blog-form'
Modal.setAppElement('.app-wrapper');

export default class BlogModal extends Component {
    constructor(props) {
        super(props);

        this.customStyles = {
            content: {
                top: "50%",
                left: "50%",
                right: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                width: "800px"
            },
            overlay: {
                backgroundColor: "rgba(1, 1, 1, 0.75)"
            }
        };
    }

    render() {
        return(
            <Modal 
                style={this.customStyles}
                onRequestClose={() => {
                    this.props.handleModalClose();
                }} 
                isOpen={this.props.modalIsOpen}>
                <BlogForm />
            </Modal>
        )
    }
}