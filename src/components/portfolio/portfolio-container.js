import React, { Component } from 'react';
import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
  constructor() {
    super();
    this.state = {
      pageTitle: 'Welcome to my portfolio',
      data: [
        { title: 'Item 1' },
        { title: 'Item 2' },
        { title: 'Item 3' },
        { title: 'Item 4' }
      ]
    };
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} />;
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>
        {this.portfolioItems()}
      </div>
    );
  }
}