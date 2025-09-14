import React, { Component } from 'react';
import axios from 'axios';

import PortfolioContainer from "../portfolio/portfolio-container";
import { error } from 'ajv/dist/vocabularies/applicator/dependencies';

export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.getPortfolioItem();
    }

    getPortfolioItem() {
        axios.get(`https://tetkononenko.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, { withCredentials: true })
        .then(response => {
            console.log('jbcnjabcao');
        }).catch(error => {
            conso
            console.log('тщ');
        }

        )
    }
    
    render() {
        return (
            <div>
                <h2>Portfolio Detail for {this.props.match.params.slug}</h2>
            </div>
        );
    }
    
}