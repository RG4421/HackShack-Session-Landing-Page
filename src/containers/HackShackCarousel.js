/* (C) Copyright 2020 Hewlett Packard Enterprise Development LP. */
import React, { Component } from 'react';
import { Grommet, Box } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import Leaderboard from './Leaderboard.js';

export default class HackShackCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }
  componentDidMount() {
    this.setState({ isLoaded: true });
  }
  render() {
    const { isLoaded } = this.state;
    return (
      <Box align="center">
        {isLoaded && (
          <Grommet full theme={hpe}>
            <Leaderboard />
          </Grommet>
        )}
      </Box>
    );
  }
}
