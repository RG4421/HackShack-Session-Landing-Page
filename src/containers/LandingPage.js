/* (C) Copyright 2020 Hewlett Packard Enterprise Development LP. */
import React, { useState, useEffect } from 'react';
import { Heading, Box, Tabs, Tab, Text, Image } from 'grommet';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { throwError } from 'rxjs';
import Header from '../components/Header';
import TabLayout from '../components/CardLayout/index';
import eventSchedule from '../data/hpe-discover-events.json';

const filterSessions = (sessions, day) =>
  sessions
    .filter((session) => {
      if (day === undefined) {
        return session.datetimeStart === undefined;
      }
      if (day === 'all') {
        return session;
      }
      return new Date(session.datetimeStart).getDate() === day;
    })
    .sort((a, b) => {
      if (a.datetimeStart < b.datetimeStart) {
        return -1;
      }
      if (a.datetimeStart > b.datetimeStart) {
        return 1;
      }
      return 0;
    });

const LandingPage = ({ day }) => {
  const [selected, setSelected] = useState(day || 18);
  const [sessions, setSessions] = useState(
    filterSessions(eventSchedule, day || 18),
  );

  useEffect(() => {
    let gtagId;
    let gaDebug;

    if (process.env.NODE_ENV === 'production') {
      gtagId = 'UA-108944070-4';
      gaDebug = false;
    } else if (process.env.NODE_ENV === 'development') {
      gtagId = 'UA-NNNNNN-N';
      gaDebug = false;
    } else {
      throwError(
        "NODE_ENV not set to 'production' nor 'development'." +
          'Google Analytics tracking will not be initialized.',
      );
    }

    window.onload = () => {
      if (typeof window !== 'undefined') {
        ReactGA.initialize(gtagId, {
          debug: gaDebug,
        });
        const { location } = window;
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
      }
    };
  }, []);

  const onClick = (selectedIem, event) => {
    setSelected(selectedIem);
    setSessions(filterSessions(eventSchedule, selectedIem));
    ReactGA.event({
      category: 'Sessions Navigation',
      action: 'Click',
      label: event.target.innerText,
    });
  };

  const defaultImage = '../img/defaultImage.png';

  return (
    <>
      <Header />
      <Box margin="medium" pad="medium">
        <Box direction="row-responsive">
          <Box width="xsmall" height="xsmall">
            <Image src="/img/hpedevQRCode.png" alt="HPE DEV QR Code" />
          </Box>
          <Heading margin="xsmall" size="large">
            <strong> Sessions </strong>
          </Heading>
        </Box>
        <Tabs flex="grow" justify="start">
          <Tab
            title={
              <Text
                onClick={(e) => {
                  e.preventDefault();
                  onClick(9, e);
                }}
                color={selected === 9 ? 'dark-3' : 'brand'}
                size="large"
              >
                Day 1
              </Text>
            }
          />
          <Tab
            title={
              <Text
                onClick={(e) => {
                  e.preventDefault();
                  onClick(10, e);
                }}
                color={selected === 10 ? 'dark-3' : 'brand'}
                size="large"
              >
                Day 2
              </Text>
            }
          />
          <Tab
            title={
              <Text
                onClick={(e) => {
                  e.preventDefault();
                  onClick(11, e);
                }}
                color={selected === 11 ? 'dark-3' : 'brand'}
                size="large"
              >
                Day 3
              </Text>
            }
          />
          <Tab
            title={
              <Text
                onClick={(e) => {
                  e.preventDefault();
                  onClick(12, e);
                }}
                color={selected === 12 ? 'dark-3' : 'brand'}
                size="large"
              >
                Day 4
              </Text>
            }
          />
          <Tab
            title={
              <Text
                onClick={(e) => {
                  e.preventDefault();
                  onClick(13, e);
                }}
                color={selected === 13 ? 'dark-3' : 'brand'}
                size="large"
              >
                Day 5
              </Text>
            }
          />
          <Tab
            title={
              <Text
                onClick={(e) => {
                  e.preventDefault();
                  onClick(undefined, e);
                }}
                color={selected === undefined ? 'dark-3' : 'brand'}
                size="large"
              >
                Garden
              </Text>
            }
          />
        </Tabs>
        {sessions.map(
          ({
            id,
            sessionId,
            title,
            page,
            pageLink,
            presenter,
            content,
            ListOfTimes,
            presentationlink,
            videoLink,
            image,
            datetimeStart,
            datetimeEnd,
            hashLink,
          }) => (
            <TabLayout
              id={hashLink}
              sessionId={sessionId}
              key={id}
              image={image === '' ? defaultImage : image}
              title={title}
              page={page}
              pageLink={pageLink}
              presenter={presenter}
              content={content}
              ListOfTimes={ListOfTimes}
              presenterLink={presentationlink}
              videoLink={videoLink}
              date={datetimeStart}
              timeStart={datetimeStart}
              timeEnd={datetimeEnd}
            />
          ),
        )}
      </Box>
    </>
  );
};

LandingPage.propTypes = {
  day: PropTypes.number,
};

export default LandingPage;
