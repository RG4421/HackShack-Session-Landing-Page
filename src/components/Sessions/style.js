/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */

import styled from 'styled-components';
import { Box } from 'grommet';

export const SessionsLayout = styled(Box)`
  min-height: 1920px;
  min-width: 1080px;
  max-height: 1920px;
  max-width: 1080px;
  .session-text {
    font-size: 40px;
    line-height: 1;
  }
  .session-text-time {
    font-weight: bold;
    font-size: 40px;
    line-height: 1;
  }
  .upcoming-sessions-title {
    font-size: 80px;
    font-weight: 100;
    @media only screen and (max-width: 340px) {
      font-size: 30px;
    }
    @media only screen and (min-width: 340px) and (max-width: 500px) {
      font-size: 40px;
    }
    @media only screen and (min-width: 500px) and (max-width: 800px) {
      font-size: 60px;
    }
    @media only screen and (min-width: 1200px) {
      font-size: 100px;
    }
  }
`;

export default SessionsLayout;
