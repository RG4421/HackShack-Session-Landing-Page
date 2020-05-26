import React from 'react';
import { Box, Heading, Button, Grid, ResponsiveContext } from 'grommet';
import { FormPreviousLink } from 'grommet-icons';
import PageLayout from '../components/PageLayout';

// columns, rows and areas are for Grid with a known number of contents / boxes.

// If the size is small, we only see 1 column
// If the size is medium, we only see 2 columns
// If the size is either large or xlarge, we see 3 columns
const columns = {
  small: ['auto'],
  medium: ['auto', 'auto'],
  large: ['auto', 'auto', 'auto'],
  xlarge: ['auto', 'auto', 'auto', 'auto', 'auto'],
};

// If the size is small, we have 3 rows
// If the size is medium, we have 2 rows
// If the size is large or xlarge, we have 1 row
const rows = {
  small: ['xsmall', 'xsmall', 'xsmall'],
  medium: ['xsmall', 'xsmall'],
  large: ['xsmall'],
  xlarge: ['xsmall'],
};

// Let's say this is returned from an API
const stickers = [
  '/img/HackShack.png',
  '/img/HackShack.png',
  '/img/HackShack.png',
  '/img/HackShack.png',
  '/img/HackShack.png',
  '/img/HackShack.png',
  '/img/HackShack.png',
  '/img/HackShack.png',
  '/img/HackShack.png',
  '/img/HackShack.png',
];

// Create box for each sticker
const listStickerBoxes = stickers.map(stickerName => (
  <Box
    fill
    key={stickerName}
    background="dark"
    border
    round="small"
    justify="center"
    align="center"
  >
    <Box
      align="center"
      justify="center"
      // margin="medium"
      background={{
        dark: true,
        image: `url(${stickerName})`,
        size: 'contain',
      }}
      pad="large"
    />
  </Box>
));

const Responsive = ({
  children,
  overrideColumns,
  overrideRows,
  areas,
  ...props
}) => (
  <ResponsiveContext.Consumer>
    {size => {
      console.log('size', size);
      // Take into consideration if not array is sent but a simple string
      let columnsVal = columns;
      if (columns) {
        if (columns[size]) {
          columnsVal = columns[size];
        }
      }

      let rowsVal = rows;
      if (rows) {
        if (rows[size]) {
          rowsVal = rows[size];
        }
      }

      // Also if areas is a simple array not an object of arrays for
      // different sizes
      let areasVal = areas;
      if (areas && !Array.isArray(areas)) areasVal = areas[size];

      return (
        <Grid
          {...props}
          areas={!areasVal ? undefined : areasVal}
          rows={!rowsVal ? size : rowsVal}
          columns={!columnsVal ? size : columnsVal}
        >
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);

const StickerWallPage = props => {
  return (
    <PageLayout background={props.background}>
      <Box direction="column" align="center" pad="large" gap="medium">
        <Box align="start" fill="horizontal">
          <Button
            icon={<FormPreviousLink />}
            label="Back to Arcade"
            href="/arcade"
          ></Button>
        </Box>
        <Box
          align="start"
          fill="horizontal"
          background={{ color: '#263040', opacity: 'strong' }}
          pad="large"
          round="small"
        >
          <Box align="start">
            <Heading level="3" size="medium" margin="none" textAlign="start">
              HPE DEV STICKER WALL
            </Heading>
          </Box>
          <Box>
            <Responsive
              gap="small"
              margin="medium"
              columns="xlarge"
              rows="small"
            >
              {listStickerBoxes}
            </Responsive>
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default StickerWallPage;
