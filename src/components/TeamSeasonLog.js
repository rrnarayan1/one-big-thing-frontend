import React from 'react'
import axios from 'axios';
import config from '../config.js'
import GameLogGrid from './GameLogGrid'
import '../styles/TeamSeasonLog.css';

class TeamSeasonLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    axios.get(config.backendBase+'/games', {
      params: {
        seasonId : this.props.seasonId,
        teamId : this.props.teamId,
        withOBT: true,
      }
    })
      .then(response => {
         const data = response.data;
         this.setState({data: data});
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const data = this.state.data;
    if (data.team) {
      console.log(data)
      const team = data.team;
      return (
        <div className="TeamSeasonLog">
         <div className="TeamSeasonLog--header">
           <div className="TeamSeasonLog--header-left">
             <img src={team["LOGO"]} />
             <h2> {team["TEAM_NAME"]} </h2>
           </div>
           <div className="TeamSeasonLog--header-right">
             {this.props.seasonId}
           </div>
         </div>
         <div className="TeamSeasonLog--content">
           <GameLogGrid games={data.games}> </GameLogGrid>
         </div>
        </div>
      )
    } else {
      return null;
    }
  }
}
export default TeamSeasonLog;