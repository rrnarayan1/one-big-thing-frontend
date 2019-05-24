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
    axios.get('http://35.203.94.32:5000/score', {
      params: {
        seasonId : this.params.seasonId,
        teamId : this.params.teamId,
        gameId : this.params.gameId
      }
    })
      .then(response => {
         const data = response.data;
         console.log(data);
         this.setState(data);
      })
      .catch(error => {
        console.log(error);
      })
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