import styled from 'styled-components';
import { Box } from 'grommet';

export const FooterContainer = styled(Box)`
  white-space: nowrap;
  flex-direction: row;
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

export default { FooterContainer };
