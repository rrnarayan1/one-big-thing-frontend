import React from 'react'
import queryString from 'query-string';
import TeamSeasonLog from './TeamSeasonLog.js';

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.params = queryString.parse(this.props.location.search);
  }

  render() {
    const seasonId = this.params.seasonId;
    const teamId = this.params.teamId;
    const gameId = this.params.gameId;
    if (seasonId && teamId && !gameId) {
      return (
        <TeamSeasonLog
          seasonId={seasonId}
          teamId={teamId}>
        </TeamSeasonLog>)
    }
  }
}
export default Team;