import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import moment from 'moment';
import '../styles/GameItem.css';
import ScoreItem from './ScoreItem'

class GameItem extends React.Component {
  render() {
    const game = this.props.game;
    const oppTeam = game["OPP_TEAM"]
    const pts = game["PTS"];
    const opp_pts = pts + game["PLUS_MINUS"];
    const score = String(pts)+"-"+String(opp_pts);
    const date = moment(game["GAME_DATE"])
    const obt = game["OBT"];

    return (
      <Row className="GameItem">
        <Col xs={1} className="GameItem--date">
          {date.format("ddd, MMM D")}
        </Col>
        <Col xs={3}>
          <a href={this.props.onLogoClickUrl}>
            <img className="GameItem--logo" src={oppTeam["LOGO"]} />
          </a>
        </Col>
        <Col className={"GameItem--score"}>
          <span className={game["WL"]==="W" ? "green" : "red"}> {game["WL"]} </span>
          {score}
        </Col>
        <Col xs={3}>
          <div className="GameItem--obt">
          <ScoreItem
            score={obt.default.score}
            statName={obt.default.stat}>
          </ScoreItem>
          </div>
        </Col>
        <Col className={"GameItem--button"}>
          <Button variant="outline-primary" onClick={this.props.onClick}> Show Scores </Button>
        </Col>
        <div className={"GameItem--border"}>&nbsp;</div>
      </Row>
    )
  }
}
export default GameItem;
