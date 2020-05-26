import React from 'react';
import { Box, Text, Image } from 'grommet';
import { Layout, ButtonSplit } from '../../components/index';

const Home = () => {
  return (
    <Layout background="/img/hack-shack-home-background.png">
      <Box direction="column" align="center">
        <Box>
          <Image src="/img/hack-shack-dve-logo.png" alt="Hack Shack" />
        </Box>
        <Box>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus
            enim ante, a efficitur lacus lacinia facilisis. Pellentesque mattis
            tellus aliquam, faucibus diam vitae, faucibus nibh. Proin semper
            interdum leo, ut tempus tortor consectetur nec.
          </Text>
        </Box>
        <Box>
          <ButtonSplit to="https://developer.hpe.com">
            Visit HPE Developer
          </ButtonSplit>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
