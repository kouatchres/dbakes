var FormData = require('form-data');
const extractImageInfo = async (imageObj: string, name: string) => {
  // setImageOrPdf({});
  if (imageObj) {
    // const files: FileList = event?.target?.files;
    const data = new FormData();
    data.append('file', imageObj);
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
    // setImageOrPdf({ ...imageOrPdf, [name]: `${file.secure_url}` });
  }
};
// return { imageOrPdf, handleFileUpload };

export default extractImageInfo;
