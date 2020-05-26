import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { Footer, Header, SideNav } from '../index';

const Layout = ({ children, background }) => {
  return (
    <Box
      background={{
        image: `url(${background})`,
        size: 'cover',
      }}
      justify="between"
      height="100%"
    >
      <Header />
      <Box direction="row">
        <SideNav />
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string.isRequired,
};

export default Layout;
