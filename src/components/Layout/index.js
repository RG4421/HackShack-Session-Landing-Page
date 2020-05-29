import React from 'react';
import PropTypes from 'prop-types';
import { Box, Main } from 'grommet';
import { Footer, Header, SideNav } from '../index';

const Layout = ({ children, background }) => {
  return (
    <Box
      background={{
        image: `url(${background})`,
        size: 'cover',
      }}
      style={{ height: 'auto', minHeight: '100vh' }}
    >
      <Header />
      <Main full pad="large" margin="large">
        <Box gap="xlarge" direction="row">
          <SideNav />
          <Box full>{children}</Box>
        </Box>
      </Main>
      <Footer />
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string.isRequired,
};

export default Layout;
