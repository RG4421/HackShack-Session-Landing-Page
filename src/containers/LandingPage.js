/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React, { Component } from "react";
import { Grommet, Heading, Box, Tabs, Tab, Text, Image } from "grommet";
import theme from "./theme";
import Header from "../components/Header";
import TabLayout from "../components/CardLayout/index";
import eventSchedule from "../data/hpe-discover-events.json";
import ReactGA from "react-ga";
import { throwError } from "rxjs";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.day || 18,
      sessions: this.filterSessions(eventSchedule, this.props.day || 18)
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    let gtagId;
    let gaDebug;

    if (process.env.NODE_ENV === "production") {
      gtagId = "UA-108944070-3";
      gaDebug = false;
    } else if (process.env.NODE_ENV === "development") {
      gtagId = "UA-NNNNNN-N";
      gaDebug = false;
    } else {
      throwError(
        "NODE_ENV not set to 'production' nor 'development'." +
          "Google Analytics tracking will not be initialized."
      );
    }

    window.onload = () => {
      if (typeof window !== "undefined") {
        ReactGA.initialize(gtagId, {
          debug: gaDebug
        });
        const { location } = window;
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
      }
    };
  }

  filterSessions(sessions, day) {
    return sessions
      .filter(session => {
        if (day === undefined) {
          return session.datetimeStart === undefined;
        } else if (day === "all") {
          return session;
        } else {
          return new Date(session.datetimeStart).getDate() === day;
        }
      })
      .sort((a, b) => {
        if (a.datetimeStart < b.datetimeStart) {
          return -1;
        } else if (a.datetimeStart > b.datetimeStart) {
          return 1;
        } else {
          return 0;
        }
      });
  }

  onClick(selected, event) {
    this.setState({ selected });
    let sessions = this.filterSessions(eventSchedule, selected);
    this.setState({ sessions });
    ReactGA.event({
      category: "Sessions Navigation",
      action: "Click",
      label: event.target.innerText
    });
  }

  render() {
    const { selected } = this.state;
    const defaultImage = "../img/defaultImage.png";
    return (
      <Grommet theme={theme}>
        <Header />
        <Box margin="medium" pad="medium">
          <Box
            direction="row"
            align="center"
            justify="between"
            responsive={false}
          >
            <Box alignSelf="center" direction="row-responsive">
              <Heading margin="xsmall" size="large">
                <strong> Sessions </strong>
              </Heading>
            </Box>
            <Box alignSelf="end" direction="row-responsive" />
            <Image src="../img/hpedevQRCode.png" alt="QR Code"></Image>
          </Box>
          <Tabs flex="grow" justify="start">
            <Tab
              title={
                <Text
                  onClick={e => {
                    e.preventDefault();
                    this.onClick(9, e);
                  }}
                  color={selected === 9 ? "dark-3" : "brand"}
                  size="large"
                >
                  Day 1
                </Text>
              }
            />
            <Tab
              title={
                <Text
                  onClick={e => {
                    e.preventDefault();
                    this.onClick(10, e);
                  }}
                  color={selected === 10 ? "dark-3" : "brand"}
                  size="large"
                >
                  Day 2
                </Text>
              }
            />
            <Tab
              title={
                <Text
                  onClick={e => {
                    e.preventDefault();
                    this.onClick(11, e);
                  }}
                  color={selected === 11 ? "dark-3" : "brand"}
                  size="large"
                >
                  Day 3
                </Text>
              }
            />
            <Tab
              title={
                <Text
                  onClick={e => {
                    e.preventDefault();
                    this.onClick(12, e);
                  }}
                  color={selected === 12 ? "dark-3" : "brand"}
                  size="large"
                >
                  Day 4
                </Text>
              }
            />
            <Tab
              title={
                <Text
                  onClick={e => {
                    e.preventDefault();
                    this.onClick(13, e);
                  }}
                  color={selected === 13 ? "dark-3" : "brand"}
                  size="large"
                >
                  Day 5
                </Text>
              }
            />
            <Tab
              title={
                <Text
                  onClick={e => {
                    e.preventDefault();
                    this.onClick(undefined, e);
                  }}
                  color={selected === undefined ? "dark-3" : "brand"}
                  size="large"
                >
                  All-Day Challenges
                </Text>
              }
            />
          </Tabs>
          {this.state.sessions.map(
            ({
              id,
              title,
              page,
              pageLink,
              presenter,
              content,
              presentationlink,
              videoLink,
              image,
              datetimeStart,
              datetimeEnd,
              hash_link
            }) => (
              <TabLayout
                id={hash_link}
                key={id}
                image={image === "" ? defaultImage : image}
                title={title}
                page={page}
                pageLink={pageLink}
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
