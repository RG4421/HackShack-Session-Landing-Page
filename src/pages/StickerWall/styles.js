import styled from 'styled-components';
import { Box } from 'grommet';

export const StyledBox = styled(Box)`
  flex-flow: row wrap;

  > div:nth-child(6) {
    flex: 0 0 40%;
  }
  > div:nth-child(11) {
    flex-basis: 40%;
  }
  > div:nth-child(12) {
    flex-basis: 40%;
  }
  .div > * {
    flex: 0 0 auto;
  }
`;

export default { StyledBox };
