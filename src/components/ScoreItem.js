import React from 'react';
import '../styles/ScoreItem.css';

class ScoreItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {display: this.props.score.score}
  }
  render() {
    const item = this.props.score;
    const isSmall = this.props.size === "small";
    const score = item.score;
    const stat = this.props.stat;
    const useHover = this.props.onHoverShowStat;
    const percent = getGreenToRed((score+5)*10);
    return (
      <div 
        className={isSmall ? "ScoreItem small" : "ScoreItem"}
        style={{background: percent}}
        onMouseEnter={() => useHover ? this.setState({display: stat}) : null}
        onMouseLeave={() => useHover ? this.setState({display: score}) : null}
        >
        <div className="ScoreItem--Score">
          {this.state.display}
        </div>
        <div className="ScoreItem--Stat">
          {item.stat}
        </div>
      </div>
    );
  }
}
export default ScoreItem

function getGreenToRed(percent){
    const r = percent<50 ? 255 : Math.floor(255-(percent*2-100)*255/100);
    const g = percent>50 ? 255 : Math.floor((percent*2)*255/100);
    return "rgb("+r+","+g+",0)";
}