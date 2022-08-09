import React from 'react';
import { Box, BoxProps, Zoom } from '@material-ui/core';

export interface ZoomListProps extends BoxProps {
  interval: number;
}
const ZoomList = (props: ZoomListProps) => {
  const { children, interval = 200, ...rest } = props;
  return (
    <Box {...rest}>
      {React.Children.map(children, (child: any, index: number) =>
        React.isValidElement(child) ? (
          <Zoom
            in
            style={{ transformOrigin: '0 5 10', transitionDelay: '500ms' }}
            timeout={(index + 1) * interval}
          >
            {child}
          </Zoom>
        ) : null
      )}
    </Box>
  );
};

export default ZoomList;
