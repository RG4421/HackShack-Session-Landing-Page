/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
// make a carousel
import React from 'react';
import Link from 'next/link';
import { Box, Grommet } from 'grommet';
import theme from '../components/Main/theme';
import LeaderboardNew from './leaderboardnew';

const Home = () => (
  <Grommet full theme={theme}>
    <LeaderboardNew />
  </Grommet>
);

export default Home;
