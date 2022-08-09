import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import React, { ChangeEvent } from 'react';

export interface IDialogProps {
  onClose: (value: string) => void;
  isOpen: boolean;
  children: {};
  title: string;
  id: string;
}

const UpdatePopup = (props) => {
  const {
    isOpen = false,
    onClose,
    title = '',
    id = 'jkiu125',
    children
    // ...rest
  } = props;

  const handleClose = (event: ChangeEvent<HTMLInputElement>) => {
    onClose(event.target.value);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={isOpen}
      id={id}
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          backgroundImage:
            'linear-gradient(100deg,rgba(75,145,185,0.5) 22%,rgba(282,415,185,0.5) 48%, rgba(75,145,185,0.5) 80%)'
          // 'linear-gradient(100deg,rgba(75,145,185,0.5) 22%,rgba(282,415,185,0.5) 48%, rgba(292,32,186,0.25) 80%)'

          // backgroundImage: "url('/backgrdImages/goldern_feast.jpg')"
        }
      }}
    >
      <DialogTitle title={title} />
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default UpdatePopup;
