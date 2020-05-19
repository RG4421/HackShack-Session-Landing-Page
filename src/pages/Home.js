import React from 'react';
import { Box } from 'grommet';
import PageLayout from '../components/PageLayout';
import ButtonSplit from '../components/ButtonSplit';

const HomePage = () => {
  return (
    <PageLayout>
      <Box>
        <ButtonSplit to="/schedule">View Schedule</ButtonSplit>
      </Box>
    </PageLayout>
  );
};

export default HomePage;
