/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React from "react";
import { Stack, Box, Image, Text } from "grommet";
import { ImageContainer, LogoButton, BrickWall } from "./styles";

export const Header = () => (
  <Stack anchor="center">
    <BrickWall
      fill
      flex
      background={{
        image: "url(/img/BrickWallImage.png)"
      }}
    >
      <ImageContainer alignSelf="center">
        <img src="/img/HPETSS2020.png" alt="Hack Shack" />
      </ImageContainer>
      <LogoButton
        href="https://developer.hpe.com/"
        target="_blank"
        margin={{ top: "medium", left: "medium" }}
      >
        <Box alignSelf="start" margin="medium" direction="row">
          <Image src="/img/hpe-dev-logo.svg" />
          <Text
            size="xlarge"
            margin={{ right: "xsmall", left: "small" }}
            weight="bold"
            color="light-1"
            alignSelf="center"
          >
            HPE
          </Text>
          <Text size="xlarge" color="light-1" alignSelf="center">
            Developer
          </Text>
        </Box>
      </LogoButton>
    </BrickWall>
  </Stack>
);

export default Header;
