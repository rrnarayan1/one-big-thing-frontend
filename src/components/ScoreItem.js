import React from 'react';
import '../styles/ScoreItem.css';

class ScoreItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {display: this.props.showStatDefault ? this.props.stat : this.props.score}
  }

  componentDidUpdate(prevProps) {
    if (this.props.showStatDefault !== prevProps.showStatDefault) {
      this.setState({display: this.props.showStatDefault ? this.props.stat : this.props.score})
    }
  }

  render() {
    const isLarge = this.props.size === "large";
    const showStatDefault = this.props.showStatDefault;
    const display = showStatDefault ? this.props.stat : this.props.score;
    const hover = showStatDefault ? this.props.score : this.props.stat;
    const statName = this.props.statName;
    const useHover = this.props.onHoverShowStat;
    const percent = getGreenToRed((this.props.score+5)*10);
    return (
      <div
        className={isLarge ? "ScoreItem " + this.props.size : "ScoreItem"}
        style={{background: percent}}
        onMouseEnter={() => useHover ? this.setState({display: hover}) : null}
        onMouseLeave={() => useHover ? this.setState({display: display}) : null}
        >
        <div className="ScoreItem--Score">
          {this.state.display}
        </div>
        <div className="ScoreItem--StatName">
          {statName}
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
