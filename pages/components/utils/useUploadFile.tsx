import { ChangeEvent, useState } from 'react';
// require('dotenv').config({ path: '../.env' });

const useUploadFile = (initialState: any) => {
  const [imageOrPdf, setImageOrPdf] = useState(initialState);

  const handleFileUpload = async (
    event: ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setImageOrPdf({});
    if (event?.target?.files?.length) {
      const files: FileList = event?.target?.files;
      const data = new FormData();
      data.append('file', files[0]);
      data.append('upload_preset', 'ineximages');
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/inex/image/upload',
        {
          method: 'POST',
          body: data
        }
      );

      const file = await res.json();
      console.log(file);
      setImageOrPdf({ ...imageOrPdf, [name]: `${file.secure_url}` });
    }
  };
  return { imageOrPdf, handleFileUpload };
};
export default useUploadFile;
