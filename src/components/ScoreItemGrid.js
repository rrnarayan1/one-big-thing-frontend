import React from 'react';
import ScoreItem from './ScoreItem.js';
import '../styles/ScoreItemGrid.css';

class ScoreItemGrid extends React.Component {
  render() {
    const scores = this.props.scores;
    const stats = this.props.stats;
    return (
      <div className="ScoreItemGrid">
        {Object.keys(scores).map((key, index) => {
          const score = scores[key]
          const stat = stats[key]
          const statName = key
          return (
            <ScoreItem
              key={index}
              size="small"
              score={score}
              stat={stat}
              statName={statName}
              showStatDefault={this.props.showStatDefault}
              onHoverShowStat={true}>
            </ScoreItem>
          );
        })}
      </div>
    );
  }
}
export default ScoreItemGrid