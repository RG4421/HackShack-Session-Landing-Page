/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React, { Component } from 'react';
import { Box, Heading, Image } from 'grommet';
import { Config } from '../config';
import { StyledImage } from '../components/StyledComponents/styles';

export default class LeaderboardNew extends Component {
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
        pad="medium"
        fill
      >
        {/* HackShack Attack title and HighScore text */}
        <Box align="center">
          <Box>
            <StyledImage src="../static/hackshackattack.png" />
          </Box>
        </Box>
        {/* Rank/Name/Score columns */}
        <Box
          className="highscore-container"
          direction="row"
        >
          <Box
            basis="1/4"
            align="start"
            direction="column"
            className="rank-column"
          >
            <Heading color="dark-3">Rank</Heading>
            {ranks.map(rank => <Heading margin={{ top: 'small', bottom: 'small' }} color="light-1">{rank}</Heading>)}
          </Box>
          <Box
            basis="2/4"
            direction="column"
            className="name-column"
          >
            <Heading color="dark-3">Name</Heading>
            {hiScores.map(hiScore => <Heading margin={{ top: 'small', bottom: 'small' }} color="light-1">{hiScore.name}</Heading>)}
          </Box>
          <Box
            basis="1/4"
            direction="column"
            className="score-column"
          >
            <Heading color="dark-3">Score</Heading>
            {hiScores.map(hiScore => <Heading margin={{ top: 'small', bottom: 'small' }} color="light-1">{hiScore.score}</Heading>)}
          </Box>
        </Box>
        {/* ItMonster image */}
        <Box align="end">
          <Box
            width="752px"
            height="481px"
            justify="end"
          >
            <Image fit="contain" src="../static/itmonster.png" />
          </Box>
        </Box>
      </Box>
    );
  }
}
