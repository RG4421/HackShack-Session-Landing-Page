import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Heading, Text, Image } from 'grommet';
import { Link } from 'react-router-dom';
import { CardImage, Card } from './index';

export const ContentCards = ({ image, title, desc, link, label, path }) => {
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
        {path && path ? (
          <Link to={{ pathname: path }}>
            <Button
              margin={{ vertical: 'small' }}
              alignSelf="start"
              label={label}
              primary
            ></Button>
          </Link>
        ) : (
          <Button
            margin={{ vertical: 'small' }}
            alignSelf="start"
            label={label}
            href={link}
            target="_blank"
            primary
          ></Button>
        )}
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
