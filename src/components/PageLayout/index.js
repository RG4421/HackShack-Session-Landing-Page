import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import SideNav from '../SideNav';

const PageLayout = ({ children }) => {
  return (
    <Box width="100%" align="center" gap="large">
      <Box pad="medium" background="background-front" width="full">
        Top Nav
      </Box>
      <Box width="xlarge" direction="row-responsive">
        <SideNav />
        {children}
      </Box>
    </Box>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
