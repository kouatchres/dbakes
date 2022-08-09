import { Grid, Grow, Typography } from '@material-ui/core';
import React, { FC, ReactNode } from 'react';
import GlassCard from './GlassCard';
import SygefexTheme from './SygefexTheme';
import ZoomList from './ZoomList';

const MultiStepFormWrapper: FC<{ children: ReactNode }> = props => {
  return (
    <Grow in>
      <GlassCard maxWidth="90vw" minHeight="60vh" blur={5}>
        <ZoomList interval={1000}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{
              borderRadius: '0.2rem',
              paddingTop: '0.2rem',
              backgroundColor: SygefexTheme?.palette?.background?.default
            }}
          >
            <Grid item>
              <Typography
                color="primary"
                gutterBottom
                variant="h5"
                component="h6"
                style={{
                  textAlign: 'center',
                  fontSize: 'clamp(0.6rem, 3vw + 0.5rem, 2rem)'
                }}
              >
                Checkout
              </Typography>
              {props.children}
            </Grid>
          </Grid>
        </ZoomList>
      </GlassCard>
    </Grow>
  );
};

export default MultiStepFormWrapper;
