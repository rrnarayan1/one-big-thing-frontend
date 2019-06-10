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
    // axios.get(config.backendBase+'/games', {
    //   params: {
    //     seasonId : this.props.seasonId,
    //     teamId : this.props.teamId,
    //   }
    // })
    //   .then(response => {
    //      const data = response.data;
    //      this.setState({data: data});
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
    const data = {"games": [
        {
            "GAME_DATE": "Thu, 27 Oct 2016 00:00:00 GMT",
            "GAME_ID": "0021600014",
            "GAME_NUM": 1,
            "MATCHUP": "ATL vs. WAS",
            "OPP_TEAM": {
                "LOCATION": "Washington",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/WAS_logo.svg",
                "SIMPLE_NAME": "Wizards",
                "TEAM_ABBREVIATION": "WAS",
                "TEAM_ID": "1610612764",
                "TEAM_NAME": "Washington Wizards"
            },
            "PLUS_MINUS": 15,
            "PTS": 114,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Sat, 29 Oct 2016 00:00:00 GMT",
            "GAME_ID": "0021600026",
            "GAME_NUM": 2,
            "MATCHUP": "ATL @ PHI",
            "OPP_TEAM": {
                "LOCATION": "Philadelphia",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/PHI_logo.svg",
                "SIMPLE_NAME": "76ers",
                "TEAM_ABBREVIATION": "PHI",
                "TEAM_ID": "1610612755",
                "TEAM_NAME": "Philadelphia 76ers"
            },
            "PLUS_MINUS": 32,
            "PTS": 104,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Mon, 31 Oct 2016 00:00:00 GMT",
            "GAME_ID": "0021600044",
            "GAME_NUM": 3,
            "MATCHUP": "ATL vs. SAC",
            "OPP_TEAM": {
                "LOCATION": "Sacramento",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/SAC_logo.svg",
                "SIMPLE_NAME": "Kings",
                "TEAM_ABBREVIATION": "SAC",
                "TEAM_ID": "1610612758",
                "TEAM_NAME": "Sacramento Kings"
            },
            "PLUS_MINUS": 11,
            "PTS": 106,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Wed, 02 Nov 2016 00:00:00 GMT",
            "GAME_ID": "0021600059",
            "GAME_NUM": 4,
            "MATCHUP": "ATL vs. LAL",
            "OPP_TEAM": {
                "LOCATION": "Los Angeles",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/LAL_logo.svg",
                "SIMPLE_NAME": "Lakers",
                "TEAM_ABBREVIATION": "LAL",
                "TEAM_ID": "1610612747",
                "TEAM_NAME": "Los Angeles Lakers"
            },
            "PLUS_MINUS": -7,
            "PTS": 116,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Fri, 04 Nov 2016 00:00:00 GMT",
            "GAME_ID": "0021600070",
            "GAME_NUM": 5,
            "MATCHUP": "ATL @ WAS",
            "OPP_TEAM": {
                "LOCATION": "Washington",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/WAS_logo.svg",
                "SIMPLE_NAME": "Wizards",
                "TEAM_ABBREVIATION": "WAS",
                "TEAM_ID": "1610612764",
                "TEAM_NAME": "Washington Wizards"
            },
            "PLUS_MINUS": -3,
            "PTS": 92,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Sat, 05 Nov 2016 00:00:00 GMT",
            "GAME_ID": "0021600084",
            "GAME_NUM": 6,
            "MATCHUP": "ATL vs. HOU",
            "OPP_TEAM": {
                "LOCATION": "Houston",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/HOU_logo.svg",
                "SIMPLE_NAME": "Rockets",
                "TEAM_ABBREVIATION": "HOU",
                "TEAM_ID": "1610612745",
                "TEAM_NAME": "Houston Rockets"
            },
            "PLUS_MINUS": 15,
            "PTS": 112,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Tue, 08 Nov 2016 00:00:00 GMT",
            "GAME_ID": "0021600100",
            "GAME_NUM": 7,
            "MATCHUP": "ATL @ CLE",
            "OPP_TEAM": {
                "LOCATION": "Cleveland",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/CLE_logo.svg",
                "SIMPLE_NAME": "Cavaliers",
                "TEAM_ABBREVIATION": "CLE",
                "TEAM_ID": "1610612739",
                "TEAM_NAME": "Cleveland Cavaliers"
            },
            "PLUS_MINUS": 4,
            "PTS": 110,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Wed, 09 Nov 2016 00:00:00 GMT",
            "GAME_ID": "0021600111",
            "GAME_NUM": 8,
            "MATCHUP": "ATL vs. CHI",
            "OPP_TEAM": {
                "LOCATION": "Chicago",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/CHI_logo.svg",
                "SIMPLE_NAME": "Bulls",
                "TEAM_ABBREVIATION": "CHI",
                "TEAM_ID": "1610612741",
                "TEAM_NAME": "Chicago Bulls"
            },
            "PLUS_MINUS": 8,
            "PTS": 115,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Sat, 12 Nov 2016 00:00:00 GMT",
            "GAME_ID": "0021600132",
            "GAME_NUM": 9,
            "MATCHUP": "ATL vs. PHI",
            "OPP_TEAM": {
                "LOCATION": "Philadelphia",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/PHI_logo.svg",
                "SIMPLE_NAME": "76ers",
                "TEAM_ABBREVIATION": "PHI",
                "TEAM_ID": "1610612755",
                "TEAM_NAME": "Philadelphia 76ers"
            },
            "PLUS_MINUS": 21,
            "PTS": 117,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Tue, 15 Nov 2016 00:00:00 GMT",
            "GAME_ID": "0021600154",
            "GAME_NUM": 10,
            "MATCHUP": "ATL @ MIA",
            "OPP_TEAM": {
                "LOCATION": "Miami",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/MIA_logo.svg",
                "SIMPLE_NAME": "Heat",
                "TEAM_ABBREVIATION": "MIA",
                "TEAM_ID": "1610612748",
                "TEAM_NAME": "Miami Heat"
            },
            "PLUS_MINUS": 3,
            "PTS": 93,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Wed, 16 Nov 2016 00:00:00 GMT",
            "GAME_ID": "0021600163",
            "GAME_NUM": 11,
            "MATCHUP": "ATL vs. MIL",
            "OPP_TEAM": {
                "LOCATION": "Milwaukee",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/MIL_logo.svg",
                "SIMPLE_NAME": "Bucks",
                "TEAM_ABBREVIATION": "MIL",
                "TEAM_ID": "1610612749",
                "TEAM_NAME": "Milwaukee Bucks"
            },
            "PLUS_MINUS": 7,
            "PTS": 107,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Fri, 18 Nov 2016 00:00:00 GMT",
            "GAME_ID": "0021600174",
            "GAME_NUM": 12,
            "MATCHUP": "ATL @ CHA",
            "OPP_TEAM": {
                "LOCATION": "Charlotte",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/CHA_logo.svg",
                "SIMPLE_NAME": "Hornets",
                "TEAM_ABBREVIATION": "CHA",
                "TEAM_ID": "1610612766",
                "TEAM_NAME": "Charlotte Hornets"
            },
            "PLUS_MINUS": -4,
            "PTS": 96,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Sun, 20 Nov 2016 00:00:00 GMT",
            "GAME_ID": "0021600193",
            "GAME_NUM": 13,
            "MATCHUP": "ATL @ NYK",
            "OPP_TEAM": {
                "LOCATION": "New York",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/NYK_logo.svg",
                "SIMPLE_NAME": "Knicks",
                "TEAM_ABBREVIATION": "NYK",
                "TEAM_ID": "1610612752",
                "TEAM_NAME": "New York Knicks"
            },
            "PLUS_MINUS": -10,
            "PTS": 94,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Tue, 22 Nov 2016 00:00:00 GMT",
            "GAME_ID": "0021600209",
            "GAME_NUM": 14,
            "MATCHUP": "ATL vs. NOP",
            "OPP_TEAM": {
                "LOCATION": "New Orleans",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/NOP_logo.svg",
                "SIMPLE_NAME": "Pelicans",
                "TEAM_ABBREVIATION": "NOP",
                "TEAM_ID": "1610612740",
                "TEAM_NAME": "New Orleans Pelicans"
            },
            "PLUS_MINUS": -18,
            "PTS": 94,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Wed, 23 Nov 2016 00:00:00 GMT",
            "GAME_ID": "0021600216",
            "GAME_NUM": 15,
            "MATCHUP": "ATL @ IND",
            "OPP_TEAM": {
                "LOCATION": "Indiana",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/IND_logo.svg",
                "SIMPLE_NAME": "Pacers",
                "TEAM_ABBREVIATION": "IND",
                "TEAM_ID": "1610612754",
                "TEAM_NAME": "Indiana Pacers"
            },
            "PLUS_MINUS": 11,
            "PTS": 96,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Fri, 25 Nov 2016 00:00:00 GMT",
            "GAME_ID": "0021600231",
            "GAME_NUM": 16,
            "MATCHUP": "ATL @ UTA",
            "OPP_TEAM": {
                "LOCATION": "Utah",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/UTA_logo.svg",
                "SIMPLE_NAME": "Jazz",
                "TEAM_ABBREVIATION": "UTA",
                "TEAM_ID": "1610612762",
                "TEAM_NAME": "Utah Jazz"
            },
            "PLUS_MINUS": -27,
            "PTS": 68,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Sun, 27 Nov 2016 00:00:00 GMT",
            "GAME_ID": "0021600252",
            "GAME_NUM": 17,
            "MATCHUP": "ATL @ LAL",
            "OPP_TEAM": {
                "LOCATION": "Los Angeles",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/LAL_logo.svg",
                "SIMPLE_NAME": "Lakers",
                "TEAM_ABBREVIATION": "LAL",
                "TEAM_ID": "1610612747",
                "TEAM_NAME": "Los Angeles Lakers"
            },
            "PLUS_MINUS": -15,
            "PTS": 94,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Mon, 28 Nov 2016 00:00:00 GMT",
            "GAME_ID": "0021600259",
            "GAME_NUM": 18,
            "MATCHUP": "ATL @ GSW",
            "OPP_TEAM": {
                "LOCATION": "Golden State",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/GSW_logo.svg",
                "SIMPLE_NAME": "Warriors",
                "TEAM_ABBREVIATION": "GSW",
                "TEAM_ID": "1610612744",
                "TEAM_NAME": "Golden State Warriors"
            },
            "PLUS_MINUS": -5,
            "PTS": 100,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Wed, 30 Nov 2016 00:00:00 GMT",
            "GAME_ID": "0021600274",
            "GAME_NUM": 19,
            "MATCHUP": "ATL @ PHX",
            "OPP_TEAM": {
                "LOCATION": "Phoenix",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/PHX_logo.svg",
                "SIMPLE_NAME": "Suns",
                "TEAM_ABBREVIATION": "PHX",
                "TEAM_ID": "1610612756",
                "TEAM_NAME": "Phoenix Suns"
            },
            "PLUS_MINUS": -2,
            "PTS": 107,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Fri, 02 Dec 2016 00:00:00 GMT",
            "GAME_ID": "0021600288",
            "GAME_NUM": 20,
            "MATCHUP": "ATL vs. DET",
            "OPP_TEAM": {
                "LOCATION": "Detroit",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/DET_logo.svg",
                "SIMPLE_NAME": "Pistons",
                "TEAM_ABBREVIATION": "DET",
                "TEAM_ID": "1610612765",
                "TEAM_NAME": "Detroit Pistons"
            },
            "PLUS_MINUS": -36,
            "PTS": 85,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Sat, 03 Dec 2016 00:00:00 GMT",
            "GAME_ID": "0021600293",
            "GAME_NUM": 21,
            "MATCHUP": "ATL @ TOR",
            "OPP_TEAM": {
                "LOCATION": "Toronto",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/TOR_logo.svg",
                "SIMPLE_NAME": "Raptors",
                "TEAM_ABBREVIATION": "TOR",
                "TEAM_ID": "1610612761",
                "TEAM_NAME": "Toronto Raptors"
            },
            "PLUS_MINUS": -44,
            "PTS": 84,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Mon, 05 Dec 2016 00:00:00 GMT",
            "GAME_ID": "0021600307",
            "GAME_NUM": 22,
            "MATCHUP": "ATL vs. OKC",
            "OPP_TEAM": {
                "LOCATION": "Oklahoma City",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/OKC_logo.svg",
                "SIMPLE_NAME": "Thunder",
                "TEAM_ABBREVIATION": "OKC",
                "TEAM_ID": "1610612760",
                "TEAM_NAME": "Oklahoma City Thunder"
            },
            "PLUS_MINUS": -3,
            "PTS": 99,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Wed, 07 Dec 2016 00:00:00 GMT",
            "GAME_ID": "0021600324",
            "GAME_NUM": 23,
            "MATCHUP": "ATL vs. MIA",
            "OPP_TEAM": {
                "LOCATION": "Miami",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/MIA_logo.svg",
                "SIMPLE_NAME": "Heat",
                "TEAM_ABBREVIATION": "MIA",
                "TEAM_ID": "1610612748",
                "TEAM_NAME": "Miami Heat"
            },
            "PLUS_MINUS": 8,
            "PTS": 103,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Fri, 09 Dec 2016 00:00:00 GMT",
            "GAME_ID": "0021600340",
            "GAME_NUM": 24,
            "MATCHUP": "ATL @ MIL",
            "OPP_TEAM": {
                "LOCATION": "Milwaukee",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/MIL_logo.svg",
                "SIMPLE_NAME": "Bucks",
                "TEAM_ABBREVIATION": "MIL",
                "TEAM_ID": "1610612749",
                "TEAM_NAME": "Milwaukee Bucks"
            },
            "PLUS_MINUS": 4,
            "PTS": 114,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Tue, 13 Dec 2016 00:00:00 GMT",
            "GAME_ID": "0021600369",
            "GAME_NUM": 25,
            "MATCHUP": "ATL vs. ORL",
            "OPP_TEAM": {
                "LOCATION": "Orlando",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/ORL_logo.svg",
                "SIMPLE_NAME": "Magic",
                "TEAM_ABBREVIATION": "ORL",
                "TEAM_ID": "1610612753",
                "TEAM_NAME": "Orlando Magic"
            },
            "PLUS_MINUS": -11,
            "PTS": 120,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Fri, 16 Dec 2016 00:00:00 GMT",
            "GAME_ID": "0021600392",
            "GAME_NUM": 26,
            "MATCHUP": "ATL @ TOR",
            "OPP_TEAM": {
                "LOCATION": "Toronto",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/TOR_logo.svg",
                "SIMPLE_NAME": "Raptors",
                "TEAM_ABBREVIATION": "TOR",
                "TEAM_ID": "1610612761",
                "TEAM_NAME": "Toronto Raptors"
            },
            "PLUS_MINUS": 4,
            "PTS": 125,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Sat, 17 Dec 2016 00:00:00 GMT",
            "GAME_ID": "0021600401",
            "GAME_NUM": 27,
            "MATCHUP": "ATL vs. CHA",
            "OPP_TEAM": {
                "LOCATION": "Charlotte",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/CHA_logo.svg",
                "SIMPLE_NAME": "Hornets",
                "TEAM_ABBREVIATION": "CHA",
                "TEAM_ID": "1610612766",
                "TEAM_NAME": "Charlotte Hornets"
            },
            "PLUS_MINUS": -8,
            "PTS": 99,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Mon, 19 Dec 2016 00:00:00 GMT",
            "GAME_ID": "0021600415",
            "GAME_NUM": 28,
            "MATCHUP": "ATL @ OKC",
            "OPP_TEAM": {
                "LOCATION": "Oklahoma City",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/OKC_logo.svg",
                "SIMPLE_NAME": "Thunder",
                "TEAM_ABBREVIATION": "OKC",
                "TEAM_ID": "1610612760",
                "TEAM_NAME": "Oklahoma City Thunder"
            },
            "PLUS_MINUS": 2,
            "PTS": 110,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Wed, 21 Dec 2016 00:00:00 GMT",
            "GAME_ID": "0021600430",
            "GAME_NUM": 29,
            "MATCHUP": "ATL vs. MIN",
            "OPP_TEAM": {
                "LOCATION": "Minnesota",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/MIN_logo.svg",
                "SIMPLE_NAME": "Timberwolves",
                "TEAM_ABBREVIATION": "MIN",
                "TEAM_ID": "1610612750",
                "TEAM_NAME": "Minnesota Timberwolves"
            },
            "PLUS_MINUS": -8,
            "PTS": 84,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Fri, 23 Dec 2016 00:00:00 GMT",
            "GAME_ID": "0021600451",
            "GAME_NUM": 30,
            "MATCHUP": "ATL @ DEN",
            "OPP_TEAM": {
                "LOCATION": "Denver",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/DEN_logo.svg",
                "SIMPLE_NAME": "Nuggets",
                "TEAM_ABBREVIATION": "DEN",
                "TEAM_ID": "1610612743",
                "TEAM_NAME": "Denver Nuggets"
            },
            "PLUS_MINUS": 1,
            "PTS": 109,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Mon, 26 Dec 2016 00:00:00 GMT",
            "GAME_ID": "0021600468",
            "GAME_NUM": 31,
            "MATCHUP": "ATL @ MIN",
            "OPP_TEAM": {
                "LOCATION": "Minnesota",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/MIN_logo.svg",
                "SIMPLE_NAME": "Timberwolves",
                "TEAM_ABBREVIATION": "MIN",
                "TEAM_ID": "1610612750",
                "TEAM_NAME": "Minnesota Timberwolves"
            },
            "PLUS_MINUS": -14,
            "PTS": 90,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Wed, 28 Dec 2016 00:00:00 GMT",
            "GAME_ID": "0021600478",
            "GAME_NUM": 32,
            "MATCHUP": "ATL vs. NYK",
            "OPP_TEAM": {
                "LOCATION": "New York",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/NYK_logo.svg",
                "SIMPLE_NAME": "Knicks",
                "TEAM_ABBREVIATION": "NYK",
                "TEAM_ID": "1610612752",
                "TEAM_NAME": "New York Knicks"
            },
            "PLUS_MINUS": 4,
            "PTS": 102,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Fri, 30 Dec 2016 00:00:00 GMT",
            "GAME_ID": "0021600498",
            "GAME_NUM": 33,
            "MATCHUP": "ATL vs. DET",
            "OPP_TEAM": {
                "LOCATION": "Detroit",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/DET_logo.svg",
                "SIMPLE_NAME": "Pistons",
                "TEAM_ABBREVIATION": "DET",
                "TEAM_ID": "1610612765",
                "TEAM_NAME": "Detroit Pistons"
            },
            "PLUS_MINUS": 7,
            "PTS": 105,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Sun, 01 Jan 2017 00:00:00 GMT",
            "GAME_ID": "0021600508",
            "GAME_NUM": 34,
            "MATCHUP": "ATL vs. SAS",
            "OPP_TEAM": {
                "LOCATION": "San Antonio",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/SAS_logo.svg",
                "SIMPLE_NAME": "Spurs",
                "TEAM_ABBREVIATION": "SAS",
                "TEAM_ID": "1610612759",
                "TEAM_NAME": "San Antonio Spurs"
            },
            "PLUS_MINUS": 2,
            "PTS": 114,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Wed, 04 Jan 2017 00:00:00 GMT",
            "GAME_ID": "0021600530",
            "GAME_NUM": 35,
            "MATCHUP": "ATL @ ORL",
            "OPP_TEAM": {
                "LOCATION": "Orlando",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/ORL_logo.svg",
                "SIMPLE_NAME": "Magic",
                "TEAM_ABBREVIATION": "ORL",
                "TEAM_ID": "1610612753",
                "TEAM_NAME": "Orlando Magic"
            },
            "PLUS_MINUS": 19,
            "PTS": 111,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Thu, 05 Jan 2017 00:00:00 GMT",
            "GAME_ID": "0021600539",
            "GAME_NUM": 36,
            "MATCHUP": "ATL @ NOP",
            "OPP_TEAM": {
                "LOCATION": "New Orleans",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/NOP_logo.svg",
                "SIMPLE_NAME": "Pelicans",
                "TEAM_ABBREVIATION": "NOP",
                "TEAM_ID": "1610612740",
                "TEAM_NAME": "New Orleans Pelicans"
            },
            "PLUS_MINUS": 5,
            "PTS": 99,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Sat, 07 Jan 2017 00:00:00 GMT",
            "GAME_ID": "0021600557",
            "GAME_NUM": 37,
            "MATCHUP": "ATL @ DAL",
            "OPP_TEAM": {
                "LOCATION": "Dallas",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/DAL_logo.svg",
                "SIMPLE_NAME": "Mavericks",
                "TEAM_ABBREVIATION": "DAL",
                "TEAM_ID": "1610612742",
                "TEAM_NAME": "Dallas Mavericks"
            },
            "PLUS_MINUS": 15,
            "PTS": 97,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Tue, 10 Jan 2017 00:00:00 GMT",
            "GAME_ID": "0021600573",
            "GAME_NUM": 38,
            "MATCHUP": "ATL @ BKN",
            "OPP_TEAM": {
                "LOCATION": "Brooklyn",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/BKN_logo.svg",
                "SIMPLE_NAME": "Nets",
                "TEAM_ABBREVIATION": "BKN",
                "TEAM_ID": "1610612751",
                "TEAM_NAME": "Brooklyn Nets"
            },
            "PLUS_MINUS": 20,
            "PTS": 117,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Fri, 13 Jan 2017 00:00:00 GMT",
            "GAME_ID": "0021600597",
            "GAME_NUM": 39,
            "MATCHUP": "ATL vs. BOS",
            "OPP_TEAM": {
                "LOCATION": "Boston",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/BOS_logo.svg",
                "SIMPLE_NAME": "Celtics",
                "TEAM_ABBREVIATION": "BOS",
                "TEAM_ID": "1610612738",
                "TEAM_NAME": "Boston Celtics"
            },
            "PLUS_MINUS": -2,
            "PTS": 101,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Sun, 15 Jan 2017 00:00:00 GMT",
            "GAME_ID": "0021600607",
            "GAME_NUM": 40,
            "MATCHUP": "ATL vs. MIL",
            "OPP_TEAM": {
                "LOCATION": "Milwaukee",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/MIL_logo.svg",
                "SIMPLE_NAME": "Bucks",
                "TEAM_ABBREVIATION": "MIL",
                "TEAM_ID": "1610612749",
                "TEAM_NAME": "Milwaukee Bucks"
            },
            "PLUS_MINUS": 13,
            "PTS": 111,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Mon, 16 Jan 2017 00:00:00 GMT",
            "GAME_ID": "0021600613",
            "GAME_NUM": 41,
            "MATCHUP": "ATL @ NYK",
            "OPP_TEAM": {
                "LOCATION": "New York",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/NYK_logo.svg",
                "SIMPLE_NAME": "Knicks",
                "TEAM_ABBREVIATION": "NYK",
                "TEAM_ID": "1610612752",
                "TEAM_NAME": "New York Knicks"
            },
            "PLUS_MINUS": 1,
            "PTS": 108,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Wed, 18 Jan 2017 00:00:00 GMT",
            "GAME_ID": "0021600633",
            "GAME_NUM": 42,
            "MATCHUP": "ATL @ DET",
            "OPP_TEAM": {
                "LOCATION": "Detroit",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/DET_logo.svg",
                "SIMPLE_NAME": "Pistons",
                "TEAM_ABBREVIATION": "DET",
                "TEAM_ID": "1610612765",
                "TEAM_NAME": "Detroit Pistons"
            },
            "PLUS_MINUS": -23,
            "PTS": 95,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Fri, 20 Jan 2017 00:00:00 GMT",
            "GAME_ID": "0021600647",
            "GAME_NUM": 43,
            "MATCHUP": "ATL vs. CHI",
            "OPP_TEAM": {
                "LOCATION": "Chicago",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/CHI_logo.svg",
                "SIMPLE_NAME": "Bulls",
                "TEAM_ABBREVIATION": "CHI",
                "TEAM_ID": "1610612741",
                "TEAM_NAME": "Chicago Bulls"
            },
            "PLUS_MINUS": 9,
            "PTS": 102,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Sat, 21 Jan 2017 00:00:00 GMT",
            "GAME_ID": "0021600653",
            "GAME_NUM": 44,
            "MATCHUP": "ATL vs. PHI",
            "OPP_TEAM": {
                "LOCATION": "Philadelphia",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/PHI_logo.svg",
                "SIMPLE_NAME": "76ers",
                "TEAM_ABBREVIATION": "PHI",
                "TEAM_ID": "1610612755",
                "TEAM_NAME": "Philadelphia 76ers"
            },
            "PLUS_MINUS": 17,
            "PTS": 110,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Mon, 23 Jan 2017 00:00:00 GMT",
            "GAME_ID": "0021600667",
            "GAME_NUM": 45,
            "MATCHUP": "ATL vs. LAC",
            "OPP_TEAM": {
                "LOCATION": "Los Angeles",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/LAC_logo.svg",
                "SIMPLE_NAME": "Clippers",
                "TEAM_ABBREVIATION": "LAC",
                "TEAM_ID": "1610612746",
                "TEAM_NAME": "Los Angeles Clippers"
            },
            "PLUS_MINUS": -10,
            "PTS": 105,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Wed, 25 Jan 2017 00:00:00 GMT",
            "GAME_ID": "0021600683",
            "GAME_NUM": 46,
            "MATCHUP": "ATL @ CHI",
            "OPP_TEAM": {
                "LOCATION": "Chicago",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/CHI_logo.svg",
                "SIMPLE_NAME": "Bulls",
                "TEAM_ABBREVIATION": "CHI",
                "TEAM_ID": "1610612741",
                "TEAM_NAME": "Chicago Bulls"
            },
            "PLUS_MINUS": 5,
            "PTS": 119,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Fri, 27 Jan 2017 00:00:00 GMT",
            "GAME_ID": "0021600702",
            "GAME_NUM": 47,
            "MATCHUP": "ATL vs. WAS",
            "OPP_TEAM": {
                "LOCATION": "Washington",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/WAS_logo.svg",
                "SIMPLE_NAME": "Wizards",
                "TEAM_ABBREVIATION": "WAS",
                "TEAM_ID": "1610612764",
                "TEAM_NAME": "Washington Wizards"
            },
            "PLUS_MINUS": -26,
            "PTS": 86,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Sun, 29 Jan 2017 00:00:00 GMT",
            "GAME_ID": "0021600711",
            "GAME_NUM": 48,
            "MATCHUP": "ATL vs. NYK",
            "OPP_TEAM": {
                "LOCATION": "New York",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/NYK_logo.svg",
                "SIMPLE_NAME": "Knicks",
                "TEAM_ABBREVIATION": "NYK",
                "TEAM_ID": "1610612752",
                "TEAM_NAME": "New York Knicks"
            },
            "PLUS_MINUS": 3,
            "PTS": 142,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Wed, 01 Feb 2017 00:00:00 GMT",
            "GAME_ID": "0021600734",
            "GAME_NUM": 49,
            "MATCHUP": "ATL @ MIA",
            "OPP_TEAM": {
                "LOCATION": "Miami",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/MIA_logo.svg",
                "SIMPLE_NAME": "Heat",
                "TEAM_ABBREVIATION": "MIA",
                "TEAM_ID": "1610612748",
                "TEAM_NAME": "Miami Heat"
            },
            "PLUS_MINUS": -23,
            "PTS": 93,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Thu, 02 Feb 2017 00:00:00 GMT",
            "GAME_ID": "0021600743",
            "GAME_NUM": 50,
            "MATCHUP": "ATL @ HOU",
            "OPP_TEAM": {
                "LOCATION": "Houston",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/HOU_logo.svg",
                "SIMPLE_NAME": "Rockets",
                "TEAM_ABBREVIATION": "HOU",
                "TEAM_ID": "1610612745",
                "TEAM_NAME": "Houston Rockets"
            },
            "PLUS_MINUS": 5,
            "PTS": 113,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Sat, 04 Feb 2017 00:00:00 GMT",
            "GAME_ID": "0021600756",
            "GAME_NUM": 51,
            "MATCHUP": "ATL vs. ORL",
            "OPP_TEAM": {
                "LOCATION": "Orlando",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/ORL_logo.svg",
                "SIMPLE_NAME": "Magic",
                "TEAM_ABBREVIATION": "ORL",
                "TEAM_ID": "1610612753",
                "TEAM_NAME": "Orlando Magic"
            },
            "PLUS_MINUS": 27,
            "PTS": 113,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Mon, 06 Feb 2017 00:00:00 GMT",
            "GAME_ID": "0021600772",
            "GAME_NUM": 52,
            "MATCHUP": "ATL vs. UTA",
            "OPP_TEAM": {
                "LOCATION": "Utah",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/UTA_logo.svg",
                "SIMPLE_NAME": "Jazz",
                "TEAM_ABBREVIATION": "UTA",
                "TEAM_ID": "1610612762",
                "TEAM_NAME": "Utah Jazz"
            },
            "PLUS_MINUS": -25,
            "PTS": 95,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Wed, 08 Feb 2017 00:00:00 GMT",
            "GAME_ID": "0021600785",
            "GAME_NUM": 53,
            "MATCHUP": "ATL vs. DEN",
            "OPP_TEAM": {
                "LOCATION": "Denver",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/DEN_logo.svg",
                "SIMPLE_NAME": "Nuggets",
                "TEAM_ABBREVIATION": "DEN",
                "TEAM_ID": "1610612743",
                "TEAM_NAME": "Denver Nuggets"
            },
            "PLUS_MINUS": 11,
            "PTS": 117,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Fri, 10 Feb 2017 00:00:00 GMT",
            "GAME_ID": "0021600806",
            "GAME_NUM": 54,
            "MATCHUP": "ATL @ SAC",
            "OPP_TEAM": {
                "LOCATION": "Sacramento",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/SAC_logo.svg",
                "SIMPLE_NAME": "Kings",
                "TEAM_ABBREVIATION": "SAC",
                "TEAM_ID": "1610612758",
                "TEAM_NAME": "Sacramento Kings"
            },
            "PLUS_MINUS": -1,
            "PTS": 107,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Mon, 13 Feb 2017 00:00:00 GMT",
            "GAME_ID": "0021600830",
            "GAME_NUM": 55,
            "MATCHUP": "ATL @ POR",
            "OPP_TEAM": {
                "LOCATION": "Portland",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/POR_logo.svg",
                "SIMPLE_NAME": "Trail Blazers",
                "TEAM_ABBREVIATION": "POR",
                "TEAM_ID": "1610612757",
                "TEAM_NAME": "Portland Trail Blazers"
            },
            "PLUS_MINUS": 5,
            "PTS": 109,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Wed, 15 Feb 2017 00:00:00 GMT",
            "GAME_ID": "0021600846",
            "GAME_NUM": 56,
            "MATCHUP": "ATL @ LAC",
            "OPP_TEAM": {
                "LOCATION": "Los Angeles",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/LAC_logo.svg",
                "SIMPLE_NAME": "Clippers",
                "TEAM_ABBREVIATION": "LAC",
                "TEAM_ID": "1610612746",
                "TEAM_NAME": "Los Angeles Clippers"
            },
            "PLUS_MINUS": -15,
            "PTS": 84,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Fri, 24 Feb 2017 00:00:00 GMT",
            "GAME_ID": "0021600863",
            "GAME_NUM": 57,
            "MATCHUP": "ATL vs. MIA",
            "OPP_TEAM": {
                "LOCATION": "Miami",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/MIA_logo.svg",
                "SIMPLE_NAME": "Heat",
                "TEAM_ABBREVIATION": "MIA",
                "TEAM_ID": "1610612748",
                "TEAM_NAME": "Miami Heat"
            },
            "PLUS_MINUS": -18,
            "PTS": 90,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Sat, 25 Feb 2017 00:00:00 GMT",
            "GAME_ID": "0021600867",
            "GAME_NUM": 58,
            "MATCHUP": "ATL @ ORL",
            "OPP_TEAM": {
                "LOCATION": "Orlando",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/ORL_logo.svg",
                "SIMPLE_NAME": "Magic",
                "TEAM_ABBREVIATION": "ORL",
                "TEAM_ID": "1610612753",
                "TEAM_NAME": "Orlando Magic"
            },
            "PLUS_MINUS": -19,
            "PTS": 86,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Mon, 27 Feb 2017 00:00:00 GMT",
            "GAME_ID": "0021600885",
            "GAME_NUM": 59,
            "MATCHUP": "ATL @ BOS",
            "OPP_TEAM": {
                "LOCATION": "Boston",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/BOS_logo.svg",
                "SIMPLE_NAME": "Celtics",
                "TEAM_ABBREVIATION": "BOS",
                "TEAM_ID": "1610612738",
                "TEAM_NAME": "Boston Celtics"
            },
            "PLUS_MINUS": 16,
            "PTS": 114,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Wed, 01 Mar 2017 00:00:00 GMT",
            "GAME_ID": "0021600897",
            "GAME_NUM": 60,
            "MATCHUP": "ATL vs. DAL",
            "OPP_TEAM": {
                "LOCATION": "Dallas",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/DAL_logo.svg",
                "SIMPLE_NAME": "Mavericks",
                "TEAM_ABBREVIATION": "DAL",
                "TEAM_ID": "1610612742",
                "TEAM_NAME": "Dallas Mavericks"
            },
            "PLUS_MINUS": 5,
            "PTS": 100,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Fri, 03 Mar 2017 00:00:00 GMT",
            "GAME_ID": "0021600913",
            "GAME_NUM": 61,
            "MATCHUP": "ATL vs. CLE",
            "OPP_TEAM": {
                "LOCATION": "Cleveland",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/CLE_logo.svg",
                "SIMPLE_NAME": "Cavaliers",
                "TEAM_ABBREVIATION": "CLE",
                "TEAM_ID": "1610612739",
                "TEAM_NAME": "Cleveland Cavaliers"
            },
            "PLUS_MINUS": -5,
            "PTS": 130,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Sun, 05 Mar 2017 00:00:00 GMT",
            "GAME_ID": "0021600927",
            "GAME_NUM": 62,
            "MATCHUP": "ATL vs. IND",
            "OPP_TEAM": {
                "LOCATION": "Indiana",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/IND_logo.svg",
                "SIMPLE_NAME": "Pacers",
                "TEAM_ABBREVIATION": "IND",
                "TEAM_ID": "1610612754",
                "TEAM_NAME": "Indiana Pacers"
            },
            "PLUS_MINUS": -1,
            "PTS": 96,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Mon, 06 Mar 2017 00:00:00 GMT",
            "GAME_ID": "0021600937",
            "GAME_NUM": 63,
            "MATCHUP": "ATL vs. GSW",
            "OPP_TEAM": {
                "LOCATION": "Golden State",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/GSW_logo.svg",
                "SIMPLE_NAME": "Warriors",
                "TEAM_ABBREVIATION": "GSW",
                "TEAM_ID": "1610612744",
                "TEAM_NAME": "Golden State Warriors"
            },
            "PLUS_MINUS": -8,
            "PTS": 111,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Wed, 08 Mar 2017 00:00:00 GMT",
            "GAME_ID": "0021600950",
            "GAME_NUM": 64,
            "MATCHUP": "ATL vs. BKN",
            "OPP_TEAM": {
                "LOCATION": "Brooklyn",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/BKN_logo.svg",
                "SIMPLE_NAME": "Nets",
                "TEAM_ABBREVIATION": "BKN",
                "TEAM_ID": "1610612751",
                "TEAM_NAME": "Brooklyn Nets"
            },
            "PLUS_MINUS": 5,
            "PTS": 110,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Fri, 10 Mar 2017 00:00:00 GMT",
            "GAME_ID": "0021600969",
            "GAME_NUM": 65,
            "MATCHUP": "ATL vs. TOR",
            "OPP_TEAM": {
                "LOCATION": "Toronto",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/TOR_logo.svg",
                "SIMPLE_NAME": "Raptors",
                "TEAM_ABBREVIATION": "TOR",
                "TEAM_ID": "1610612761",
                "TEAM_NAME": "Toronto Raptors"
            },
            "PLUS_MINUS": 6,
            "PTS": 105,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Sat, 11 Mar 2017 00:00:00 GMT",
            "GAME_ID": "0021600981",
            "GAME_NUM": 66,
            "MATCHUP": "ATL @ MEM",
            "OPP_TEAM": {
                "LOCATION": "Memphis",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/MEM_logo.svg",
                "SIMPLE_NAME": "Grizzlies",
                "TEAM_ABBREVIATION": "MEM",
                "TEAM_ID": "1610612763",
                "TEAM_NAME": "Memphis Grizzlies"
            },
            "PLUS_MINUS": 17,
            "PTS": 107,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Mon, 13 Mar 2017 00:00:00 GMT",
            "GAME_ID": "0021600994",
            "GAME_NUM": 67,
            "MATCHUP": "ATL @ SAS",
            "OPP_TEAM": {
                "LOCATION": "San Antonio",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/SAS_logo.svg",
                "SIMPLE_NAME": "Spurs",
                "TEAM_ABBREVIATION": "SAS",
                "TEAM_ID": "1610612759",
                "TEAM_NAME": "San Antonio Spurs"
            },
            "PLUS_MINUS": -8,
            "PTS": 99,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Thu, 16 Mar 2017 00:00:00 GMT",
            "GAME_ID": "0021601017",
            "GAME_NUM": 68,
            "MATCHUP": "ATL vs. MEM",
            "OPP_TEAM": {
                "LOCATION": "Memphis",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/MEM_logo.svg",
                "SIMPLE_NAME": "Grizzlies",
                "TEAM_ABBREVIATION": "MEM",
                "TEAM_ID": "1610612763",
                "TEAM_NAME": "Memphis Grizzlies"
            },
            "PLUS_MINUS": -12,
            "PTS": 91,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Sat, 18 Mar 2017 00:00:00 GMT",
            "GAME_ID": "0021601029",
            "GAME_NUM": 69,
            "MATCHUP": "ATL vs. POR",
            "OPP_TEAM": {
                "LOCATION": "Portland",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/POR_logo.svg",
                "SIMPLE_NAME": "Trail Blazers",
                "TEAM_ABBREVIATION": "POR",
                "TEAM_ID": "1610612757",
                "TEAM_NAME": "Portland Trail Blazers"
            },
            "PLUS_MINUS": -16,
            "PTS": 97,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Mon, 20 Mar 2017 00:00:00 GMT",
            "GAME_ID": "0021601044",
            "GAME_NUM": 70,
            "MATCHUP": "ATL @ CHA",
            "OPP_TEAM": {
                "LOCATION": "Charlotte",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/CHA_logo.svg",
                "SIMPLE_NAME": "Hornets",
                "TEAM_ABBREVIATION": "CHA",
                "TEAM_ID": "1610612766",
                "TEAM_NAME": "Charlotte Hornets"
            },
            "PLUS_MINUS": -15,
            "PTS": 90,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Wed, 22 Mar 2017 00:00:00 GMT",
            "GAME_ID": "0021601063",
            "GAME_NUM": 71,
            "MATCHUP": "ATL @ WAS",
            "OPP_TEAM": {
                "LOCATION": "Washington",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/WAS_logo.svg",
                "SIMPLE_NAME": "Wizards",
                "TEAM_ABBREVIATION": "WAS",
                "TEAM_ID": "1610612764",
                "TEAM_NAME": "Washington Wizards"
            },
            "PLUS_MINUS": -4,
            "PTS": 100,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Fri, 24 Mar 2017 00:00:00 GMT",
            "GAME_ID": "0021601078",
            "GAME_NUM": 72,
            "MATCHUP": "ATL @ MIL",
            "OPP_TEAM": {
                "LOCATION": "Milwaukee",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/MIL_logo.svg",
                "SIMPLE_NAME": "Bucks",
                "TEAM_ABBREVIATION": "MIL",
                "TEAM_ID": "1610612749",
                "TEAM_NAME": "Milwaukee Bucks"
            },
            "PLUS_MINUS": -3,
            "PTS": 97,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Sun, 26 Mar 2017 00:00:00 GMT",
            "GAME_ID": "0021601088",
            "GAME_NUM": 73,
            "MATCHUP": "ATL vs. BKN",
            "OPP_TEAM": {
                "LOCATION": "Brooklyn",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/BKN_logo.svg",
                "SIMPLE_NAME": "Nets",
                "TEAM_ABBREVIATION": "BKN",
                "TEAM_ID": "1610612751",
                "TEAM_NAME": "Brooklyn Nets"
            },
            "PLUS_MINUS": -15,
            "PTS": 92,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Tue, 28 Mar 2017 00:00:00 GMT",
            "GAME_ID": "0021601106",
            "GAME_NUM": 74,
            "MATCHUP": "ATL vs. PHX",
            "OPP_TEAM": {
                "LOCATION": "Phoenix",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/PHX_logo.svg",
                "SIMPLE_NAME": "Suns",
                "TEAM_ABBREVIATION": "PHX",
                "TEAM_ID": "1610612756",
                "TEAM_NAME": "Phoenix Suns"
            },
            "PLUS_MINUS": 4,
            "PTS": 95,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Wed, 29 Mar 2017 00:00:00 GMT",
            "GAME_ID": "0021601111",
            "GAME_NUM": 75,
            "MATCHUP": "ATL @ PHI",
            "OPP_TEAM": {
                "LOCATION": "Philadelphia",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/PHI_logo.svg",
                "SIMPLE_NAME": "76ers",
                "TEAM_ABBREVIATION": "PHI",
                "TEAM_ID": "1610612755",
                "TEAM_NAME": "Philadelphia 76ers"
            },
            "PLUS_MINUS": 7,
            "PTS": 99,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Sat, 01 Apr 2017 00:00:00 GMT",
            "GAME_ID": "0021601138",
            "GAME_NUM": 76,
            "MATCHUP": "ATL @ CHI",
            "OPP_TEAM": {
                "LOCATION": "Chicago",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/CHI_logo.svg",
                "SIMPLE_NAME": "Bulls",
                "TEAM_ABBREVIATION": "CHI",
                "TEAM_ID": "1610612741",
                "TEAM_NAME": "Chicago Bulls"
            },
            "PLUS_MINUS": -2,
            "PTS": 104,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Sun, 02 Apr 2017 00:00:00 GMT",
            "GAME_ID": "0021601148",
            "GAME_NUM": 77,
            "MATCHUP": "ATL @ BKN",
            "OPP_TEAM": {
                "LOCATION": "Brooklyn",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/BKN_logo.svg",
                "SIMPLE_NAME": "Nets",
                "TEAM_ABBREVIATION": "BKN",
                "TEAM_ID": "1610612751",
                "TEAM_NAME": "Brooklyn Nets"
            },
            "PLUS_MINUS": -9,
            "PTS": 82,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        },
        {
            "GAME_DATE": "Thu, 06 Apr 2017 00:00:00 GMT",
            "GAME_ID": "0021601177",
            "GAME_NUM": 78,
            "MATCHUP": "ATL vs. BOS",
            "OPP_TEAM": {
                "LOCATION": "Boston",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/BOS_logo.svg",
                "SIMPLE_NAME": "Celtics",
                "TEAM_ABBREVIATION": "BOS",
                "TEAM_ID": "1610612738",
                "TEAM_NAME": "Boston Celtics"
            },
            "PLUS_MINUS": 7,
            "PTS": 123,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Fri, 07 Apr 2017 00:00:00 GMT",
            "GAME_ID": "0021601179",
            "GAME_NUM": 79,
            "MATCHUP": "ATL @ CLE",
            "OPP_TEAM": {
                "LOCATION": "Cleveland",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/CLE_logo.svg",
                "SIMPLE_NAME": "Cavaliers",
                "TEAM_ABBREVIATION": "CLE",
                "TEAM_ID": "1610612739",
                "TEAM_NAME": "Cleveland Cavaliers"
            },
            "PLUS_MINUS": 14,
            "PTS": 114,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Sun, 09 Apr 2017 00:00:00 GMT",
            "GAME_ID": "0021601197",
            "GAME_NUM": 80,
            "MATCHUP": "ATL vs. CLE",
            "OPP_TEAM": {
                "LOCATION": "Cleveland",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/CLE_logo.svg",
                "SIMPLE_NAME": "Cavaliers",
                "TEAM_ABBREVIATION": "CLE",
                "TEAM_ID": "1610612739",
                "TEAM_NAME": "Cleveland Cavaliers"
            },
            "PLUS_MINUS": 1,
            "PTS": 126,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Tue, 11 Apr 2017 00:00:00 GMT",
            "GAME_ID": "0021601212",
            "GAME_NUM": 81,
            "MATCHUP": "ATL vs. CHA",
            "OPP_TEAM": {
                "LOCATION": "Charlotte",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/CHA_logo.svg",
                "SIMPLE_NAME": "Hornets",
                "TEAM_ABBREVIATION": "CHA",
                "TEAM_ID": "1610612766",
                "TEAM_NAME": "Charlotte Hornets"
            },
            "PLUS_MINUS": 27,
            "PTS": 103,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "W"
        },
        {
            "GAME_DATE": "Wed, 12 Apr 2017 00:00:00 GMT",
            "GAME_ID": "0021601226",
            "GAME_NUM": 82,
            "MATCHUP": "ATL @ IND",
            "OPP_TEAM": {
                "LOCATION": "Indiana",
                "LOGO": "https://stats.nba.com/media/img/teams/logos/IND_logo.svg",
                "SIMPLE_NAME": "Pacers",
                "TEAM_ABBREVIATION": "IND",
                "TEAM_ID": "1610612754",
                "TEAM_NAME": "Indiana Pacers"
            },
            "PLUS_MINUS": -18,
            "PTS": 86,
            "SEASON_ID": "22016",
            "TEAM_ABBREVIATION": "ATL",
            "TEAM_ID": "1610612737",
            "TEAM_NAME": "Atlanta Hawks",
            "WL": "L"
        }],"team": {
        "LOCATION": "Atlanta",
        "LOGO": "https://stats.nba.com/media/img/teams/logos/ATL_logo.svg",
        "SIMPLE_NAME": "Hawks",
        "TEAM_ABBREVIATION": "ATL",
        "TEAM_ID": "1610612737",
        "TEAM_NAME": "Atlanta Hawks"}};
    this.setState({data: data});
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