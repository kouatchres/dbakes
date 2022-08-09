import { Button } from '@material-ui/core';
import NextLink from 'next/link';

const RouterLink = ({ href, children, ...props }) => {
  return (
    <NextLink href={href}>
      <Button component="MuiLink">
        {/* <Typography
          style={{ fontFamily: 'Roboto', fontSize: '1.05rem' }}
          variant="body2"
          component="h6"
        > */}
        {children}
        {/* </Typography> */}
      </Button>
    </NextLink>
  );
};

export default RouterLink;
