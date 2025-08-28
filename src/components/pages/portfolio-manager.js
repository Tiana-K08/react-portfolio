import React, { Component } from 'react';
import axios from 'axios';
import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';
import PortfolioForm from '../portfolio/portfolio-form';

export default class PortfolioManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PortfolioItems: [],
        };

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFailedFormSubmission = this.handleFailedFormSubmission.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleDeleteClick(portfolioItem) {
        console.log("handleDeleteClick", portfolioItem);
        axios.delete(`https://tetkononenko.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`, 
            {withCredentials: true})
        .then(response => {
            console.log("response from delete", response);
            this.setState({
                PortfolioItems: this.state.PortfolioItems.filter(item => {
                    return item.id !== portfolioItem.id;
                })
            });

            return response.data;
        }).catch(error => {
            console.log("handleDeleteClick", error);
        });
    }

    handleSuccessfulFormSubmission(portfolioItem) {
        this.setState({
            PortfolioItems: [portfolioItem].concat(this.state.PortfolioItems)

    });
    }

    handleFailedFormSubmission(error) {
        console.log("handleFailedFormSubmission error", error);
    }

    getPortfolioItems() {
        axios.get('https://tetkononenko.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc', {
            withCredentials: true,
        }).then(response => {
            this.setState({
                PortfolioItems: [...response.data.portfolio_items]
            });
        }).catch(error => {
            console.log("error from getPortfolioItems", error);
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <PortfolioForm 
                        handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                        handleFailedFormSubmission={this.handleFailedFormSubmission}
                    />
                </div>
                <div className="right-column">
                    <PortfolioSidebarList 
                        handleDeleteClick={this.handleDeleteClick}
                        data={this.state.PortfolioItems}
                    />
                </div>
                    
                
            </div>
        );
    };
}
