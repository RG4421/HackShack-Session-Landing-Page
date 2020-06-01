import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Heading, Text, Image } from 'grommet';
import { CardImage, Card } from './index';

export const ContentCards = ({ image, title, desc, link, label }) => {
  return (
    <Card align="start" background="background">
      <CardImage background="background-front">
        <Image src={image} alt="SlackLogo" fit="cover" />
      </CardImage>
      <Box justify="between" basis="60%" fill>
        <Box>
          <Heading margin={{ top: 'medium', bottom: 'small' }} level={2}>
            {title}
          </Heading>
          <Text size="xlarge">{desc}</Text>
        </Box>
        <Button
          margin={{ vertical: 'small' }}
          alignSelf="start"
          href={link}
          label={label}
          primary
        ></Button>
      </Box>
    </Card>
  );
};

ContentCards.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  label: PropTypes.string,
  desc: PropTypes.string,
};
