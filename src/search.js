import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './search.css';

class Search extends Component {
  static propTypes = {
    onSearch: PropTypes.func
  };

  handleSearchChange = ({target: {value}}) => {
    if (this.timer)
      clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.props.onSearch(value);
    }, 500);
  };

  render() {
    return (
      <input
        type="search"
        placeholder="Search"
        className="search"
        onChange={this.handleSearchChange}
      />
    );
  }
}

export default Search;
