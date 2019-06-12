/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React from 'react';
import { Grommet, Carousel } from 'grommet';
import theme from './theme';
import Leaderboard from './Leaderboard.js';
import Sessions from './Sessions.js';
import { StyledImage } from '../components/Shared/style';

const HackShackCarousel = () => (
  <Grommet theme={theme}>
    <Carousel play={5000}>
      <Leaderboard />
      <Sessions />
      <StyledImage src="./img/gremlincard.png" />
      <StyledImage src="../img/hpedevcard.png" />
      <StyledImage src="../img/hpedesigncard.png" />
    </Carousel>
  </Grommet>
);

export default HackShackCarousel;