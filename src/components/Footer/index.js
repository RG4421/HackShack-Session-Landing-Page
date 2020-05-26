import React from 'react';
import { Box, Text, Footer as FooterGrommet, Button } from 'grommet';
import { HPEDevFooter } from '../index';

export const Footer = () => {
  const footerLinks = [
    { label: 'Terms' },
    { label: 'Privacy' },
    { label: 'Security' },
    { label: 'Feedback' },
  ];
  return (
    <Box>
      <HPEDevFooter />
      <FooterGrommet background="white">
        <Box gap="xsmall">
          <Text size="small">
            &copy; 2020 Hewlett Packard Enterprise Development LP
          </Text>
        </Box>
        <Box direction="row" gap="xsmall" wrap>
          {footerLinks.map(link => (
            <Button key={link.label} label={link.label} />
          ))}
        </Box>
      </FooterGrommet>
    </Box>
  );
};
export default Footer;
