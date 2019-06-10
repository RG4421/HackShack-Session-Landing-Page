/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React, { Component } from "react";
import { Grommet, Heading, Box, Tabs, Tab, Text } from "grommet";
import theme from "./theme";
import Header from "../components/Header";
import TabLayout from "../components/CardLayout/index";
import eventSchedule from "../data/hpe-discover-events.json";
const Day1 = eventSchedule.filter(
  session => session.date === "Tuesday, June 18, 2019"
);
const Day2 = eventSchedule.filter(
  session => session.date === "Wednesday, June 19, 2019"
);
const Day3 = eventSchedule.filter(
  session => session.date === "Thursday, June 20, 2019"
);

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(selected) {
    this.setState({ selected });
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
          <Tabs height="medium" flex="grow" justify="start">
            <Tab
              title={
                <Text
                  onClick={e => {
                    e.preventDefault();
                    this.onClick("day1");
                  }}
                  color={selected === "day1" ? "dark-3" : "brand"}
                  size="large"
                >
                  Day 1
                </Text>
              }
            >
              {Day1.map(
                ({
                  title,
                  page,
                  presenter,
                  content,
                  presentationlink,
                  videoLink,
                  image,
                  date,
                  time
                }) => (
                  <TabLayout
                    key={title}
                    image={image === "" ? defaultImage : image}
                    title={title}
                    page={page}
                    presenter={presenter}
                    content={content}
                    presenterLink={presentationlink}
                    videoLink={videoLink}
                    date={date}
                    time={time}
                  />
                )
              )}
            </Tab>
            <Tab
              title={
                <Text
                  onClick={e => {
                    e.preventDefault();
                    this.onClick("day2");
                  }}
                  color={selected === "day2" ? "dark-3" : "brand"}
                  size="large"
                >
                  Day 2
                </Text>
              }
            >
              {Day2.map(
                ({
                  title,
                  page,
                  presenter,
                  content,
                  presentationlink,
                  videoLink,
                  image,
                  date,
                  time
                }) => (
                  <TabLayout
                    key={title}
                    image={image === "" ? defaultImage : image}
                    title={title}
                    page={page}
                    presenter={presenter}
                    content={content}
                    presenterLink={presentationlink}
                    videoLink={videoLink}
                    date={date}
                    time={time}
                  />
                )
              )}
            </Tab>
            <Tab
              title={
                <Text
                  onClick={e => {
                    e.preventDefault();
                    this.onClick("day3");
                  }}
                  color={selected === "day3" ? "dark-3" : "brand"}
                  size="large"
                >
                  Day 3
                </Text>
              }
            >
              {Day3.map(
                ({
                  title,
                  page,
                  presenter,
                  content,
                  presentationlink,
                  videoLink,
                  image,
                  date,
                  time
                }) => (
                  <TabLayout
                    key={title}
                    image={image === "" ? defaultImage : image}
                    title={title}
                    page={page}
                    presenter={presenter}
                    content={content}
                    presenterLink={presentationlink}
                    videoLink={videoLink}
                    date={date}
                    time={time}
                  />
                )
              )}
            </Tab>
          </Tabs>
        </Box>
      </Grommet>
    );
  }
}
