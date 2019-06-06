/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */

import React, { Component } from 'react';
import {
  Box, Heading, Image, Text, Grommet,
} from 'grommet';
import { Config } from '../config';
import { SSL_OP_NO_TICKET } from 'constants';

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
        pad={
          {
            top: 'xlarge', bottom: 'none', left: 'xlarge', right: 'xlarge',
          }}
        className="leaderboard-container"
        background="#000000"
        direction="column"
        fillsa
      >
        <Box
          className="leaderboard-title"
          align="center"
        >
          <Box
            width="936px"
            height="296px"
          >
            <Image fit="contain" src="../static/hackshackattack.png" />
          </Box>
          <Box
            margin="large"
            width="553px"
            height="96px"
          >
            <Image fit="contain" src="../static/highscoretext.png" />
          </Box>
        </Box>
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
