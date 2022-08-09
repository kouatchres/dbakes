import React from 'react';
import RegionList from '@/region/RegionList';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme =>
  createStyles({
    pageStyled: {
      margin: 'auto',
      borderTop: '1rem solid #829079',
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(1.7),
      paddingRight: theme.spacing(1.7),
      maxWidth: '25%',
      minWidth: '10rem'
    }
  })
);

export const regionList = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.pageStyled}>
      <RegionList />
    </Paper>
  );
};

export default regionList;
