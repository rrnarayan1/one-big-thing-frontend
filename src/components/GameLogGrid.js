import React from 'react';
import GameItem from './GameItem'
import '../styles/GameLogGrid.css';

class GameLogGrid extends React.Component {
  render() {
    const games = this.props.games;
    return (
      <div className="GameLogGrid">
        {games.map(game => {
          console.log(game)
          return (
            <GameItem key={game["GAME_NUM"]} game={game}> </GameItem>
          );
        })}
      </div>
    );
  }
}
export default GameLogGrid