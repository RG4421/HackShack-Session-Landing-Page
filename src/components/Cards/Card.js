import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

export const Card = ({ children, ...rest }) => {
  return (
    <Box height="624px" width="576px" round="small" overflow="hidden" {...rest}>
      <Box flex pad="medium">
        {children}
      </Box>
    </Box>
  );
};

Card.propTypes = {
  children: PropTypes.node,
};
