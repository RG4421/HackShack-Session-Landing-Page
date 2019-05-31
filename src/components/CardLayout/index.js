/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React from 'react';
import PropTypes from 'prop-types';
import
{
  Box, Paragraph, Text,
}
  from 'grommet';
import { StyledAnchor, StyledHeading } from './styles';

export const CardLayout = ({
  image, title, page, presenter,
  content, presentationLink, videoLink, ...rest
}) =>
  <Box
    pad={{ top: 'small', bottom: 'medium' }}
    margin="small"
    direction="row-responsive"
    gap="large"
    border={{ side: 'bottom' }}
    {... rest}
  >
    <Box
      height="medium"
      width="large"
      margin={{ bottom: 'large' }}
      background={{
        image: `url(${image})`,
      }}
    />
    <Box direction="column">
      <StyledHeading margin="none" size="small">
        {title}
      </StyledHeading>
      <Text size="large" color="#00C781" weight="bold">{page}</Text>
      <Paragraph size="large" margin={{ bottom: 'xsmall' }}>{presenter}</Paragraph>
      <Paragraph margin="none">{content}</Paragraph>
      <Box fill align="end" margin={{ bottom: 'xsmall' }} gap="medium" direction="row-responsive">
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
  </Box>;

CardLayout.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  page: PropTypes.string,
  presenter: PropTypes.string,
  content: PropTypes.string,
  presentationLink: PropTypes.string,
  videoLink: PropTypes.string,
};

export default CardLayout;
