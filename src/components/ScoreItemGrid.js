import React from 'react';
import ScoreItem from './ScoreItem.js';
import '../styles/ScoreItemGrid.css';

class ScoreItemGrid extends React.Component {
  render() {
    const scores = this.props.scores;
    return (
      <div className="ScoreItemGrid">
        {Object.keys(scores).map((key, index) => {
          const score = {score: scores[key], stat: key}
          return (
            <ScoreItem
              key={index}
              size="small"
              score={score}>
            </ScoreItem>);
        })}
      </div>
    );
  }
}
export default ScoreItemGrid