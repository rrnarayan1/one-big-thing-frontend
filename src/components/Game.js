import React from 'react'
import queryString from 'query-string';
import axios from 'axios';
import ScoreItem from './ScoreItem.js';
import ScoreItemGrid from './ScoreItemGrid.js';
import { Button } from 'react-bootstrap';
import '../styles/Game.css';


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.params = queryString.parse(this.props.location.search);
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:5000/score', {
      params: {
        seasonId : this.params.seasonId,
        teamId : this.params.teamId,
        gameId : this.params.gameId
      }
    })
      .then(response => {
         const data = response.data;
         this.setState({data: data});
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const data = this.state.data;
    if (data.game) {
      const game = data.game
      const obt = data.obt;
      const pts = data.stats["PTS"];
      const opp_pts = pts + game["PLUS_MINUS"];
      const score = String(pts)+"-"+String(opp_pts);
      const date = new Date(Date.parse(game["GAME_DATE"]));
      const date_str = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
      return (
        <div className="Game">
          <div className="Game--header">
            <div className="Game--header-left">
              <h2>{data.team["TEAM_NAME"]} 
                <span id="Game--header-opp-team"> vs <a id="Game--header-opp-team" href={"/game?seasonId="+this.params.seasonId+"&teamId="+data.opp_team["TEAM_ID"]+"&gameId="+this.params.gameId}>
                  {data.opp_team["TEAM_NAME"]}</a>
                 </span>
               </h2>
              <div className="Game--stats">
                {date_str + " | "}
                {game["WL"]+" | "}
                {score + " | "}
                {"Game " + game["GAME_NUM"]}
              </div>
            </div>
            <div className="Game--header-right">
              <ScoreItem
                score={obt.absolute.score}
                statName={obt.absolute.stat}>
              </ScoreItem>
            </div>
          </div>
          <div className="Game--content">
            <ScoreItemGrid
              scores={data.scores}
              stats={data.stats}
              showStatDefault={this.state.showStats}>
            </ScoreItemGrid>
            <Button
              className="Game--stats-button"
              variant="outline-secondary"
              onClick={() => this.setState({showStats: !this.state.showStats})}>
              Show All {this.state.showStats ? "Scores" : "Stats"}
            </Button>
          </div>
        </div>

      );
    }
    else {
      return null;
    }
  }
}
export default Game