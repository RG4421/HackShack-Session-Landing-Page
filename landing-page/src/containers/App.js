/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React, { Component } from "react";
import { Grommet, Heading, Box, Tabs, Tab, Text } from "grommet";
import theme from "./theme";
import Header from "../components/Header";
import TabLayout from "../components/CardLayout/index";
import eventSchedule from "../../../data/hpe-discover-events.json";

const Day1 = eventSchedule.filter(
  session => new Date(session.datetimeStart).getDate() === 18
);
const Day2 = eventSchedule.filter(
  session => new Date(session.datetimeStart).getDate() === 19
);
const Day3 = eventSchedule.filter(
  session => new Date(session.datetimeStart).getDate() === 20
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
                  datetimeStart,
                  datetimeEnd,
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
                    date={datetimeStart}
                    timeStart={datetimeStart}
                    timeEnd={datetimeEnd}
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
                  datetimeStart,
                  datetimeEnd,
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
                    date={datetimeStart}
                    timeStart={datetimeStart}
                    timeEnd={datetimeEnd}
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
                  datetimeStart,
                  datetimeEnd,
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
                    date={datetimeStart}
                    timeStart={datetimeStart}
                    timeEnd={datetimeEnd}
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
