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
          const oppTeamLink = "/team?seasonId="+seasonId+"&teamId="+game["OPP_TEAM"]["TEAM_ID"]
          return (
            <GameItem 
              key={game["GAME_NUM"]} 
              game={game}
              onClick={() => window.location.href=link}
              onLogoClickUrl={oppTeamLink}>
            </GameItem>
          );
        })}
      </div>
    );
  }
}
export default GameLogGrid