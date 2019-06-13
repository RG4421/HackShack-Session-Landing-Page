/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React, { Component } from 'react';
import { Box, Text } from 'grommet';
import { StyledImage } from '../components/Shared/style';
import { SessionsLayout } from '../components/Sessions/style';
import sessionData from '../data/hpe-discover-events.json';
import Moment from 'react-moment';

export default class Sessions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: [],
    };
  }

  componentDidMount() {
    const sessionList = [];
    const currentDay = new Date().getDate();
    const currentTime = new Date().getHours();
    const sortedSessionData = sessionData.sort((a, b) => {
      const current = new Date(a.datetimeStart);
      const next = new Date(b.datetimeStart);
      return current - next;
    });
    sortedSessionData.map((session) => {
      const sessionTime = new Date(session.datetimeStart).getHours();
      const sessionDay = new Date(session.datetimeStart).getDate();
      if (sessionDay === 18) {
        if (sessionTime >= currentTime && sessionList.length < 5) {
          sessionList.push(session);
        }
      }
    });
    this.setState({ sessions: sessionList });
  }

  render() {
    const { sessions } = this.state;
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
            <StyledImage src="../img/hackshacktitle.png" />
          </Box>
        </Box>
        {/* Upcoming sessions */}
        <Box align="start" className="upcoming-sessions-container">
          <Text
            margin={{ top: 'large', bottom: 'xlarge' }}
            className="upcoming-sessions-title"
          >
            Upcoming Sessions
          </Text>
          <Box direction="column">
            {sessions.map((session) => { 
              return <Box>
                <Box direction="row">
                  <Box basis="medium"><Moment format="h:mm a" date={session.datetimeStart} className="session-text-time" /></Box>
                  <Box basis="medium"><Text className="session-text" weight="100">{session.session_id}</Text></Box>
                  <Box basis="xlarge"><Text className="session-text">{session.title}</Text></Box>
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
        </Box>
        <Box align="center">
          <Text className="session-text" weight="bold" color="accent-2">Not seeing a session? Ask us!</Text>
        </Box>
      </SessionsLayout>
    );
  }
}
