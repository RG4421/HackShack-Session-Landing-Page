/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React, { Component } from 'react';
import { Box, Text } from 'grommet';
import { StyledImage } from '../components/StyledComponents/styles';
import { SessionsLayout } from '../components/Sessions/styles';
import sessionData from '../../data/hpe-discover-events.json';

export default class Sessions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionData: [],
      currentDay: '',
    };
  }

  componentDidMount() {
    this.setState({ sessionData });
  }

  render() {
    const { sessionData } = this.state;
    return (
      <SessionsLayout
        className="sessions-container"
        background="dark-1"
        direction="column"
        pad={
          {
            top: 'none', bottom: 'large', left: 'large', right: 'large',
          }}
      >
        {/* Sessions title image and text */}
        <Box margin={{ bottom: 'large' }} className="sessions-title" align="center">
          <Box>
            <StyledImage src="../static/hackshacktitle.png" />
          </Box>
        </Box>
        {/* Upcoming sessions */}
        <Box align="start" className="upcoming-sessions-container">
          <Text
            margin={{ top: 'large', bottom: 'large' }}
            className="upcoming-sessions-title"
          >
            Upcoming Sessions
          </Text>
          {sessionData.map((session) => {
            return <Box direction="column">
              <Box direction="row" gap="small">
                <Text weight="bold">{session.time}</Text>
                <Text weight="100">{session.session_id}</Text>
                <Text>{session.title}</Text>
              </Box>
              <Box
                background="dark-2"
                fill="horizontal"
                height="1px"
                margin={{ top: 'large', bottom: 'large' }}
              />
            </Box>;
          })}
        </Box>
        <Box align="center">
          <Text weight="bold" color="accent-2">Not seeing a session? Ask us!</Text>
        </Box>
      </SessionsLayout>
    );
  }
}
