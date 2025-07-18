import React, { Component } from 'react';
import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
  portfolioItems() {
    const data = ['One', 'Two', 'Three', 'Four', 'Five'];
    return data.map(item => {
      return <PortfolioItem />;
    });
  }
  render() {
    return (
      <div>
        <h2>Portfolio items go here ...</h2>
        {this.portfolioItems()}
      </div>
    );
  }
}