import React from 'react';
import GameItem from './GameItem'
import '../styles/GameLogGrid.css';

class GameLogGrid extends React.Component {
  render() {
    const games = this.props.games;
    return (
      <div className="GameLogGrid">
        {games.map(game => {
          const seasonId = game["SEASON_ID"];
          const teamId = game["TEAM_ID"];
          const gameId = game["GAME_ID"];
          const link = "/game?seasonId="+seasonId+"&teamId="+teamId+"&gameId="+gameId
          return (
            <GameItem 
              key={game["GAME_NUM"]} 
              game={game}
              onClick={() => window.location.href=link}>
            </GameItem>
          );
        })}
      </div>
    );
  }
}
export default GameLogGrid