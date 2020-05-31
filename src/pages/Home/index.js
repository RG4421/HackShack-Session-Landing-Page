import React from 'react';
import { Box, Text, Image } from 'grommet';
import { Layout, ButtonSplit } from '../../components/index';

const Home = () => {
  return (
    <Layout background="/img/hack-shack-home-background.png">
      <Box direction="column" align="end">
        <Box>
          <Image
            fit="contain"
            src="/img/hack-shack-dve-logo.png"
            alt="Hack Shack"
          />
        </Box>

        <Box
          align="center"
          gap="medium"
          style={{
            transform: 'rotate(-10deg)',
            width: '720px',
            height: '168px',
          }}
        >
          <Text alignSelf="end" textAlign="start" size="xlarge">
            Welcome to the underbelly of HPE Discover, welcome to the Dev
            HackShack. Events, talks, and games for the folks that make the
            awesome possible. Come on in and see who’s home!
          </Text>
          <ButtonSplit to="https://developer.hpe.com">
            Visit HPE Developer
          </ButtonSplit>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
