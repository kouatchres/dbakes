import {
  Box,
  BoxProps,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core';
import React from 'react';

const useStyles = (blur: number) =>
  makeStyles((theme: Theme) =>
    createStyles({
      glass: {
        borderRadius: '0.5rem',
        paddingTop: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        // backgroundColor: 'rgba(25,255,255,0.31)',
        // backgroundColor: 'rgba(25,55,55,0.45)',
        // backgroundColor: '#003366',

        // backgroundImage: 'linear-gradient(40deg, #fde9e9 90%,#A44A22 50%)',
        // backgroundImage: 'linear-gradient(40deg, #afe 50%,#faa6 0%)',
        // backgroundImage:
        //   'linear-gradient(to bottom right,rgba(255,255,255,0.2),rgba(01,200,111,0.1)))',

        // borderBottom: 'solid 2px rgba(0,0,0,0.4)',
        // borderRight: 'solid 2px rgba(0,0,0,0.4)',
        borderTop: 'solid 2px rgba(255,255,255,1)',
        borderLeft: 'solid 2px rgba(255,255,255,1)',
        boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
        backdropFilter: `blur(${blur}px) saturate(70%)`
      }
    })
  );

export interface GlassCardProps extends BoxProps {
  blur: number;
}

const GlassCard = (props: { [x: string]: any; children: any; blur: any }) => {
  const { children, blur, ...rest } = props;
  const classes = useStyles(blur)();
  return (
    <Box className={classes.glass} {...rest}>
      {children}
    </Box>
  );
};

export default GlassCard;
