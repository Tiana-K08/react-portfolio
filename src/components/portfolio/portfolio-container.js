import React, { Component } from 'react';
import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
  constructor() {
    super();
    this.state = {
      pageTitle: 'Welcome to my portfolio',
      data: [
        { title: 'Olio', category: 'eCommerce' },
        { title: 'Item 2', category: 'scheduling' },
        { title: 'Item 3', category: 'enterprise' },
        { title: 'Item 4', category: 'eCommerce' }
      ]
    };

    // this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={"google.com"} />;
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

  render() {
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