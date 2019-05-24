import React from 'react'
import queryString from 'query-string';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import ScoreItem from './ScoreItem.js';
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
    // axios.get('http://35.203.94.32:5000/score', {
    //   params: {
    //     seasonId : this.params.seasonId,
    //     teamId : this.params.teamId,
    //     gameId : this.params.gameId
    //   }
    // })
    //   .then(response => {
    //      const data = response.data;
    //      console.log(data);
    //      this.setState(data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
    const data = {"data":"22016","game":{"AST":21.0,"BLK":1.0,"DREB":33.0,"FG3A":27.0,"FG3M":9.0,"FG3_PCT":0.333,"FGA":77.0,"FGM":34.0,"FG_PCT":0.442,"FTA":31.0,"FTM":19.0,"FT_PCT":0.613,"GAME_DATE":"Sun, 05 Mar 2017 00:00:00 GMT","GAME_ID":"0021600927","GAME_NUM":62,"MATCHUP":"ATL vs. IND","OREB":11.0,"PF":19.0,"PLUS_MINUS":-1.0,"PTS":96.0,"REB":44.0,"SEASON_ID":"22016","STL":12.0,"TEAM_ABBREVIATION":"ATL","TEAM_ID":"1610612737","TEAM_NAME":"Atlanta Hawks","TOV":15.0,"WL":"L"},"obt":{"absolute":{"score":-1.65,"stat":"BLK"},"negative":{"score":-1.65,"stat":"BLK"},"positive":{"score":1.17,"stat":"STL"}},"portion":"before","scores":{"AST":-0.55,"BLK":-1.65,"DREB":-0.18,"FG3A":0.25,"FG3M":0.07,"FG3_PCT":-0.11,"FGA":-1.01,"FGM":-0.83,"FG_PCT":-0.26,"FTA":0.78,"FTM":0.2,"FT_PCT":-1.07,"OREB":0.25,"PTS":-0.61,"REB":-0.01,"STL":1.17,"TOV":-0.1}}

    this.setState(data);
  }

  render() {
    const game = this.state.game;
    if (game) {
      console.log(this.state)
      const obt = this.state.obt;
      const pts = game["PTS"];
      const opp_pts = pts + game["PLUS_MINUS"];
      const score = String(pts)+"-"+String(opp_pts);
      const date = new Date(Date.parse(game["GAME_DATE"]));
      const date_str = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();

      return (
        <div className="Game">
          <Row className="Game--header">
            <Col>
              <h2>{game["TEAM_NAME"]}</h2>
              <div className="Game--stats">
                {date_str + " | "}
                {game["WL"]+" | "}
                {score + " | "}
                {"Game " + game["GAME_NUM"]}
              </div>
            </Col>
            <Col  xs={2}>
              <ScoreItem
                className="Game--obt"
                score={obt.absolute}>
              </ScoreItem>
            </Col>
          </Row>
        </div>

      );
    }
    else {
      return null;
    }
  }
}
export default Game