import React from 'react';
import { Grid } from 'grommet';

export const CardGrid = ({ children, ...rest }) => {
  return (
    <Grid
      align="end"
      alignSelf="center"
      columns={{ count: 2, size: 'auto' }}
      gap="medium"
      justify="center"
      {...rest}
    >
      {children}
    </Grid>
  );
};
