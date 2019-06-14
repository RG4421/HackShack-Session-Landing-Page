/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React from 'react';
import { Stack } from 'grommet';
import { ImageContainer, LogoButton, BrickWall } from './styles';

export const Header = () =>
  <Stack anchor="center">
    <BrickWall
      fill
      flex
      background={{
        image: 'url(/img/BrickWallImage.png)',
      }}
    >
      <ImageContainer
        alignSelf="center"
      >
        <img src="/img/Group-4.png" alt="Hack Shack" />
      </ImageContainer>
      <LogoButton
        href="https://developer.hpe.com/"
        target="_blank"
        margin={{ top: 'medium', left: 'medium' }}
      >
        <img src="/img/DevLogoImage.png" alt="Dev Logo" />
      </LogoButton>
    </BrickWall>
  </Stack>;

export default Header;
