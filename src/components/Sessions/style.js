/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */

import styled from 'styled-components';
import { Box } from 'grommet';

export const SessionsLayout = styled(Box)`
  height: 100vh;
  .outer {
    display: table;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .middle {
    display: table-cell;
    vertical-align: middle;
  }
  .inner {
    margin-left: auto;
    margin-right: auto;
    max-width: 1080px;
  }
  .session-text {
    font-size: 40px;
    line-height: 1;
    @media (orientation: landscape) {
      font-size: 25px;
    }
  }
  .session-text-time {
    font-weight: bold;
    font-size: 40px;
    line-height: 1;
    @media (orientation: landscape) {
      font-size: 25px;
    }
  }
  .session-separator {
    @media (orientation: landscape) {
      margin-top: 24px;
      margin-bottom: 24px;
    }
  }
  .upcoming-sessions-title {
    font-size: 80px;
    font-weight: 100;
    @media (orientation: landscape) {
      font-size: 40px;
      margin-top: 0px;
      margin-bottom: 60px;
    }
  }
`;

export default SessionsLayout;
