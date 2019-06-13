/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React , { Component }from 'react';
import { Grommet, Carousel, Box} from 'grommet';
import theme from './theme';
import Leaderboard from './Leaderboard.js';
import Sessions from './Sessions.js';
import { StyledImage } from '../components/Shared/style';

export default class HackShackCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }
  componentDidMount() {
    this.setState({ isLoaded: true })
  }
  render() {
    const { isLoaded } = this.state; 
    return (
      <Box>
        { isLoaded && (
          <Grommet theme={theme}>
            <Carousel play={5000}>
              <Leaderboard />
              <Sessions />
              <StyledImage src="../img/hpedevcard.png" />
              <StyledImage src="../img/hpedesigncard.png" />
              <StyledImage src="./img/gremlincard.png" />
            </Carousel>
          </Grommet>
        )}
      </Box>
    );
  }
}