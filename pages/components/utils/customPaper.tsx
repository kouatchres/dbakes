import { lighten, makeStyles, Paper, Theme } from '@material-ui/core';

const useStyles = makeStyles<
  Theme,
  { elevation: number; maxWidth: string; minWidth: string }
>(theme => ({
  paperStyles: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    borderRadius: '0.4rem',
    maxWidth: props => props.maxWidth,
    minWidth: props => props.minWidth,
    boxShadow: props => theme.shadows[props.elevation],
    backgroundColor: props =>
      lighten(theme.palette.background.paper, props.elevation * 0.05)
  }
}));

const CustomPaper: React.FC<{
  elevation: number;
  maxWidth: string;
  minWidth: string;
}> = ({ children, elevation, maxWidth, minWidth }) => {
  const classes = useStyles({ elevation, maxWidth, minWidth });
  return <Paper className={classes.paperStyles}>{children}</Paper>;
};
export default CustomPaper;
