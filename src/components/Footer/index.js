import React from 'react';
import { Box, Text, Anchor } from 'grommet';
import { HPEDevFooter } from '../index';
import { StyledFooter } from './styles';

export const Footer = () => {
  const footerLinks = [
    {
      label: 'Privacy Policy |',
      href: 'https://www.hpe.com/us/en/legal/privacy.html',
    },
    {
      label: 'Cookies |',
      href: 'https://www.hpe.com/us/en/legal/privacy.html#datacollection',
    },
    {
      label: 'Terms of Use |',
      href: 'https://www.hpe.com/us/en/about/legal/terms-of-use.html',
    },
    {
      label: 'Do Not Sell My Personal Information',
      href: 'https://www.hpe.com/us/en/privacy/personal-information.html',
    },
  ];
  return (
    <Box>
      <HPEDevFooter />
      <StyledFooter
        pad={{ left: 'medium', right: 'medium' }}
        background="white"
      >
        <Box gap="xsmall">
          <Text size="small">
            &copy; 2020 Hewlett Packard Enterprise Development LP
          </Text>
        </Box>
        <Box direction="row" gap="xsmall" pad="small" wrap>
          {footerLinks.map(link => (
            <Anchor
              key={link.label}
              label={link.label}
              href={link.href}
            ></Anchor>
          ))}
        </Box>
      </StyledFooter>
    </Box>
  );
};
export default Footer;
