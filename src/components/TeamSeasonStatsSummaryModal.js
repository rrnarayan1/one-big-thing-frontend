import React from 'react'
import config from '../config.js'
import { Modal } from 'react-bootstrap';
import Plot from 'react-plotly.js';
import SeasonStatPlot from './SeasonStatPlot'
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
          <SeasonStatPlot
            stat={winStat}
            title={"In games won, this stat helped the most:"}
            plotColor={"green"}>
          </SeasonStatPlot>
          <SeasonStatPlot
            stat={lossStat}
            title={"In games lost, this stat hurt the most:"}
            plotColor={"red"}>
          </SeasonStatPlot>

        </Modal.Body>
      </Modal>
    );
  }
}
export default TeamSeasonStatsSummaryModal;