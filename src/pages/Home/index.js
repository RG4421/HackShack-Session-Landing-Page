import React from 'react';
import { Box, Text, Image } from 'grommet';
import { Layout, ButtonSplit } from '../../components/index';

const Home = () => {
  return (
    <Layout background="/img/hack-shack-home-background.png">
      <Box
        direction="column"
        align="center"
        justify="start"
        style={{ position: 'relative' }}
        height="100vh"
      >
        <Box>
          <Image
            fit="contain"
            src="/img/hack-shack-dve-logo.svg"
            alt="Hack Shack"
          />
        </Box>
        <Text alignSelf="end" textAlign="start" size="xlarge">
          Welcome to the underbelly of HPE Discover, welcome to the Dev
          HackShack. Events, talks, and games for the folks that make the
          awesome possible. Come on in and see who’s home!
        </Text>
        <ButtonSplit to="https://developer.hpe.com">
          Visit HPE Developer
        </ButtonSplit>
      </Box>
    </Layout>
  );
};

export default Home;
