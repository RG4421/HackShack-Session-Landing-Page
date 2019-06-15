/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React from "react";
import PropTypes from "prop-types";
import { Box, Paragraph } from "grommet";
import {
  StyledAnchor,
  StyledHeading,
  StyledHeading2,
  StyledParagraph
} from "./styles";
import Moment from "react-moment";
import ReactGA from "react-ga";

const handleClick = (action, label) => {
  ReactGA.event({
    category: "Session Detail",
    action: action,
    label: label
  });
};

export const CardLayout = ({
  image,
  title,
  page,
  pageLink,
  presenter,
  content,
  presenterLink,
  videoLink,
  date,
  timeStart,
  timeEnd,
  ...rest
}) => (
  <Box
    pad={{ top: "small", bottom: "medium" }}
    margin="small"
    direction="row-responsive"
    gap="large"
    border={{ side: "bottom" }}
    {...rest}
  >
    <Box
      height="medium"
      width="large"
      margin={{ top: "xsmall" }}
      background={{
        image: `url(${image})`
      }}
    />
    <Box direction="column" width="large">
      <StyledHeading margin="none" size="small">
        {title}
      </StyledHeading>
      {timeStart === undefined ? null : (
        <StyledHeading2
          level="2"
          size="medium"
          margin={{
            vertical: "none"
          }}
        >
          <Moment format="dddd" date={timeStart} />
          ,&nbsp;
          <Moment format="h:mm a" date={timeStart} />
          &nbsp;-&nbsp;
          <Moment format="h:mm a" date={timeEnd} />
        </StyledHeading2>
      )}
      <StyledAnchor
        target="_blank"
        size="large"
        color="brand"
        label={page}
        href={pageLink}
        margin={{ top: "medium" }}
        onClick={() => {
          handleClick("Click - Product Page", title);
        }}
      />
      <Paragraph size="large" margin={{ bottom: "xsmall" }}>
        {presenter}
      </Paragraph>
      <StyledParagraph margin={{ top: "xsmall" }}>{content}</StyledParagraph>
      <Box
        fill
        align="end"
        margin={{ bottom: "xsmall" }}
        gap="medium"
        direction="row-responsive"
      >
      {
        presenterLink === undefined ? null :(
          <StyledAnchor
            target="_blank"
            size="large"
            color="brand"
            label="View Presentation"
            href={presenterLink}
            onClick={() => {
              handleClick("Download - Presentation", title);
            }}
        />
        )
      }
      {
        videoLink === undefined ? null : (
          <StyledAnchor
            target="_blank"
            size="large"
            color="brand"
            label="Video"
            href={videoLink}
            onClick={() => {
              handleClick("Click - Video Link", title);
            }}
        />
        )
      }
      </Box>
    </Box>
  </Box>
);

CardLayout.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  page: PropTypes.string,
  presenter: PropTypes.string,
  content: PropTypes.string,
  presentationLink: PropTypes.string,
  videoLink: PropTypes.string
};

export default CardLayout;
