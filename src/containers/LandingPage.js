/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React, { Component } from "react";
import { Grommet, Heading, Box, Tabs, Tab, Text } from "grommet";
import theme from "./theme";
import Header from "../components/Header";
import TabLayout from "../components/CardLayout/index";
import eventSchedule from "../data/hpe-discover-events.json";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 18,
      sessions: this.filterSessions(eventSchedule, 18)
    };
    this.onClick = this.onClick.bind(this);
  }
  
  filterSessions(sessions, day) {
    return sessions.filter(
      session => day === undefined 
        ? session.datetimeStart === undefined 
        : new Date(session.datetimeStart).getDate() === day
    ).sort((a,b) => {
      if (a.datetimeStart < b.datetimeStart) {return -1;}
      else if (a.datetimeStart > b.datetimeStart) {return 1;}
      else {return 0;}
    });
  }

  onClick(selected) {
    this.setState({ selected });
    let sessions = this.filterSessions(eventSchedule, selected);
    this.setState({sessions});
  }

  render() {
    const { selected } = this.state;
    const defaultImage = "../img/defaultImage.png";
    return (
      <Grommet theme={theme}>
        <Header /> 
        <Box margin="medium" pad="medium">
          <Heading margin="xsmall" size="large">
            <strong> Sessions </strong>
          </Heading>
          <Tabs flex="grow" justify="start">
            <Tab
              title={
                <Text
                  onClick={e => {
                    e.preventDefault();
                    this.onClick(18);
                  }}
                  color={selected === 18 ? "dark-3" : "brand"}
                  size="large"
                >
                  Day 1
                </Text>
              }
            >
            </Tab>
            <Tab
              title={
                <Text
                  onClick={e => {
                    e.preventDefault();
                    this.onClick(19);
                  }}
                  color={selected === 19 ? "dark-3" : "brand"}
                  size="large"
                >
                  Day 2
                </Text>
              }
            > 
            </Tab>
            <Tab
              title={
                <Text
                  onClick={e => {
                    e.preventDefault();
                    this.onClick(20);
                  }}
                  color={selected === 20 ? "dark-3" : "brand"}
                  size="large"
                >
                  Day 3
                </Text>
              }
            >
            </Tab>
            <Tab
              title={
                <Text
                  onClick={e => {
                    e.preventDefault();
                    this.onClick(undefined);
                  }}
                  color={selected === undefined ? "dark-3" : "brand"}
                  size="large"
                >
                  All-Day Challenges
                </Text>
              }
            >
            </Tab>
          </Tabs>
          {this.state.sessions.map(
            ({
              id,
              title,
              page,
              presenter,
              content,
              presentationlink,
              videoLink,
              image,
              datetimeStart,
              datetimeEnd
            }) => (
              <TabLayout
                key={id}
                image={image === "" ? defaultImage : image}
                title={title}
                page={page}
                presenter={presenter}
                content={content}
                presenterLink={presentationlink}
                videoLink={videoLink}
                date={datetimeStart}
                timeStart={datetimeStart}
                timeEnd={datetimeEnd}
              />
            )
          )}
        </Box>
      </Grommet>
    );
  }
}
