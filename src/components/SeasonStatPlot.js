import React from 'react'
import config from '../config.js'
import Plot from 'react-plotly.js';

class SeasonStatPlot extends React.Component {
  constructor(props) {
    super(props);
  }

//   stat: "FG3M"

// stat_avg: 8.890243902439025

// stat_list: [12, 5, 11, 8, 11, 9, 13, 6, 10, 5, …] (43)

// stat_loss_avg: 8.35897435897436

// stat_win_avg: 9.372093023255815

  render() {
    const stat = this.props.stat;

    return (
      <Plot
        data={[
          {
            x: stat["stat_list"],
            type: 'histogram',
            marker: {color: this.props.plotColor},
          }
        ]}
        useResizeHandler={true}
        style={{width: "100%", height: "100%"}}
        layout={ 
          {
            barmode: "overlay",
            autosize: true,
            title: this.props.title + stat["stat"],
            shapes: [
              {
                type: 'line',
                xref: 'x',
                yref: 'paper',
                x0: stat["stat_win_avg"],
                y0: 0,
                x1: stat["stat_win_avg"],
                y1: 1,
                line: {
                  color: "MediumBlue",
                  width: 4,
                  dash: "dot",
                }
              },
              {
                type: 'line',
                xref: 'x',
                yref: 'paper',
                x0: stat["stat_loss_avg"],
                y0: 0,
                x1: stat["stat_loss_avg"],
                y1: 1,
                line: {
                  color: "MediumRed",
                  width: 4,
                  dash: "dot",
                }
              }
            ]
          }
        }
      />
    );
  }
}

export default SeasonStatPlot;