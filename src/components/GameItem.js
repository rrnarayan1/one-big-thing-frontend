import React from 'react';
import '../styles/GameItem.css';

class GameItem extends React.Component {
  render() {
    const game = this.props.game;
    const oppTeam = game["OPP_TEAM"]
    const pts = game["PTS"];
    const opp_pts = pts + game["PLUS_MINUS"];
    const score = String(pts)+"-"+String(opp_pts);
    const date = new Date(Date.parse(game["GAME_DATE"]));
    const date_str = date.getMonth() + "/" + date.getDate();
    return (
      <div className="GameItem" onClick={this.props.onClick}>
        <div className="GameItem--date"> 
          {date_str}
        </div>
        <img className="GameItem--logo" src={oppTeam["LOGO"]} />
        <div className={game["WL"]==="W" ? "GameItem--win green" : "GameItem--win red"}>
          {game["WL"]}
        </div>
        <div className="GameItem--score">
          {score}
        </div>
      </div>
    )
  }
}
export default GameItem;