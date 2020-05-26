import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import MainHeader from '../Header';
import AppFooter from '../Footer';
import HPEDevFooter from '../HPEDevFooter';
import SideNav from '../SideNav';

const PageLayout = ({ children, background }) => {
  return (
    <Box
      fill="vertical"
      background={{
        image: `url(${background})`, // swap BG based on route
        size: 'cover',
        position: 'relative',
        // opacity: 0.1,
      }}
      justify="between"
      // width="100vw"
      // height={{ min: '100vh', max: 'auto' }}
      align="start"
    >
      <MainHeader />
      <Box direction="row" fill>
        <Box pad={{ left: 'xlarge', right: 'large' }}>
          <SideNav />
        </Box>
        <Box fill>{children}</Box>
      </Box>
      <HPEDevFooter />
      <AppFooter />
    </Box>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string.isRequired,
};

export default PageLayout;
