import React from 'react'
import config from '../config.js'
import { Modal } from 'react-bootstrap';
import Plot from 'react-plotly.js';
import '../styles/TeamSeasonStatsSummaryModal.css';

class TeamSeasonStatsSummaryModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const winStat = this.props.winStat;
    const lossStat = this.props.lossStat;
    return (
      <Modal 
        className="TeamSeasonStatsSummaryModal"
        dialogClassName="TeamSeasonStatsSummaryModal--dialog"
        size="lg"
        show={this.props.show} 
        onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Season Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Plot
            data={[
              {
                x: winStat["stat_list"],
                type: 'histogram',
                marker: {color: 'green'},
              },
              {
                x: [winStat["stat_loss_avg"]],
                y: [20],
                width: 0.1,
                type: 'bar',
              },
              {
                x: [winStat["stat_avg"]],
                y: [20],
                width: 0.1,
                type: 'bar',
              },
              {
                x: [winStat["stat_win_avg"]],
                y: [20],
                width: 0.1,
                type: 'bar',
              }
            ]}
            layout={ {width: 640, height: 480, barmode: "overlay", title: 'Winning Stat'} }
          />

        </Modal.Body>
      </Modal>
    );
  }
}
export default TeamSeasonStatsSummaryModal;