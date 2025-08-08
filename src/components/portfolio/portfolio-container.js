import React, { Component } from 'react';
import axios from 'axios';
import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
  constructor() {
    super();
    this.state = {
      pageTitle: 'Welcome to my portfolio',
      isLoading: false,
      data: []
    };

    // this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
  }

  getPortfolioItems() {
    axios.get('https://tetkononenko.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        this.setState({
          data: response.data.portfolio_items,
          // isLoading: false
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return (
      <PortfolioItem 
      key={item.id}
      item={item}
      
      />
      );
    });
  }

  hendlePageTitleUpdate() {
    this.setState({
      pageTitle: 'Something Else'
    });
  }

  hendleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if(this.state.isLoading) {
      return <div>Loading...</div>;
    }

    this.getPortfolioItems();

    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.hendleFilter('eCommerce')}>eCommerce</button>
        <button onClick={() => this.hendleFilter('scheduling')}>scheduling</button>
        <button onClick={() => this.hendleFilter('enterprise')}>enterprise</button>

        {this.portfolioItems()}
        <hr/>
        <button onClick={() => this.hendlePageTitleUpdate()}>Change Title</button>
      </div>
    );
  }
}