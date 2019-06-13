/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import styled from 'styled-components';
import { Box } from 'grommet';

export const LeaderboardLayout = styled(Box)`
  min-height: 1920px;
  min-width: 1080px;
  max-height: 1920px;
  max-width: 1080px;
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
