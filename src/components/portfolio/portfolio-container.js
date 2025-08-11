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

    // this.getPortfolioItems(); ререндеринг компонента

    return (
      <div className="portfolio-items-wrapper">
        <button className="btn" onClick={() => this.hendleFilter('basic')}>eCommerce</button>
        <button className="btn" onClick={() => this.hendleFilter('basic++')}>Scheduling</button>
        <button className="btn" onClick={() => this.hendleFilter('mas')}>Enterprise</button>

        {this.portfolioItems()}
      </div>
    );
  }
}