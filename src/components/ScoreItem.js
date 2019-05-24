import React from 'react';
import '../styles/ScoreItem.css';

class ScoreItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.score;
    //const score = item.score;
    const score = 0;
    console.log((score+5)*10)
    const percent = getGreenToRed((score+5)*10)
    console.log(percent);
    return (
        <div className="ScoreItem" style={{background: percent}}>
            <div className="ScoreItem--Score">
                {score}
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