import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './player-list.css';

class PlayerList extends Component {
  static propTypes = {
    collection: PropTypes.arrayOf(PropTypes.string)
  };

  render() {
    return (
      <table className='player-list-table'>
        <thead>
          <tr>
            <th className='player-list-table-header'>Polish national soccer team</th>
          </tr>
        </thead>
        <tbody>
          {this.props.players.map((player, index) => (
            <tr key={`player-${index}`}>
              <td>{player}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default PlayerList;
