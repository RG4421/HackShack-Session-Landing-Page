import React, { useContext } from 'react';
import { Box, Text, Image, Header, ResponsiveContext, Button } from 'grommet';

export const HPEDevFooter = () => {
  const footerLinks = [
    { label: 'Platforms', href: 'https://developer.hpe.com/platforms' },
    { label: 'Open Source', href: 'https://developer.hpe.com/projects' },
    { label: 'Community', href: 'https://developer.hpe.com/community' },
    { label: 'Events', href: 'https://developer.hpe.com/events' },
  ];
  const size = useContext(ResponsiveContext);
  //========================================= Footer
  return (
    <Header
      align="center"
      direction="row"
      flex={false}
      justify="between"
      gap="medium"
      fill="horizontal"
      pad="xsmall"
      border="top"
    >
      <Box align="center" justify="center" direction="row" gap="small">
        <Box height="xxsmall" width="xxsmall">
          <Image
            fit="contain"
            size="small"
            src="https://us-central1-grommet-designer.cloudfunctions.net/images/lozzi-hpe-com/developer-logo.png"
          ></Image>
        </Box>
        <Box align="center" justify="center" direction="row" gap="xsmall">
          <Text weight="bold">HPE</Text>
          <Text>Developer</Text>
        </Box>
      </Box>
      <Box
        direction="row"
        align={size !== 'small' ? 'center' : undefined}
        gap="xsmall"
        wrap
      >
        {footerLinks.map(link => (
          <Button
            key={link.label}
            label={link.label}
            href={link.href}
            target="_blank"
          />
        ))}
      </Box>
    </Header>
  );
};
export default HPEDevFooter;
