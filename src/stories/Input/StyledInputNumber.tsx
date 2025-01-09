import { InputProps } from '@mui/material';
import { Key } from 'react';
import Input from '.';

interface InputNumberProps extends Omit<InputProps, 'onChange' | 'ref'> {
  readOnly?: boolean;
  value?: Key;
  onChange?: (val: Key) => void;
}

const InputNumber = (props: InputNumberProps) => {
  const { readOnly, value, onChange = () => {}, placeholder, ...rest } = props;
  return (
    <Input
      readOnly={readOnly}
      type='text'
      noHint
      value={value}
      placeholder={placeholder}
      sx={{ borderRadius: '4px' }}
      {...rest}
      onChange={e => {
        const inputValue = e.target.value;
        const validInput = inputValue.replace(/[^0-9.,]/g, '');
        onChange(validInput);
      }}
    />
  );
};

export default InputNumber;
