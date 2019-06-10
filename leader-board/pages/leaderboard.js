/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React, { Component } from 'react';
import { Box, Heading, Text } from 'grommet';
import { Config } from '../config';
import { StyledImage } from '../components/StyledComponents/styles';

export default class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hiScores: [],
      ranks: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'],
      colors: [],
    };
  }

  componentDidMount() {
    fetch(`${Config.apiUrl}/user/leaderboard`)
      .then(res => res.json())
      .then((data) => {
        const sortedHiScores = data.sort((a, b) => b.score - a.score);
        const hiScores = sortedHiScores.slice(0, 10);
        this.setState({ hiScores });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { hiScores, ranks, colors } = this.state;
    return (
      <Box
        className="leaderboard-container"
        background="#000000"
        direction="column"
        pad={
          {
            top: 'large', bottom: 'none', left: 'large', right: 'large',
          }}
      >
        {/* HackShack Attack title and HighScore text */}
        <Box align="center">
          <Box>
            <StyledImage src="../static/hackshackattack.png" />
          </Box>
          <Box width="large" margin={{ top: 'large', bottom: 'large' }} pad={{ left: 'large', right: 'large' }}>
            <StyledImage src="../static/highscoretext.png" />
          </Box>
        </Box>
        {/* Rank/Name/Score columns */}
        <Box
          className="highscore-container"
          direction="row"
        >
          <Box
            align="start"
            basis="1/3"
            direction="column"
            className="rank-column"
          >
            <Text color="dark-3">Rank</Text>
            {ranks.map(rank => <Text margin={{ top: 'small', bottom: 'small' }} color="light-1">{rank}</Text>)}
          </Box>
          <Box
            align="start"
            basis="1/2"
            direction="column"
            className="name-column"
          >
            <Text color="dark-3">Name</Text>
            {hiScores.map(hiScore => <Text margin={{ top: 'small', bottom: 'small' }} color="light-1">{hiScore.name}</Text>)}
          </Box>
          <Box
            align="end"
            basis="1/3"
            direction="column"
            className="score-column"
          >
            <Text color="dark-3">Score</Text>
            {hiScores.map(hiScore => <Text margin={{ top: 'small', bottom: 'small' }} color="light-1">{hiScore.score}</Text>)}
          </Box>
        </Box>
        {/* ItMonster image */}
        <Box alignSelf="end" margin={{ top: 'xlarge' }} width="large">
          <StyledImage src="../static/itmonster.png" />
        </Box>
      </Box>
    );
  }
}
