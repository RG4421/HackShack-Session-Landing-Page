/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
/* eslint-disable no-underscore-dangle */

import React, { Component } from 'react';
import {
  Box, Heading, Text, Grommet,
} from 'grommet';
import { Config } from '../config';
import PostData from '../../data/events.json';

export default class LeaderboardNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hiScores: {},
    };
    this.fetchHiScores = this.fetchHiScores.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchHiScores();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchHiScores() {
    return fetch(`${Config.apiUrl}/user/leaderboard`)
      .then(res => res.json())
      .then((data) => {
        const hiScores = data.sort((a, b) => b.score - a.score);
        if (this._isMounted) this.setState({ hiScores });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { hiScores } = this.state;
    return (
      <Box>Hello</Box>
    );
  }
}
