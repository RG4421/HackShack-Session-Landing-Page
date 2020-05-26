import React from 'react';
import { Box, Heading, Paragraph, Button, Text } from 'grommet';
import PageLayout from '../components/PageLayout';

const ArchadePage = props => {
  return (
    <PageLayout background={props.background}>
      <Box
        fill="vertical"
        direction="row-responsive"
        // background={{
        //   image: path, // swap BG based on route
        //   size: 'cover',
        //   // opacity: 0.1,
        // }}
        // justify="between"
        // width="100vw"
        // height={{ min: '200vh', max: 'auto' }}
      >
        <Box align="center" pad="small">
          <Box
            align="center"
            justify="center"
            margin="medium"
            background={{
              dark: false,
              color: 'light-2',
              image: "url('/img/hackshack-attack-welcome1.png')",
            }}
            fill="horizontal"
            pad="xlarge"
          />
          <Box
            align="start"
            justify="center"
            direction="column"
            // fill="horizontal"
          >
            <Heading level="3" size="medium" margin="none" textAlign="start">
              HACKSHACK ATTACK
            </Heading>
            <Paragraph size="small" margin="none" textAlign="start">
              Think SmashTV and Robotron but more awesome! Compete for the top
              score and win prizes. Learn more about The Competition.
            </Paragraph>
          </Box>
          <Box
            align="center"
            justify="start"
            direction="row"
            // flex={true}
            alignSelf="center"
            // basis="xxsmall"
            gap="small"
            margin={{ top: 'large' }}
            fill="horizontal"
          >
            <Button
              label="Play the Game"
              primary={true}
              plain={false}
              hoverIndicator={false}
            />
            <Text size="small">Unlimited Play</Text>
          </Box>
        </Box>
        <Box align="center" pad="small">
          <Box
            align="center"
            justify="center"
            margin="medium"
            background={{
              dark: false,
              color: 'light-2',
              image: "url('/img/StickerWall.png')",
            }}
            fill="horizontal"
            pad="xlarge"
          />
          <Box
            align="start"
            justify="center"
            direction="column"
            fill="horizontal"
          >
            <Heading level="3" size="medium" margin="none" textAlign="start">
              HPE DEV STICKER WALL
            </Heading>
            <Paragraph size="small" margin="none" textAlign="start">
              Grab a avatar, wallpapaer, or emoji for to throw on your computer!
            </Paragraph>
          </Box>
          <Box
            align="center"
            justify="start"
            direction="row"
            // flex={true}
            alignSelf="center"
            basis="xxsmall"
            gap="small"
            margin={{ top: 'large' }}
            fill="horizontal"
          >
            <Button
              label="Grab some Art"
              href="/stickerwall"
              primary={true}
              plain={false}
              hoverIndicator={false}
            />
            <Text size="small">Grab some Art</Text>
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default ArchadePage;
