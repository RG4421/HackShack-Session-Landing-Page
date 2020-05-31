/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React, { useContext } from 'react';
import {
  Box,
  Text,
  Header as HeaderGrommet,
  Image,
  Button,
  ResponsiveContext,
} from 'grommet';

export const Header = () => {
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
    <HeaderGrommet
      align="center"
      direction="row"
      flex={false}
      justify="between"
      gap="medium"
      height="xsmall"
      fill="horizontal"
      pad="medium"
    >
      <Box
        alignSelf="start"
        align="center"
        justify="center"
        direction="row"
        gap="small"
      >
        <Box height="xxsmall" width="xxsmall">
          <Image
            fit="contain"
            size="small"
            src="https://us-central1-grommet-designer.cloudfunctions.net/images/lozzi-hpe-com/developer-logo.png"
          />
        </Box>
        <Box align="center" justify="center" direction="row" gap="xsmall">
          <Text weight="bold">HPE</Text>
          <Text>Developer</Text>
        </Box>
      </Box>
      <Box
        direction="row"
        alignSelf="start"
        align={size !== 'small' ? 'center' : undefined}
        gap="xsmall"
        wrap
      >
        {headerLinks.map(link => (
          <Button key={link.label} label={link.label} />
        ))}
      </Box>
    </HeaderGrommet>
  );
};
export default Header;
