/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React, { useContext } from 'react';
import { Box, Text, Header, Image, Button, ResponsiveContext } from 'grommet';
import { Search } from 'grommet-icons';

export const MainHeader = () => {
  const headerLinks = [
    { label: 'HOME', href: '#' },
    { label: 'AGENDA', href: '#' },
    { label: 'TOPICS', href: '#' },
    { label: 'CONNECT', href: '#' },
    { label: 'SHARE', href: '#' },
    { label: 'PLAY', href: '#' },
    { label: 'HELP', href: '#' },
  ];
  const size = useContext(ResponsiveContext);
  return (
    <Header
      align="center"
      direction="row"
      flex={false}
      justify="between"
      gap="medium"
      fill="horizontal"
      pad="medium"
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
        {headerLinks.map(link => (
          <Button key={link.label} label={link.label} />
        ))}
      </Box>
      <Box direction="row" gap="medium">
        <Search></Search>
        <Box background={{ color: 'light-4' }} round="full" pad="xxsmall">
          <Text size="xsmall" textAlign="center">
            PS
          </Text>
        </Box>
      </Box>
    </Header>
  );
};
export default MainHeader;
