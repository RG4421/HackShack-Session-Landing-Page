/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React from 'react';
import { Grommet, Carousel } from 'grommet';
import theme from '../components/theme';
import Leaderboard from './leaderboard';
import Sessions from './sessions';
import { StyledImage } from '../components/StyledComponents/styles';

const Home = () => (
  <Grommet theme={theme}>
{/*     <Carousel play={5000}>
      <Leaderboard />
      <Sessions />
      <StyledImage src="../static/gremlincard.png" />
      <StyledImage src="../static/hpedevcard.png" />
      <StyledImage src="../static/hpedesigncard.png" />
    </Carousel> */}
    <Sessions />
  </Grommet>
);

export default Home;
