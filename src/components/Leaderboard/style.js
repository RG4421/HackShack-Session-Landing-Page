/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import styled from 'styled-components';
import { Box } from 'grommet';

export const LeaderboardLayout = styled(Box)`
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
    @media (orientation: landscape) {
      transform: translate(0%, -23.5%) scale(0.55, 0.55)
    }
  }
  .highscore-title {
    font-family: "ArcadeClassic";
    font-size: 95px;
  }
  .highscore-text {
    font-family: "ArcadeClassic";
    font-size: 50px;
  }
`;

export default LeaderboardLayout;
