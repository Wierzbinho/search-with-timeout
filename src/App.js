import React, { Component } from 'react';
import {remove as removeDiacritics} from 'diacritics';
import './App.css';
import Search from './search';
import PlayerList from './player-list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {players: [
      '1. Wojciech Szczęsny',
      '12. Bartosz Białkowski',
      '22. Łukasz Fabiański',
      '2. Michał Pazdan',
      '3. Artur Jędrzejczyk',
      '4. Thiago Cionek',
      '5. Jan Bednarek',
      '15. Kamil Glik',
      '18. Bartosz Bereszyński',
      '20. Łukasz Piszczek',
      '6. Jacek Góralski',
      '8. Karol Linetty',
      '10. Grzegorz Krychowiak',
      '11. Kamil Grosicki',
      '13. Maciej Rybus',
      '16. Jakub Błaszczykowski',
      '17. Sławomir Peszko',
      '19. Piotr Zieliński',
      '21. Rafał Kurzawa',
      '7. Arkadiusz Milik',
      '9. Robert Lewandowski',
      '14. Łukasz Teodorczyk',
      '23. Dawid Kownacki'
    ],
    searchPhrase: ''
  };
  }

  getPlayersToDisplay = () => {
    const {searchPhrase} = this.state;

    if (!searchPhrase.length)
      return this.state.players;

    return this.state.players.filter(player => removeDiacritics(player.toLowerCase()).includes(searchPhrase.toLowerCase()));
  };

  filterPlayers = searchPhrase => {
    this.setState({searchPhrase});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search with timeout</h1>
        </header>
        <div>
          <Search onSearch={searchPhrase => this.filterPlayers(searchPhrase)}/>
        </div>
        <PlayerList players={this.getPlayersToDisplay()}/>
      </div>
    );
  }
}

export default App;
