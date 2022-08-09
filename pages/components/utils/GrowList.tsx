import React from 'react';
import { Box, BoxProps, Grow } from '@material-ui/core';

export interface GrowListProps extends BoxProps {
  interval: number;
}
const GrowList = (props: GrowListProps) => {
  const { children, interval = 2000, ...rest } = props;
  return (
    <Box {...rest}>
      {React.Children.map(children, (child: any, index: any) =>
        React.isValidElement(child) ? (
          <Grow
            in
            style={{ transformOrigin: '0 0 0' }}
            timeout={(index + 1) * interval}
          >
            {child}
          </Grow>
        ) : null
      )}
    </Box>
  );
};

export default GrowList;
