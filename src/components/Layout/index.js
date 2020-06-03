import React from 'react';
import PropTypes from 'prop-types';
import { Box, Main, Image } from 'grommet';
import { Footer, Header, SideNav } from '../index';

const Layout = ({ children, background }) => {
  return (
    <Box
      background={{
        image: `url(${background})`,
        size: 'cover',
        repeat: 'no-repeat',
        position: 'fixed',
      }}
      style={{ height: 'auto', minHeight: '900px' }}
      justify="between"
    >
      <Box>
        <Header />
        <Box
          gap="xlarge"
          direction="row"
          // height="100vh"
          pad={{ left: 'large', right: 'large' }}
        >
          <SideNav />
          <Box margin={{ left: 'large' }}>{children}</Box>
        </Box>
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
