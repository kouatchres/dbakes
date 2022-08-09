import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import React, { ChangeEvent } from 'react';

const AddPopup = (props) => {
  const { isOpen = false, onClose, title = '', children } = props;

  const handleClose = (event: ChangeEvent<HTMLInputElement>) => {
    onClose(event.target.value);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={isOpen}
      // BackdropProps={{ invisible: false }}
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          backgroundImage:
            'linear-gradient(100deg,rgba(75,145,185,0.5) 22%,rgba(282,415,185,0.5) 48%, rgba(292,32,186,0.25) 80%)'
          // 'linear-gradient(75deg,rgba(255,545,155,0.5) 22%,rgba(22,245,485,0.2) 48%, rgba(22,32,16,0.25) 80%)'

          // backgroundImage: "url('/backgrdImages/goldern_feast.jpg')"
        }
      }}
    >
      <DialogTitle title={title} />
      <DialogContent style={{ marginBottom: '2rem' }}>{children}</DialogContent>
    </Dialog>
    // </div>
  );
};

export default AddPopup;
