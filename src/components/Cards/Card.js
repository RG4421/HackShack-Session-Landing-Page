import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

export const Card = ({ children, ...rest }) => {
  return (
    <Box
      width={{ max: '500px' }}
      fill
      round="small"
      overflow="hidden"
      {...rest}
    >
      <Box fill pad="medium">
        {children}
      </Box>
    </Box>
  );
};

Card.propTypes = {
  children: PropTypes.node,
};
