import React from 'react';
import { Box, Stack, Text } from 'grommet';
import PageLayout from '../components/PageLayout';
import ButtonSplit from '../components/ButtonSplit';

const HomePage = props => {
  return (
    <PageLayout background={props.background}>
      <Stack anchor="bottom-right">
        <Box direction="column" justify="between" align="center" gap="small">
          <Box align="center">
            <img
              // style="width:329px"
              src="/img/hack-shack-dve-logo.png"
              alt="Hack Shack"
            />
          </Box>
          <Box align="center" width="medium">
            <Text alignSelf="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              dapibus enim ante, a efficitur lacus lacinia facilisis.
              Pellentesque mattis tellus aliquam, faucibus diam vitae, faucibus
              nibh. Proin semper interdum leo, ut tempus tortor consectetur nec.
            </Text>
          </Box>
          <Box align="center">
            <ButtonSplit to="https://developer.hpe.com">
              Visit HPE Developer
            </ButtonSplit>
          </Box>
        </Box>
      </Stack>
    </PageLayout>
  );
};

export default HomePage;
