import React from 'react';
import { Box, Text, Image, Button } from 'grommet';

export const HPEDevFooter = () => {
  const footerLinks = [
    { label: 'Platforms', href: 'https://developer.hpe.com/platforms' },
    { label: 'Open Source', href: 'https://developer.hpe.com/projects' },
    { label: 'Community', href: 'https://developer.hpe.com/community' },
    { label: 'Events', href: 'https://developer.hpe.com/events' },
  ];

  return (
    <Box align="center" direction="row" justify="between" border="top">
      <Box direction="row" align="center" gap="small" margin="small">
        <Box width="xxsmall" height="xxsmall">
          <Image
            fit="contain"
            src="https://us-central1-grommet-designer.cloudfunctions.net/images/lozzi-hpe-com/developer-logo.png"
          />
        </Box>
        <Text>
          <Text weight="bold">HPE </Text>
          Developer
        </Text>
      </Box>
      <Box gap="xsmall" direction="row">
        {footerLinks.map(link => (
          <Button
            key={link.label}
            label={link.label}
            href={link.href}
            target="_blank"
          />
        ))}
      </Box>
    </Box>
  );
};
export default HPEDevFooter;
