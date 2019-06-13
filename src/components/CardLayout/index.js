/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React from "react";
import PropTypes from "prop-types";
import { Box, Heading, Paragraph, Text } from "grommet";
import { StyledAnchor, StyledHeading, StyledParagraph } from "./styles";
import Moment from 'react-moment';

export const CardLayout = ({
  image,
  title,
  page,
  pageLink,
  presenter,
  content,
  presentationLink,
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
      <Heading level="2" size="medium">
        <Moment format="dddd" date={timeStart} />
        ,&nbsp;
        <Moment format="h:mm a" date={timeStart} /> 
        &nbsp;-&nbsp; 
        <Moment format="h:mm a" date={timeEnd} />
      </Heading>
      <StyledAnchor
        target="_blank"
        size="large"
        color="brand"
        label={page}
        href={pageLink}
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
        <StyledAnchor
          target="_blank"
          size="large"
          color="brand"
          label="Presentation Link"
          href={presentationLink}
        />
        <StyledAnchor
          target="_blank"
          size="large"
          color="brand"
          label="Video Link"
          href={videoLink}
        />
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
