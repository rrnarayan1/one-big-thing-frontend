import React from 'react';
import '../styles/GameItem.css';

class GameItem extends React.Component {
  render() {
    const game = this.props.game;
    const oppTeam = game["OPP_TEAM"]
    const pts = game["PTS"];
    const opp_pts = pts + game["PLUS_MINUS"];
    const score = String(pts)+"-"+String(opp_pts);
    return (
      <div className="GameItem">
        <div className="GameItem--container">
          <img className="GameItem--logo" src={oppTeam["LOGO"]} />
          <div className={game["WL"]==="W" ? "GameItem--win green" : "GameItem--win red"}>
            {game["WL"]}
          </div>
          <div className="GameItem--score">
            {score}
          </div>
        </div>
      </div>
    )
  }
}
export default GameItem;