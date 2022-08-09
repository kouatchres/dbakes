import { useState, ChangeEvent } from 'react';

// useForm functional component
const useForm = (initialState: any) => {
  const [inputValues, setInputValues] = useState(initialState);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const { type, value } = event.target;
    const newValue = type === 'number' ? parseInt(value) : value;
    setInputValues({ ...inputValues, [name]: newValue });
    console.log({ name, newValue });
  };

  return {
    inputValues,
    handleInputChange
  };
};
export default useForm;
